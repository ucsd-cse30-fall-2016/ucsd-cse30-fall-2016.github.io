---
topic: "Github: Introduction"
desc: "What is git? What is github?"
---

# What is git?

Git is a piece of open source software that allows you to better manage the code for a project.

It helps you:
* keep a historical record of all the changes you make to your code over time (that is, *version control*)
* have access to your code on any computer connected to the Internet
* collaborate with others by controlling read and write access to your code 

Git works with containers called *repositories*, or *repos* for short.
A repository is simply a directory (folder) that contains files, and 
possibly other folders containing files and folders along with the entire 
history of all changes to those files and folders over time.

There are many places a git repo can be stored:
* on your own personal Windows, Mac, or Linux computer
* under a directory on your CSIL account
* on a cloud-based storage provider.  

# What is github?


The website github.com is a for-profit business that provides cloud-based 
storage of git repositories, along with a nice web interface to work with git repos.   
Github.com provides free resources for "open source" projects—ones where the contents of the 
repository are public—but typically charges money for "closed source" projects, when the contents of the repo are private.     That's how they make their money.

Github provides universities with an "academic discount" (actually, "free") to enable us to provide 
you with private github repositories at no cost to either you, or the University of California.    

These private repos can be seen by your instructors and mentors,  
but no one else has access to the contents.   
We can also set up pair repos where you and your pair partner have access, but no one else does.

# What is a github organization?

A github organization is a collection of users, teams, and repositories.    
Github provides academic discounts through these organizations.   
Anyone can set up an organization on the "free plan", and 
then instructors at educational institutions can request the academic discount for their "organization".

The organization for SPIS 2016 is https://github.com/ucsd-cse-spis-2016

# What does "in the cloud" mean?

We say that something is "in the cloud" if we are being given access
to an internet service in such a way that we *don't need to know the
details* of exactly how that service is being provided to us.

In the cloud means that "someone else" is worrying about all the
system management issues like keeping that server up and running,
keeping it free of malware and defending from Denial of Service
attacks, managing backups, etc.

# What exactly is meant by "version control"?

The software package "git" is an example of a "version control
system". (Others include SVN, Mercurial, and in a previous
generations, CVS, RCS, and SCCS).

A git repo (short for repository) is nothing more than a collection of
files and directories (folders), along with a special subdirectory
called .git (stored only once in the top level directory of the repo)
that keeps track of the complete history of the files and directories
contained in the repo. 

To some extent, the ".git" directory stays out
of your way, and you use the files and directories in the repository
exactly the same way you'd use files and directories in a regular
directory.

On the other hand, keeping files in a git repository has many advantages over just keeping files in an ordinary directory (e.g. a hard drive, or USB stick):

-  it is easier to collaborate with others on a project (whether that's an open source or closed source project)
-  it is easier to recover from screwups (like deleting important files, messing up code that was previously working, complete failure of your hard drive)
-  it is easier to share "works in progress" with TAs and instructors and fellow students to get help during lab, office hours, or by email
-  it is easier to share "open source" projects with others on the internet.
