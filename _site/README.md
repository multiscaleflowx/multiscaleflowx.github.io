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

To view the site, run `bundle exec jekyll serve` and point a browser to `http://localhost:4000/`. You should see a local version of this website in your browser that is identical to the [live version](https://multiscaleflowx.ac.uk/). 


## Code Structure

If you look inside the dowloaded folder, you'll see a bunch of additional folders and, importantly, an `index.html` file. This file dictates how that particular webpage will look (the one in the root of the directory controls the landing page). You'll find that the folders that correspond to the tabs on the website ('research', 'team', etc) each contain their own `index.html` file. This is no accident (!) as that contains the relevant instructions on populating those tabs. You may notice if you go through the tabs on the website that these are similar (or the same in design but different in content). This is because they are initially _generated_ from a single template file called `default.html`, which is contained in the `_layouts` folder. The `_layouts` folder also contains additional template files which tweak this basic design slightly for the other tabs. 

## License

This repository is freely available under the [MIT](http://opensource.org/licenses/MIT) opensource license. 
