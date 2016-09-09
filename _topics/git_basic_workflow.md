---
topic: "git: basic workflow"
desc: "git clone; git status; git add ...; git commit ... ; git push origin master "
---

# The basic git workflow

The normal workflow when using git is described briefly on this page.  

Consider this as a kind of "cheat sheet", rather than as a full tutorial on the use of git/github.

# One time setup per project:

## Short version: 

```
cd ~/github
git clone ssh-clone-url-of-your-repo
cd repo-name
```

## Longer version:

* Find the repository's web page on github.com
* Find the SSH clone URL on the right hand side, about half way down.
* If the link says HTTPS clone URL instead of SSH clone URL, click the blue SSH link.
* Copy the link.
* cd into your ~/github directory on your ACMS account (or wherever you want the repo to be stored).
* Do the command `git clone paste-your-ssh-clone-url-here`
* Do an `ls` command, and you should now have a directory with the same name as your repositority.  
* `cd` into that directory to do your work.

# Each time you make a change

It is recommended, but not required, to do a `git status` before and after each git command,
as shown below.    

To add files into the "next commit" you are going to do:

```
git status
git add  names-of-files-you-changed
git status
```

To make that commit permanent and add a comment:

```
git status
git commit -m "AB/CD describe your changes"
git status
```

* When pairing, AB is the initials of the driver, CD are the initials of the navigator
* If you leave off the `-m "comment"` part, you'll be thrown into vim.  
    * To get out, press the escape key once, type a colon `:`, then type `wq` and press enter.

To push those commits from your local directory on ACMS up to the github.com server:

```
git status
git push origin master
git status
```

# Troubleshooting:

* If push is rejected because the remote has work you do not have locally, do a `git pull origin master` first.
* If you are thrown into vim, use escape `:wq` then press Enter/Return  to save the automatic commit message.)

