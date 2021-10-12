---
layout: paper
title: "Pore-scale gas flow simulations by the DSBGK and DVM methods"
year: "2021"
shortref: "Li <i>et al.</i> <i>Comput. Fluids</i> 2021"
journal: "Computers and Fluids"
volume: 226
issue:
pages: 105017
authors: "Li J, Ho MT, Borg MK, Cai C, Li ZH, Zhang Y"
image: /images/papers/2021-08-15-pore-dsbgk-dvm-cf.jpg
fulltext: https://www.sciencedirect.com/science/article/pii/S0045793021001833
doi: "10.1016/j.compfluid.2021.105017" 
supplement: 
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: KFUPM
tags: [porescale, Sierpinski, dsbgk, dvm]
highlight: true
---

# Abstract 

Shale gas flow at the pore scale is very challenging to simulate due to high Knudsen numbers (Kn), low speeds and complicated pore geometries. The direct simulation BGK (DSBGK) method and the discrete velocity method (DVM) are promising methods to simulate three-dimensional (3D) gas flows in the shale rock. As the grid-convergence accuracy and computational cost highly depend on the spatial and molecular velocity grids, here we present a rigorous study of the computational performance of the two methods by simulating gas flows through the standard 3D Sierpinski carpet. In this study, we found reasonable agreement between the DSBGK and DVM simulations when comparing the velocity profiles and permeability curves obtained by using fine spatial and velocity grids. However, the grid convergence of the DSBGK simulation is faster than that of the DVM, which requires a very large number of spatial and velocity grids for convergence. Consequently, the DSBGK simulation is orders of magnitude cheaper than the DVM simulation in terms of the CPU time and memory usage. While the DVM requires a high-performance computing facility to meet the memory demand of several hundreds of gigabyte for simulating this 3D flow problem, the DSBGK simulation can run on an ordinary laptop. This work therefore demonstrates the DSBGK method as a practical simulation tool for 3D pore-scale gas flows in the shale rock. Converged results generated in this study can be used as comparison data by other simulation methods.