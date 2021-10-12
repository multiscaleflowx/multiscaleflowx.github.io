---
layout: paper
title: "Pore-scale simulations of rarefied gas flows in ultra-tight porous media"
year: "2019"
shortref: "Ho <i>et al.</i> <i>Fuel</i> 2019"
journal: "Physics of Fluids"
volume: 249
issue: 
pages: 341-351
authors: "Ho MT, Zhu L, Wu L, Wang P, Guo Z, Ma J, Zhang Y"
image: /images/papers/2019-08-01-porous-dvm-fuel.jpg
fulltext: https://www.sciencedirect.com/science/article/pii/S0016236119304867
doi: "10.1016/j.fuel.2019.03.106" 
supplement: 
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: EPSRC
tags: [shale, porescale, dvm]
highlight: true
---

# Abstract 

An in-depth understanding of gas transport in ultra-tight porous media is the key to quantifying flow properties of shale rocks with pore space as small as a few nanometers, where the gas rarefaction effects play a major role. As the conventional fluid mechanics theory fails to describe non-equilibrium rarefied flow, we resort to the gas kinetic theory and directly simulate gas flow inside the porous media utilising the digital images of porous media where the pore space is resolved. The Boltzmann model equation is solved by the discrete velocity method (DVM), which can accurately predict the permeability enhancement caused by rarefaction effects. Our simulations for different porous media show that the commonly-used standard lattice Boltzmann method (LBM) cannot describe rarefaction effects, although the kinetic boundary condition, which helps to capture velocity-slip, can extend the validity of the LBM to the slip flow regime. The heuristic Klinkenberg-type models proposed for all the flow regimes often involve many unknown empirical parameters, which may be calibrated by our simulations. However, these parameters are different for each porous medium and also depend on flow conditions, so these models are not of any practical use. By contrast, our kinetic solver can accurately predict apparent permeability without introducing any empirical parameters, which lays firm foundation for upscaling. As the large flow paths with least flow resistance dominate the overall permeability, the requirement on the velocity space resolution is significantly reduced for our DVM simulations to predict accurate permeability with affordable computational costs, which offers a promising new way for digital rock analysis.