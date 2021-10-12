---
layout: paper
title: "A comparative study of the DSBGK and DVM methods for low-speed rarefied gas flows"
year: "2019"
shortref: "Ho <i>et al.</i> <i>Comput. Fluids</i> 2019"
journal: "Computers and Fluids"
volume: 181
issue:
pages: 143-159
authors: "Ho MT, Li J, Wu L, Reese J, Zhang Y"
image: /images/papers/2019-03-15-cavity-dsbgks-dvm-cf.jpg
fulltext: https://www.sciencedirect.com/science/article/pii/S0045793019300155
doi: "10.1016/j.compfluid.2019.01.019" 
supplement: 
pdflink: 
github:
datashare: http://dx.doi.org/10.15129/30d994db-db16-4ee9-b02b-dacb2929f3ff
altmetric_id: 
category: paper
funder: KFUPM
tags: [cavity, microflow, dsbgk, dvm]
highlight: true
---

# Abstract 

Low-speed rarefied gas flow in a lid-driven cavity is chosen as a test case in order to assess the accuracy and efficiency of both the Direct Simulation Bhatnagar-Gross- Krook (DSBGK) method and the Discrete Velocity Method (DVM) for solving the BGK kinetic equation. Various lid-speeds and a broad range of rarefaction levels, from slip to near free-molecular flows, are investigated. The DSBGK and DVM results are in satisfactory agreement for all the examined cases in 2D and 3D. As a statistical method, the stochastic noise of the DSBGK method is much smaller than that of the conventional Direct Simulation Monte Carlo (DSMC) method, and is independent of the Mach number. To achieve the required accuracy, the DSBGK simulations need more CPU time than the DVM simulations, i.e. for the 2D cases, a factor of 2 to 15 times more for convergence, and about 50 to 80 times more overall, including the time-averaging process. However, for 3D cases, the third direction in the DVM velocity grid is needed, so the computational cost of DSBGK is now only 0.16 to 0.51 times that of the DVM for the convergence process, and 1.6 to 5.8 times that of the DVM overall. The efficiency of the DSBGK method can also be expected to be enhanced in large-scale 3D simulations, where the computational cost for time-averaging becomes negligible in comparison with the convergence process. The DSBGK simulations require much less memory, even at low Mach numbers, than the DVM simulations; in the test cases with the required accuracy, about 10 simulated molecules per cell in the DSBGK simulations are sufficient for an arbitrary Kn, while the DVM requires at least 4×24 and 4×24×12 velocity grids for the 2D and 3D cases, respectively, even at Kn = 0.1. Finally, we discuss the ray effects in the DVM, which exist in flow problems with a discontinuous boundary and are caused by incompatibility of the velocity grid, the spatial grid, and the order of accuracy of the numerical scheme.