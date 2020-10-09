---
layout: paper
title: "Coupling Molecular Dynamics and Direct Simulation Monte Carlo using a general and high-performance code coupling library"
year: "2020"
shortref: "Longshaw <i>et al.</i> <i>Comp. & Flu.</i> 2020"
nickname: md-dsmc-mui-stephen
journal: "Computers & Fluids"
volume: 213
issue:
pages: 104726
authors: "Longshaw SL, Emerson DR, Pillai R, Gibelli L, Lockerby DA"
image: /images/papers/2020-10-05-mui-coupling-comp-fluid.png
fulltext: https://www.sciencedirect.com/science/article/pii/S0045793020302966
doi: "10.1016/j.compfluid.2020.104726" 
supplement:
pdflink: https://www.researchgate.net/publication/344427994_Coupling_Molecular_Dynamics_and_Direct_Simulation_Monte_Carlo_using_a_general_and_high-performance_code_coupling_library 
github:
datashare:
altmetric_id: 
category: paper
funder: EPSRC
tags: [multiscale, mui, dsmc, md]
---

# Abstract 

A domain-decomposed method to simultaneously couple the classical Molecular Dynamics (MD) and Direct Simulation Monte Carlo (DSMC) methods is proposed. This approach utilises the MPI-based general coupling library, the Multiscale Universal Interface. The method provides a direct coupling strategy and utilises two OpenFOAM based solvers, mdFoam+ and dsmcFoam+, enabling scenarios where both solvers assume one discrete particle is equal to one molecule or atom. The ultimate goal of this work is to enable complex multi-scale simulations involving micro, meso and macroscopic elements, as found with problems like evaporation.

Results are presented to show the fundamental capabilities of the method in terms of mass and kinetic energy conservation between simulation regions handled by the different solvers. We demonstrate the capability of the method by deploying onto a large supercomputing resource, with attention paid to the scalability for a canonical NVT ensemble (a constant number of atoms N, constant volume V and constant temperature T) of Argon atoms. The results show that the method performs as expected in terms of mass conservation and the solution is also shown to scale reasonably on a supercomputing resource, within the known performance limits of the coupled codes. The wider future of this work is also considered, with focus placed on the next steps to expand the capabilities of the methodology to allow for indirect coupling (where the coarse-graining capability of the DSMC method is used), as well as how this will then fit into a larger coupled framework to allow a complete micro-meso-macro approach to be tackled.
