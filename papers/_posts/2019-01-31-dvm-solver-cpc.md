---
layout: paper
title: "A multi-level parallel solver for rarefied gas flows in porous media"
year: "2019"
shortref: "Ho <i>et al.</i> <i>Fuel</i> 2019"
journal: "Physics of Fluids"
volume: 234
issue: 
pages: 14-25
authors: "Ho MT, Zhu L, Wu L, Wang P, Guo Z, Li ZH, Zhang Y"
image: /images/papers/2019-01-31-dvm-solver-cpc.jpg
fulltext: https://www.sciencedirect.com/science/article/pii/S0010465518303047
doi: "10.1016/j.cpc.2018.08.009" 
supplement: 
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: EPSRC
tags: [solver, parallel, porescale, dvm]
highlight: true
---

# Abstract 

A high-performance gas kinetic solver using multi-level parallelization is developed to enable pore-scale simulations of rarefied flows in porous media. The Bhatnagar–Gross–Krook model equation is solved by the discrete velocity method with an iterative scheme. The multi-level MPI/OpenMP parallelization is implemented with the aim to efficiently utilize the computational resources to allow direct simulation of rarefied gas flows in porous media based on digital rock images for the first time. The multi-level parallel approach is analyzed in detail confirming its better performance than the commonly-used MPI processing alone for an iterative scheme. With high communication efficiency and appropriate load balancing among CPU processes, parallel efficiency of 94% is achieved for 1536 cores in the 2D simulations, and 81% for 12288 cores in the 3D simulations. While decomposition in the spatial space does not affect the simulation results, one additional benefit of this approach is that the number of subdomains can be kept minimal to avoid deterioration of the convergence rate of the iteration process. This multi-level parallel approach can be readily extended to solve other Boltzmann model equations.