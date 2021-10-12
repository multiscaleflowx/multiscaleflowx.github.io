---
layout: default
title: format
---

# Format for website contributions 

This is intended to be a quick resource when you want to add your content to the website, but are unsure how to go about doing that. The most common actions are likely going to be minor things such as adding a paper, project, news item, or updating your bio page. In **all** these cases, all you need to do is copy an existing markdown (`.md`) file to use as a template, edit the relevant fields accurately, name it exactly as the convention below specifies, and send it to me. In all cases:
* **Do not** try to create a new markdown file from scratch.
* **Do not** edit any of the HTML/CSS code either, as the website is designed in such a way so as to not require you to engage with any of that.  
* **Do not** use any format other than `.png` or `.jpg`/`.jpeg` for any of the images for the website.  

If anything below is confusing, DM me (Rohit) on slack for clarification.

## News item

Let's start simple; suppose you want to add a news item (which will appear on the [homepage](https://www.multiscaleflowx.ac.uk)) announcing that you have published a paper in _Nature_ (go you!). The way you would do this is that you would first go into the [`news/_posts`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/news/_posts) folder on the [Github repo](https://github.com/multiscaleflowx/multiscaleflowx.github.io), which contains the markdown files for all the news items added to the website. Download one of the existing items and copy it's contents into a new file named with **the correct date** and a descriptive, hyphenated title:

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
---
We are thrilled to announce that our experiments into bursting balloons containing water and paint dye, and using the explosive jet to paint the Mona Lisa on a canvas has been published in Nature!
```
The lines `---` separate the metadata (which consists of multiple fields) from the content (basically text) of the markdown file. Note that, for news items, keep the fields `layout` and `category` as is and modify the `title` and the description text. The field `image` is optional. If you wish to include an image, please ensure that you add the link to it (keep [`images/news/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/images/news) as is as that's where the images will be placed, and replace `nature-paper.png` above with the name of your image). Ensure that your image has a 16:9 aspect ratio and is not too large (<500 kb).

## Papers

The process works exactly the same if you're adding a paper. Note that all papers reside in the folder [`papers/_posts/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/papers/_posts) on the [Github repo](https://github.com/multiscaleflowx/multiscaleflowx.github.io). If you want to add a new paper, you start off by downloading and then copying _any_ existing paper as described above. The number of fields might increase, but the formula is the same.  For example, take [this paper](/papers/paper/drop-coalescence-prl/) from the website; the markdown file required to generate that webpage looked like this:

```
---
layout: paper
title: "Droplet Coalescence is Initiated by Thermal Motion"
year: "2019"
shortref: "Perumanath <i>et al.</i> <i>Phys. Rev. Lett.</i> 2019"
journal: "Physical Review Letters"
volume: 122
issue:
pages: 104501
authors: "Perumanath S, Borg MK, Chubynsky MV, Sprittles JE, Reese JM"
image: /images/papers/2019-03-13-drop-coalescence-prl.png
fulltext: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.122.104501
doi: "10.1103/PhysRevLett.122.104501" 
supplement: https://journals.aps.org/prl/supplemental/10.1103/PhysRevLett.122.104501
pdflink: 
github:
datashare: "10283/3248"
altmetric_id: 56970896
category: paper
funder: EPSRC
tags: [multiscale, mui, dsmc, md]
highlight: true
---

# Abstract 

The classical notion of the coalescence of two droplets of the same radius R is that surface tension drives an initially singular flow. In this Letter we show, using molecular dynamics simulations of coalescing water nanodroplets, that after single or multiple bridges form due to the presence of thermal capillary waves, the bridge growth commences in a thermal regime. Here, the bridges expand linearly in time much faster than the viscous-capillary speed due to collective molecular jumps near the bridge fronts. Transition to the classical hydrodynamic regime only occurs once the bridge radius exceeds a thermal length scale l_T
```

Choosing an appropriate file name is important as it will be used to construct the url for the paper webpage. Our practice is to use the date of publication (in YYYY-MM-DD), 2-3 words describing the paper, and a last word for the journal (all hyphenated). For example, the markdown file used as illustration above is called [`2019-03-13-drop-coalescence-prl.md`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/blob/master/papers/_posts/2019-03-13-drop-coalescence-prl.md). The fields `title`, `year`, `shortref`, `journal`, `volume`, `issue`, `pages`, `authors`, `image`, `fulltext`, `doi`, and `funder` are required.  The other fields are all optional. Note that for authors, we require the convention `LASTNAME INITIALS` for each author as shown above. The `shortref` field is needed as well, please keep the `<i>` and `</i>` HTML tags as they are and just add the last name of the first author and journal name.

As with news items, paper images are placed in [`images/papers/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/images/papers), so only edit the name of the image when sending it for the website (here called `2019-03-13-drop-coalescence-prl.png`). The image should be **maximum of 1200x1200 pixels** and not too large (<500 kb).

## Team

Each team member should have a markdown file in [`team/_posts/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/team/_posts).  File names are a fixed date followed by last and first name, like [`2020-01-01-datta-saikat.md`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/blob/master/team/_posts/2020-01-01-datta-saikat.md). For the time being, we're using the convention that all PDRAs have the date `2020-01-01`, while PhDs have the date `2020-06-01`, respectively (Note that this is in the ``YYYY-MM-DD`` format). To generate this [team member's webpage](/team/datta-saikat), for example, the relevant markdown file required is:

