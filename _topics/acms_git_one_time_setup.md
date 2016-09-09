---
topic: "ACMS Account: github one-time setup steps"
desc: "ssh-key generation, configure user.name, etc. "
---

# Using git from your ACMS account: one-time setup steps

There are two things you need to do to make your ACMS account work smoothly with git.  

* Setting your global `user.name` and `user.email` values
* Creating an ssh public/private key pair for your ACMS account
* Uploading the public key for your ACMS account to your github.com account.

Instructions for each of these steps appear below.

# Setting your global `user.name` and `user.email` values

You will need to type the following commands just once for each separate ACMS account you have.

You may also need to do these commands on your own Mac, Windows or Linux box if you use command line git there.   They configure some
options in a file, on a Linux account such as your ACMS account, is called `~/.gitconfig`.  It may have other names and locations on Mac or Windows.

Type in these commands, but change the name `Alex Triton` to your own real world first and last name.  If you prefer, for privacy reasons,
you may use your first name and last initial.     Also, change the email address `atriton@ucsd.edu` to your own `@ucsd.edu` email address.

```
git config --global user.name "Alex Triton"
git config --global user.email "atriton@ucsd.edu"
```

# Creating an ssh public/private key pair for your ACMS account

In this step, we will set up a public/private key pair on your ACMS account. 

The idea of a public/private key pair is that you give away your public key, and you keep your private key a secret. 
This allows anyone with your public key to know that you are you without you having to type in a password 
(as long as your private key stays secret).

To generate a public/private key pair: Open a terminal session, and type the `ssh-keygen` command. (Note that its all one word, `ssh-keygen` with a hyphen in the middle.)

You will be asked a series of questions. For each question, just press the enter/return key (to accept the default option.)

That will look like this:
```
[spis16t3@ieng6-240]:~:82$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/linux/ieng6/spis16/spis16t3/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/linux/ieng6/spis16/spis16t3/.ssh/id_rsa.
Your public key has been saved in /home/linux/ieng6/spis16/spis16t3/.ssh/id_rsa.pub.
The key fingerprint is:
16:e9:a8:b4:5e:4e:2a:ab:38:e9:35:8a:ee:9e:6c:b3 spis16t3@ieng6-240
The key's randomart image is:
+--[ RSA 2048]----+
|                 |
|         .       |
|        o        |
|       o .       |
|    . . S        |
|   . o .         |
| . oo o          |
|*o=..=           |
|XE+oo .          |
+-----------------+
[spis16t3@ieng6-240]:~:83$ 
```


The effect of that is to create two files in a hidden directory of your account called `.ssh` 

If you type `cd` to go to your home directory, and `ls` at your terminal prompt, you will not see this directory. Example:

```
[spis16t3@ieng6-240]:~:84$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos  bin  github
[spis16t3@ieng6-240]:~:85$ 
```

But if you use `ls -a` you WILL see the `.ssh` directory along with *many* other hidden directories and files.  Check out the difference between `ls` and `ls -a`:

```
[spis16t3@ieng6-240]:~:86$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos  bin  github
[spis16t3@ieng6-240]:~:87$ ls -a
.              .cache       .gnome2          .imsettings.log  .mozilla       .xsession-errors      Downloads  github
..             .config      .gnome2_private  .kde             .nautilus      .xsession-errors.old  Music
.ICEauthority  .cshrc       .gnote           .kshrc           .pki           .zprofile             Pictures
.abrt          .dbus        .gnupg           .local           .procmailrc    .zshenv               Public
.bash_history  .fontconfig  .gtk-bookmarks   .locallogin      .profile       .zshrc                Templates
.bash_profile  .gconf       .gvfs            .login           .pulse-cookie  Desktop               Videos
.bashrc        .gconfd      .idlerc          .modulesbegenv   .ssh           Documents             bin
[spis16t3@ieng6-240]:~:88$ 
```

This is the same home directory!  As you can see, `ls -a` shows us many more files and folders than we normally see with just plain `ls`.

And the `.ssh` subdirectory is one of these.

