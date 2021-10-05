---
layout: default
title: editing
---

# How to contribute to the website (and review code)
The principle of working collaboratively with a Git repository is similar to a review process for papers; you do your work; you share it (in this case, via Github), and then ask someone to review your work. There are various recommended approaches for this cycle which are described [over here](https://www.atlassian.com/git/tutorials/comparing-workflows). However, the contribution/review cycle described here is loosely based on the Git feature branch workflow; you can read more about this [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Our process is described below.

### Installation instructions
The first step would be to get the website up-and-running locally on your machine. I've included instructions below for installation on a Mac (as we all have Macs I think). You need to install the following bits of software first:
+ ``Ruby version 2.5.0`` or higher, which you can do from [here](https://www.ruby-lang.org/en/downloads/) (once completed, use ``ruby -v`` to confirm installation)
+ ``RubyGems``, which you can do from [here](https://rubygems.org/pages/download) (once completed, run ``gem -v`` to confirm installation)
+ ``GCC``, which you can do from [here](https://gcc.gnu.org/install/) (once completed, run ``gcc -v`` or ``g++ -v`` to confirm installation)
+ ``Make``, which you can do from [here](https://www.gnu.org/software/make/) (once completed, run ``make -v`` to confirm installation)


### Contributing
After cloning the repository as described above, you may wish to make changes. In the git feature branch workflow procedure, you start off by creating a branch and then editing the files. It is recommended to make a new branch with a reasonably descriptive name, such as:
```
git checkout -b README_edits_authorname
```
Then, you can add the file, make a commit with a commit message, and then push your changes to origin (please branch name is the current branch). For example, if you made changes to README.md file, then you do the following:
```
git add README.md
git commit
git push origin README_edits_authorname
```
To have your changes merged to the master branch, you should open a PR (pull request) on Github and tag someone to review your contributions. Address their comments, if any, and then the reviewer will merge the PR if all is good.

### Review process
To review someone's changes, you should `cd` into your local copy of this repository pull all branches so you have a local copy of all remote branches. This is done by:
```
git pull --all
```
Then, you can checkout the relevant branch and rebuild to see how their changes look/work. You can also push changes back to that branch as a reviewer or leave a comment on Github for the main author to make changes.