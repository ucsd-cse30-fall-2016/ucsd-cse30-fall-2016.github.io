---
topic: "git: cloning your first repo"
desc: "A guide for those new to git"
---

So far, we've worked with git repos only through the github.com web interface.

That's handy, but it isn't really what github is for.  

The main purpose of a github repo is to track the changes we make to a software project on our 
local hard drive: either the hard drive space associated with our ACMS Unix account, or the hard drive
of our own Windows, Mac or Linux machine.

To do that, we need to do a step called "cloning" a repo.

This creates a "clone" of the repo on our local disk.

The clone has a link back to something called the `origin`, which is the *remote server* (or just *remote*, for short) where the clone came frome.

We can `pull` changes from the origin, or `push` changes to the origin to keep them in sync.

There is also the concept of a branch.  The only thing you need to know about branches when you first start working with git and github is that we are *always on the master branch*.     

Therefore, when working with a cloned repo, we are always going to use one of these two commands:

* `git pull origin master` to pull changes from github.com to our local copy
* `git push origin master` to push changes from our local copy up to github.com


### Locate your first repo

Navigate to the web page for your repository in github.com, and find the green "Clone or Download" link, as
shown in this image:

![Clone or Download](click-the-clone-or-download-link-50.png)

What comes up looks like one of these two figures

| clone with ssh | clone with https |
|----------------|------------------|
| ![clone with ssh](clone-with-ssh-40.png) |  ![clone with https](clone-with-https-40.png) | 


If you get the "clone with HTTPS" figure, click where it says "Use ssh" as shown in the diagram below.
That spot "toggles" (switches back-and-forth) between `ssh` and `https`.  We want `ssh`.

Once it says `clone with ssh`, keep this web page open, but set it aside for a moment.  We'll need to 
copy the link from there in just a moment.  But first, we need to do some work at the ACMS command line.


# Cloning the repo on your ACMS account under `~/github`

Open a shell (terminal session) on your ACMS account.   You should already have a `~/github` directory,
but if you don't, use this tutorial to create one: [Create `~/github`](/topics/acms_create_github_dir/)

Type these commands into your ACMS terminal window:

* Use `cd ~/github` to change your current working directory to `~/github`.
* Then use `pwd` to verify that your current working directory is indeed `~/github`.
* Use `ls` to list the files in that directory. (It may currently be empty)

```
[spis16t3@ieng6-240]:~:95$ cd ~/github
[spis16t3@ieng6-240]:github:96$ pwd
/home/linux/ieng6/spis16/spis16t3/github
[spis16t3@ieng6-240]:github:97$ ls
[spis16t3@ieng6-240]:github:98$ 
```

Next you will "clone" your repository. This creates a copy of your
repository—which is a separate repository in its own right—in your
cs56 directory on the CSIL systems.

Copy the clone URL from the github window.

* Note that this is NOT THE SAME as the URL shown in the browser url window. Don't copy that one!
* The URL should end with the letters `.git`

Next, in the terminal window where you are in your `~/github` directory,
type the command below to clone the repository into a new directory 
that has the same name as your repo (e.g. `spis16-lab02-Alex_Chris`).
Be sure to replace the URL shown below with the one you copied 
from the web page.

```
    git clone git@github.com:ucsd-cse-spis-2016/spis16-lab02-Alex-Chris.git
    ...
```

If it is the first time you are ever cloning a repo, you might get this one time message.
As shown below, just type in `yes` and press enter:

```
The authenticity of host 'github.com (192.30.253.113)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes
```

You should then see something like this, and you should have a new subdirectory of `~/github` with the
same name as the repo you cloned, e.g. `spis16-lab02-Alex-Chris`

```
[spis16t3@ieng6-240]:github:107$ git clone git@github.com:ucsd-cse-spis-2016/spis16-lab02-Alex-Chris.git
Cloning into 'spis16-lab02-Alex-Chris'...
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.
Checking connectivity... done.
[spis16t3@ieng6-240]:github:108$ 
```

(If you got an error message, skip down to the section "What if it didn't work".)

If it worked:
* Try typing `ls`.  You should see the new directory for your repo.  
* Use `cd repo-name` (e.g. `cd spis16-lab02-Alex-Chris`) to cd into your cloned repo
* Type `pwd` and `ls` to see the files in your cloned repo.

If it all looks like the following transcript, then you are good to go&mdash;you've cloned your first repo successfully!

```
[spis16t3@ieng6-240]:github:108$ ls
spis16-lab02-Alex-Chris
[spis16t3@ieng6-240]:github:109$ pwd
/home/linux/ieng6/spis16/spis16t3/github
[spis16t3@ieng6-240]:github:110$ cd spis16-lab02-Alex-Chris/
[spis16t3@ieng6-240]:spis16-lab02-Alex-Chris:111$ pwd
/home/linux/ieng6/spis16/spis16t3/github/spis16-lab02-Alex-Chris
[spis16t3@ieng6-240]:spis16-lab02-Alex-Chris:112$ ls
README.md
[spis16t3@ieng6-240]:spis16-lab02-Alex-Chris:113$ 
```

# What if it didn't work

What you might see instead is something like this:

```
[spis16t3@ieng6-240]:github:99$ git clone git@github.com:ucsd-cse-spis-2016/spis16-lab02-Alex-Chris.git
Cloning into 'spis16-lab02-Alex-Chris'...
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
[spis16t3@ieng6-240]:github:100$ 
```

That signifies that you probably either:
* haven't yet done the ssh public key steps in these instructions for [one-time ACMS github setup](/topics/acms_git_one_time_setup/) (in which case, follow that link and do those steps now), OR
* something went wrong with the ssh public key setup (so review those instructions again)
* maybe you have the wrong link to the repo

Try reviewing the steps above first, and if you are still having trouble, ask a mentor or instructor for help.