Next, type the command `cd ~/.ssh` at the Terminal prompt.   Then use `ls` to list the files in that directory.

You should see two files `id_rsa` and `id_rsa.pub` as follows. (If you see other files, for example `known_hosts`, don't worry; this is normal.)

```
[spis16t3@ieng6-240]:~:88$ cd ~/.ssh
[spis16t3@ieng6-240]:.ssh:89$ ls
id_rsa  id_rsa.pub  known_hosts
[spis16t3@ieng6-240]:.ssh:90$ 
```

You want to now look at the contents of `id_rsa.pub`.  This file is your public key. 
That is the one you are going to share with `github.com`. (The contents of `id_rsa` are your private key, which you do NOT share. )

To see the contents of `id_rsa.pub`, we use the cat command:

```
[spis16t3@ieng6-240]:.ssh:90$ cat id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA1vEvo1gXCAjIv52HaBTXBTup9mzJJucosNDr4VfPhpBKUH3XSlNCPFokLPyanKp0n/ppoqkEc2AtAR/WIHPrtlRUB/Eo2Y+U7xZjQZDCM8PtKevkYbwUQfKTJE+tlCuF9U6PyZI2fnJ34vnav/PC3Y2JqLUzcPpMlnL0uuiOhw4odN1KZ8zvw+DVBNrJD8fFm9MLwRTetjzLvNuxVGvKqmGCwaZTgzlluuc3Rfh0ykMm3FenXKp1LDtqBtyecpWocLUjhiILOkD31HxUjEeVJ0iB2Xk1MBa3czxBuGjVEqAmz/GiHi0zSjUmD+mKx+3mv98mRAUALPGii92ge0RclQ== spis16t3@ieng6-240
[spis16t3@ieng6-240]:.ssh:91$ 
```


Your public key will look different, but similar. You are now going to to do a "copy/paste" of that key into a page of github.com.    Our next step is to navigate to the correct page of github.com to enter that key.


# Uploading the public key for your ACMS account to your github.com account.

To upload your ssh public key to github.com, start by opening a web browser to github.com.  

If you are not yet logged in, login to your github.com account.   

Go to the github.com settings menu.  It's on a pull down menu at the upper right hand corner of the page.

Once you are at the settings menu, choose  the SSH keys option. It's in the middle on the left.  

Then, click "Add SSH key".

Next, "copy" your SSH public key from your terminal window so that we can paste it into the github.com web browser window. Be careful to get the whole key, but nothing more than the key. Don't include the shell prompts or the cat command.

Paste it into the window on the github.com website that asks for the key.

Github may ask for your password to confirm this operation.

Then you should get a message that your key was added.

Congratulations! You've now added the public key associated with your ACMS account to github.com.

In the future, if you have a different ACMS account, you'll need to do this step again.

# Optional additional step if you have your own laptop

If you want to use git on your own Mac, Windows or Linux laptop, you may also want to repeat this step for the public key associated with your own personal laptop or desktop computer.

This ONLY applies if you are working with git *directly* on your Windows, Mac or Linux computer&mdash;this step is NOT needed if you are using your own computer to access an ACMS terminal sesssion (e.g. with ssh, PuTTY or MobaXTerm.)

You'll have to generate a separate public/private ssh key pair for each computer that you use with github.com

On Mac and Linux, the ssh-keygen command should work.

For Windows, the easiest solution by far is to install the `git-shell` that comes with the
basic version of "git" for windows (and I mean the *basic* version, not a fancy GUI version.)

You can get that here: <https://git-scm.com/download/win>

This `git-shell` is pretty awesome.  It's basically, a minimalist subset of the Unix command line environment,
but it runs on your Windows machine.  You get:

* all the `git` command line stuff
* typical unix commands: `ls`, `cp`, `mv`, `mkdir`, `pwd`, `cd`, etc.
* `ssh` for ssh-ing into remote systems such as CSIL
* `scp` for secure copies of files
* and, most importantly for us: `ssh-keygen` that works just like it does on Mac and Linux.

So now, you can ssh-keygen away, even on Windows.

# References:

* <https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/>
