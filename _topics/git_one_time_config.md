---
topic: "github: one-time setup steps"
desc: "ssh-key generation, configure user.name, etc. "
---

# Using git from any computer: one-time setup steps

There are two things you need to do to make your laptop or Raspberry Pi works smoothly with git. You will need to do the following set up per physical computer or virtual machine (VM) that you plan to use. T

* Setting your global `user.name` and `user.email` values
* Creating an ssh public/private key pair for your machine/VM
* Uploading the public key for your machine/VM to your github.com account.

Instructions for each of these steps appear below.

## Install git on your VM or machine
To do this step you should be in a raspbian bash shell, either on the emulated environment with docker or on the actual raspberry pi. You should also have internet access. To install git run the following command at the bash prompt

``` 
$sudo apt-get install git

```

## Setting your global `user.name` and `user.email` values

You will need to type the following commands just once for each separate machine/VM

You may also need to do these commands on your own Mac, Windows or Linux box if you use command line git there.   They configure some
options in a file called `~/.gitconfig`.  It may have other names and locations on Mac or Windows. Note: You should not be developing code on a Windows or MAC machine for the purpose of this class. If you have either of these, make sure the git configurations are done within either the emulated Raspian OS that is run inside docker. If you don't have this setup yet, come back to this tutorial later

Type in these commands, but change the name `Alex Triton` to your own real world first and last name.  If you prefer, for privacy reasons,
you may use your first name and last initial.     Also, change the email address `atriton@ucsd.edu` to your own `@ucsd.edu` email address.

```
git config --global user.name "Alex Triton"
git config --global user.email "atriton@ucsd.edu"
```

## Creating an ssh public/private key pair 

In this step, we will set up a public/private key pair on your machine/VM 

The idea of a public/private key pair is that you give away your public key, and you keep your private key a secret. 
This allows anyone with your public key to know that you are you without you having to type in a password 
(as long as your private key stays secret).

To generate a public/private key pair: Open a terminal session, and type the `ssh-keygen` command. (Note that its all one word, `ssh-keygen` with a hyphen in the middle.)

You will be asked a series of questions. For each question, just press the enter/return key (to accept the default option.)

That will look like this:

```
pi@3f8b1662662a:/ $ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/pi/.ssh/id_rsa): 
Created directory '/home/pi/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/pi/.ssh/id_rsa.
Your public key has been saved in /home/pi/.ssh/id_rsa.pub.
The key fingerprint is:
96:af:e1:8b:16:ef:b9:e1:e0:b2:4a:15:56:f8:de:54 pi@3f8b1662662a
The key's randomart image is:
+---[RSA 2048]----+
|     ..          |
|    ..    E      |
|    o.   .       |
|   . .. ..       |
|    .. oS        |
|   .  o...       |
|  .   .oo .      |
| .  ...=.=       |
|  ...+o.Oo       |
+-----------------+
pi@3f8b1662662a:/ $
```


The effect of that is to create two files in a hidden directory of your account called `.ssh` 

If you type `cd` to go to your home directory, and `ls` at your terminal prompt, you will not see this directory. Example:

```
pi@3f8b1662662a:~ $ ls
pi@3f8b1662662a:~ $ 
```

But if you use `ls -a` you WILL see the `.ssh` directory along with *many* other hidden directories and files.  Check out the difference between `ls` and `ls -a`:


Next, type the command `cd ~/.ssh` at the Terminal prompt.   Then use `ls` to list the files in that directory.

You should see two files `id_rsa` and `id_rsa.pub` as follows. (If you see other files, for example `known_hosts`, don't worry; this is normal.)

```
$ cd ~/.ssh
$ ls
id_rsa  id_rsa.pub  

```

You want to now look at the contents of `id_rsa.pub`.  This file is your public key. 
That is the one you are going to share with `github.com`. (The contents of `id_rsa` are your private key, which you do NOT share. )

To see the contents of `id_rsa.pub`, we use the cat command:

```
pi@3f8b1662662a:~/.ssh $ cat id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDZpE/R9e+JlLOi83GGoama4sZTAFDgHpnHrbe8FC0MQwggdNDF/Kp0NB+O0ZOewTw851Dnddb14ujct1ryy7uo4TBfWUF+NZ45TGeyBJd+c7C8nTBtAioPUIzg30ROS+0xNMOMCOdzjl8EGMdRVrKgHGkRT4eDeqrJ8scGx/ZWI6KVu9t4fwrkaG8tCooJrmkRgKYYTsa5RmiEJiv5fClozZdSb2fdZ4BSWjfVzR/PpDGYw3ky+9DpQxwT0yJTACeQr2Zpub+vzfKVT08kxGEH3s12VhWEZrRT8zGJ0BxsLHAsFqhwSmdFwyQvhdvssB0EIgUhkiMh93YQK6XGcmMt pi@3f8b1662662a
pi@3f8b1662662a:~/.ssh $ 
```


Your public key will look different, but similar. You are now going to to do a "copy/paste" of that key into a page of github.com.    Our next step is to navigate to the correct page of github.com to enter that key.


## Uploading the public key for your Raspberry Pi machine or VM to your github.com account.

To upload your ssh public key to github.com, start by opening a web browser to github.com.  

If you are not yet logged in, login to your github.com account.   

Go to the github.com settings menu.  It's on a pull down menu at the upper right hand corner of the page.

Once you are at the settings menu, choose the SSH and GPG keys option. It's in the middle on the left.  

Then, click "New SSH key".

Next, "copy" your SSH public key from your terminal window so that we can paste it into the github.com web browser window. Be careful to get the whole key, but nothing more than the key. Don't include the shell prompts or the cat command.

Paste it into the window on the github.com website that asks for the key and add a title. If its the key you generated in a VM with docker choose the title 'rpi-vm'. If you generated the key on a physical raspberry pi, give another appropriate title

Github may ask for your password to confirm this operation.

Then you should get a message that your key was added.

Congratulations! You've now added the public key associated with your ACMS account to github.com.

In the future, if you are on a different machine you'll need to do this step again.


# References:

* <https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/>

Authors: Phill Conrad and Diba Mirza
