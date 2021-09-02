# mfX lab website

## How does this website work?

To understand how this website works, you need to know what a website _is_. A website is nothing but a collection of files sent to the browser, which in turn reads those files and executes the contained code. A typical browser understands three languages: HTML, CSS, and Javascript, which is why most websites (including this one!) is written in those languages. This particular website is built using [Jekyll](https://jekyllrb.com/) and hosted on [Github Pages](https://pages.github.com/). Jekyll is a _static_ site generator, which basically means that the code is 'pre-built', and does not rely on server-side code or a separate database. All the code needed for the website to run is contained within this Github repository. Github pages then allows you to host your website directly on Github.

## Build this website locally in your machine

To really be able to customise any part of the website, you'll need a working Unix-like environment and working knowledge of Git, [Markdown](https://www.markdownguide.org/basic-syntax), HTML, and basics of CSS. If you're new to all of this, I recommend doing some [reading](https://scrimba.com/learn/htmlcss). You'll also need a working Ruby installation, with gems for Jekyll, GitHub Pages, and their dependencies installed. Once you've sorted all that out, you can build the website locally. This process starts by cloning the repository using:

```
git clone https://github.com/multiscaleflowx/multiscaleflowx.github.io.git
```

Then install any additional Ruby dependencies by running `bundle install` from within the downloaded directory.  After this, the site can be be built with:

```
bundle exec jekyll build
```

To view the site, run `bundle exec jekyll serve` and point a browser to `http://localhost:4000/`. You should see a local version of this website in your browser that is identical to the [live version](https://multiscaleflowx.github.io/). 


## Code Structure

If you look inside the dowloaded folder, you'll see a bunch of additional folders and, importantly, an `index.html` file. This file dictates how that particular webpage will look (the one in the root of the directory controls the landing page). You'll find that the folders that correspond to the tabs on the website ('research', 'team', etc) each contain their own `index.html` file. This is no accident (!) as that contains the relevant instructions on popuating those tabs. You may notice if you go through the tabs on the website that these are similar (or the same in design but different in content). This is because they are initially _generated_ from a single template file called `default.html`, which is contained in the `_layouts` folder. The `_layouts` folder also contains additional template files which tweak this basic design slightly for the other tabs. 

## How to add content

The most common actions are likely going to be minor things such as adding a paper, news item, or group member. In **all** these cases, all you need to do is adding new Markdown file in the proper folder, filling in the required fields precisely, and naming it exactly as the convention suggests. In all cases, you **should** copy an existing item, change the name, and change its content. **Do not** try to create a new markdown document from scratch. **Do not** mess with any of the HTML/CSS code either, the website is designed in such a way so as to not require you to engage with any of that.

For example, suppose you want to add a news item, which will appear on the front page, announcing that you have published a paper in _Nature_ (go you!). The way you would do this is that you would first go into the `news/_posts` folder which contains the markdown files for all the news items added to the website. Copy one of the existing items into a new file named with **the correct date** and a descriptive, hyphenated title:

```
	cp 2020-07-01-yonghao-sina-join-mfx.md 2021-09-14-nature-paper-hooray.md
```

Now edit the new file to add the content what you want using a text editor of your choice. By the time you're done, hopefully you have something like this:

```
	---
	layout: default
	title: "Paper published in Nature!"
	image: /images/news/nature-paper.png
	category: news
	tags: [breakthrough]
	---
	We are thrilled to announce that our experiments into bursting balloons containing water and paint dye, and using the explosive jet to paint the Mona Lisa on a canvas has been published in _Nature_!
```
The process works exactly the same if you are editing your own member page or if you're adding a paper. The number of categories might increase, but the formula is the same. For example, the markdown file for a recent publication looked like this:

```
	---
	layout: paper
	title: "Enhanced nanoparticle rejection in aligned boron nitride nanotube membranes"
	year: "2020"
	shortref: "Casanova <i>et al.</i> <i>Nanoscale</i> 2020"
	nickname: bnnt-nano-serena
	journal: "Nanoscale"
	volume: 
	issue:
	pages: 
	authors: "Casanova S, Mistry S, Mazinani S, Borg MK, Chew JYM, Mattia D"
	image: /images/papers/2020-07-09-bnnt-nano.png
	fulltext: https://pubs.rsc.org/en/content/articlelanding/2020/nr/d0nr04058d#!divAbstract
	doi: "10.1039/D0NR04058D" 
	supplement: http://www.rsc.org/suppdata/d0/nr/d0nr04058d/d0nr04058d1.pdf
	pdflink: 
	github:
	datashare: 
	altmetric_id: 
	category: paper
	funder: EPSRC
	tags: [experiments, md, nanotubes]
	highlight: true
	---

	# Abstract 

	The rejection of particles with different charges and sizes, ranging from a few Ångstroms to tens of nanometers,
	is key to a wide range of industrial applications, from wastewater treatment to product purification
	in biotech processes. Carbon nanotubes (CNTs) have long held the promise to revolutionize filtration,
	with orders of magnitude higher fluxes compared to commercial membranes. CNTs, however, can only
	reject particles and ions wider than their internal diameter. In this work, the fabrication of aligned boron nitride nanotube (BNNT) membranes capable of rejecting nanoparticles smaller than their internal diameter is reported for the first time. This is due to a mechanism of charge-based rejection in addition to the size-based one, enabled by the BNNTs surface structure and chemistry and elucidated here using high fidelity molecular dynamics and Brownian dynamics simulations. This results in ∼40% higher rejection of the same particles by BNNT membranes than CNT ones with comparable nanotube diameter.
	Furthermore, since permeance is proportional to the square of the nanotubes’ diameter, using BNNT
	membranes with ∼30% larger nanotube diameter than a CNT membrane with comparable rejection
	would result in up to 70% higher permeance. These results open the way to the design of more effective
	nanotube membranes, capable of high particle rejection and, at the same time, high water permeance.layout: default
```

You can see there is a lot going on here, but the additional categories are just intended to make it easy for a visitor to the website to quickly locate and read our work.

## How to contribute and review
The principle of working collaboratively with a Git repository is similar to a review process for papers; you do your work; you share it (in this case, via Github), and then ask someone to review your work. There are various recommended approaches for this cycle which are described [over here](https://www.atlassian.com/git/tutorials/comparing-workflows). However, the contribution/review cycle described here is loosely based on the Git feature branch workflow; you can read more about this [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Our process is described below.
 
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

## License

This repository is freely available under the [MIT](http://opensource.org/licenses/MIT) opensource license. 