```
---
layout: member
title: "Dr. Saikat Datta"
position: PDRA
email: saikat.datta@ed.ac.uk
twitter: 
degrees: PhD, IIT Kharagpur (2018)
github: 
scholar: o4mXtIgAAAAJ
image: /images/team/saikat-datta.jpg
website:
orcid:	 
cv: 
alumni: false
mfXposition: PDRA
startyear: 2018
endyear: 
---

I am a postdoctoral research associate at the University of Edinburgh. I obtained my Ph.D. in Mechanical engineering from the Indian Institute of Technology Kharagpur, India. My research focuses on different aspects of multiphase flow ranging from micro- to nano-scales with a particular emphasis on fluid dynamics, heat transfer, and phase change. I have studied different aspects of droplet dynamics, condensation of steam bubbles, and molecular scale boiling, which includes: (i) influence of the external electric field, (ii) surface vibration, and (iii) influence of external heat flux. These types of multi-physics flow problems are becoming increasingly relevant for the innovation of energy-efficient engineering systems. It is also important for the development of next-generation equipment for biomedical and clinical applications.

My doctoral research analysed the dynamics of drops and its manipulation during electro-wetting and dielectrophoresis. In particular, I focused on including the nonlinear electro-hydrodynamic couplings such as interfacial charge transport, interface deformation, and resulting fluid motion.

My recent work includes investigation of bubble nucleation due to surface vibration. I am currently working on analysing gas flow in nano-scale porous media, which occurs during the exploration from shale gas reservoirs. I am also looking at developing a multiscale simulation-for-design framework to investigate de-icing using nanoscale vibration-driven (acoustothermal) heating.
```

The fields `title`, `position`, `email`, `degrees` (which just refers to your **latest** degree) and `image` are required, while all the others are optional. You also need to include some bio text as above (the amount of detail you put in is completely up to you). Note that you can include links here after the colon to your GitHub/Linkedin/etc. As above, the images are placed in [`images/team/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/images/team), so only edit the name of the image when sending it for the website (here called `saikat-datta.jpg`). The image should be **exactly 340x454 pixels** and not too large (<500 kb).

## Projects

Each PhD/PDRA should have a dedicated project they are working on. Consult your supervisor if you are unsure as to which of the [four main themes](https://multiscaleflowx.ac.uk/research/) your project fits into. Once you've sorted that out, you need to repeat the process above, namely copy a markdown file and start editing. To generate this [project webpage](/research/theme-porous-media-flows/), for example, the relevant markdown file required is:
```
---
layout: theme-porous-media-flows
title: "Adsorption and transport in organic shale kerogen"
image: /images/projects/kerogen-shale.png
active: true
startyear: 2018
endyear: 
---

Owing to the heterogeneous geological conditions of unconventional reservoirs and the complexity of adsorption and transport at multiple-scales, the production of shale gas is far from that being accurately forecast. Micropores (< 2 nm) and macropores (< 50 nm) are responsible for the majority of methane adsorption inside reservoirs. Due to the nanoscale confinement and the high underground pressures and temperature, it is also challenging to predict the fluid transport. In this work we have developed new models for adsorption and transport in and through realistic kerogen samples, using molecular simulations.

This work is funded by partners from King Fahd University of Petroleum and Minerals (KFUPM), and involves the following researchers ([Carlos](/team/corral-carlos), Qiang, Runxi, [Saikat](/team/datta-saikat), and [Yichong](/team/chen-yichong)).
```
The fields `title`, `image`, and `startyear` are required, along with a brief summary of the project itself in text (replacing the paragraph above). Use a descriptive title for your file; the above project, for example, is titled [`kerogen-shale.md`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/blob/master/_theme-porous-media-flows/kerogen-shale.md).  You can see how I used `[]` to surround the text to be displayed and `()` to generate a link to the team member's bio page. Please limit your project description to **150 words** or less. As above, the images are placed in [`images/projects/`](https://github.com/multiscaleflowx/multiscaleflowx.github.io/tree/master/images/projects), so only edit the name of the image when sending it for the website (here called `kerogen-shale.png`). The image should be **maximum of 500x300 pixels** and not too large (<500 kb).

## Producing/compressing images

If you've looked at the image pixel (AxB pixels) and size reaquirements (<500 kb) above and are unsure how to go about generating such images, I would recommend some basic image editing software such as [GIMP](https://www.gimp.org/). However, if you have managed to resize the image already and just wish to compress it, you can instead use [ImageMagick](https://imagemagick.org/index.php). Once you have downloaded ImageMagick, the command:
```
convert original.jpg -resize 20% compressed.jpg
```
will reduce the image size of `original.jpg` by 80%. This will enable you to produce small-sized images without loss of significant resolution. You can of course do a lot more with this beyond just shrinking images, but that is beyond the scope of this webpage.