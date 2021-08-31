# mfX lab website

## How does this website work?

To understand how this website works, you need to know what a website _is_. A website is nothing but a collection of files sent to the browser, which in turn reads those files and executes the contained code. A typical browsere understands three languages: HTML, CSS, and Javascript, which is why most websites (including this one!) is written in those languages. This particular website is built using [Jekyll](https://jekyllrb.com/) and hosted on [Github Pages](https://pages.github.com/). Jekyll is a _static_ site generator, which basically means that the code is 'pre-built', and does not rely on server-side code or a separate database. All the code needed for the website to run is contained within this Github repository. Github pages then allows you to host your website directly on Github.

## Build this website locally in your machine

To really be able to customise any part of the website, you'll need a working Unix-like environment and working knowledge of Git, [Markdown](https://www.markdownguide.org/basic-syntax), HTML, and basics of CSS and Unix commands. If you're new to all of this, I recommend doing some [reading](https://scrimba.com/learn/htmlcss). You'll also need a working Ruby installation, with gems for Jekyll, GitHub Pages, and their dependencies installed. Once you've sorted all that out, you can build the website locally. This process starts by cloning the repository using:

```
git clone https://github.com/multiscaleflowx/multiscaleflowx.github.io.git
```

Then install any additional Ruby dependencies by running `bundle install` from within the downloaded directory.  After this, the site can be be built with:

```
bundle exec jekyll build
```

To view the site, run `bundle exec jekyll serve` and point a browser to `http://localhost:4000/`. You should see a local version of this website in your browser that is identical to the [live version](https://multiscaleflowx.github.io/). 


## License

This repository is freely available under the [MIT](http://opensource.org/licenses/MIT) opensource license. 
