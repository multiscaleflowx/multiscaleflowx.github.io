---
layout: paper
title: "Fast Convergence and Asymptotic Preserving of the General Synthetic Iterative Scheme"
year: "2020"
shortref: "Su <i>et al.</i> <i>SIAM J. Sci. Comput.</i> 2020"
journal: "SIAM Journal on Scientific Computing"
volume: 42
issue: 6
pages: B1517-B1540
authors: "Su W, Zhu L, Wu L"
image: /images/papers/2020-12-14-up-gsis-siam.png
fulltext: https://epubs.siam.org/doi/abs/10.1137/20M132691X
doi: "10.1137/20M132691X" 
supplement:
pdflink: 
github:
datashare: 
altmetric_id: 111071713
category: paper
funder: EPSRC
tags: [GSIS, fast convergence, asymptotic preserving]
highlight: false
---

# Abstract 

Recently the general synthetic iteration scheme (GSIS) was proposed for the Boltzmann equation [W. Su et al., J. Comput. Phys., 407 (2020), 109245], where various numerical simulations have shown that (i) the steady-state solution can be found within dozens of iterations at any Knudsen number, and (ii) the solution is accurate even when the spatial cell size in the bulk region is much larger than the molecular mean free path, i.e., the Navier--Stokes solutions are recovered at coarse grids. The first property indicates that the error decay rate between two consecutive iterations decreases to zero along with $K$, while the second one implies that the GSIS asymptotically preserves the Navier--Stokes limit when the Knudsen number approaches zero. This paper is first dedicated to the rigorous proof of both properties. Second, several numerically challenging cases (especially the two-dimensional thermal edge flow) are used to further demonstrate the accuracy and efficiency of GSIS.
