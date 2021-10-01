---
layout: paper
title: "GSIS: An efficient and accurate numerical method to obtain the apparent gas permeability of porous media"
year: "2020"
shortref: "Su <i>et al.</i> <i>Comput. Fluids</i> 2020"
journal: "Computers & Fluids"
volume: 206
issue:
pages: 104576
authors: "Su W, Ho MT, Zhang Y, Wu L"
image: /images/papers/2020-06-30-gsis-porous-cf.png
fulltext: https://www.sciencedirect.com/science/article/pii/S0045793020301481
doi: "10.1016/j.compfluid.2020.104576" 
supplement:
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: EPSRC
tags: [GSIS, porous media, Klinkenberg correlation]
highlight: true
---

# Abstract 

The apparent gas permeability (AGP) of a porous medium is an important parameter to predict production of unconventional gas. The Klinkenberg correlation, which states that the ratio of the AGP to the intrinsic permeability is approximately a linear function of reciprocal mean gas pressure, is one of the most popular estimations to quantify AGP. However, due to the difficulty in defining the characteristic flow length in complex porous media where the rarefied gas flow is multiscale, the slope in the Klinkenberg correlation varies significantly for different geometries such that a universal expression seems impossible. In this paper, by solving the gas kinetic equation using the general synthetic iterative scheme (GSIS), we compute the AGP in porous media that are represented by Sierpinski fractals and pore body/throat systems. With the abilities of fast convergence to steady-state solution and asymptotic preserving of Navier-Stokes limit, it is shown that GSIS is a promising tool to simulate low-speed rarefied gas flow through complex multiscale geometries. A new definition of the characteristic flow length is proposed as a function of porosity, tortuosity and intrinsic permeability of porous media, which enables to find a unique slope in the Klinkenberg correlation for all the considered geometries. This research also shows that the lattice Boltzmann method using simple wall scaling for the effective shear viscosity is not able to predict the AGP of porous media.
