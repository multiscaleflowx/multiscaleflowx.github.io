---
layout: paper
title: "Accurate and efficient computation of the Boltzmann equation for Couette flow: Influence of intermolecular potentials on Knudsen layer function and viscous slip coefficient"
year: "2019"
shortref: "Su <i>et al.</i> <i>J. Comput. Phys.</i> 2019"
journal: "Journal of Conputational Physics"
volume: 378
issue:
pages: 573-590
authors: "Su W, Wang P, Liu H, Wu L"
image: /images/papers/2019-02-01-viscous-slip-jcp.png
fulltext: https://www.sciencedirect.com/science/article/pii/S0021999118307332
doi: "10.1016/j.jcp.2018.11.015" 
supplement:
pdflink: 
github:
datashare: 
altmetric_id: 51125607
category: paper
funder: EPSRC
tags: [Kramer's problem, Knudsen layer, viscous slip coefficient]
highlight: false
---

# Abstract 

The Couette flow is one of the fundamental problems of rarefied gas dynamics, which has been investigated extensively based on the linearized Boltzmann equation (LBE) of hard-sphere molecules and simplified kinetic model equations. However, how the different intermolecular potentials affect the viscous slip coefficient and the structure of Knudsen layer remains unclear. Here, anovel synthetic iteration scheme (SIS) is developed for the LBE to find solutions of Couette flow accurately and efficiently: the velocity distribution function is first solved by the conventional iterative scheme, then it is modified such that in each iteration i) the flow velocity is guided by an ordinary differential equation that is asymptotic-preserving at the Navier–Stokes limit and ii) the shear stress is equal to the average shear stress. Based on the Bhatnagar–Gross–Krook model, the SIS is assessed to be efficient and accurate. Then we investigate the Knudsen layer function for gases interacting through the inverse power-law, shielded Coulomb, and Lennard-Jones potentials, subject to diffuse-specular and Cercignani–Lampis gas-surface boundary conditions. When the tangential momentum accommodation coefficient (TMAC) is not larger than one, the Knudsen layer function is strongly affected by the potential, where its value and width increase with the effective viscosity index of gas molecules. Moreover, the Knudsen layer function exhibits similarities among different values of TMAC when the intermolecular potential is fixed. For Cercignani–Lampis boundary condition with TMAC larger than one, both the viscous slip coefficient and Knudsen layer function are affected by the intermolecular potential, especially when the “backward” scattering limit is approached. With the asymptotic theory by Jiang and Luo (2016) [14]for the singular behavior of the velocity gradient in the vicinity of solid surfaces, we find that the whole Knudsen layer function can be well fitted by the power series ∑2n=0∑2m=0cn,mxn(x lnx)m, where xis the distance to the solid surface. Finally, the experimental data of the Knudsen layer profile are explained by the LBE solution with proper values of the viscosity index and TMAC.