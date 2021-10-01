---
layout: paper
title: "Implicit Discontinuous Galerkin Method for the Boltzmann Equation"
year: "2020"
shortref: "Su <i>et al.</i> <i>J. Sci. Comput.</i> 2020"
journal: "Journal of Scientific Computing"
volume: 82
issue:
pages: 39
authors: "Su W, Wang P, Zhang Y, Wu L"
image: /images/papers/2020-02-01-implicit-dg-jsc.png
fulltext: https://link.springer.com/article/10.1007/s10915-020-01139-7
doi: "10.1007/s10915-020-01139-7" 
supplement:
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: EPSRC
tags: [full Bolztmann collision, implicit discontinous galerkin, fast spectral method]
highlight: false
---

# Abstract 

An implicit high-order discontinuous Galerkin (DG) method is developed to find the steady-state solution of rarefied gas flow described by the Boltzmann equation with full collision operator. In the physical space, the velocity distribution function is approximated by the piecewise polynomial of degree up to 4, while in the velocity space the fast spectral method is incorporated into the DG discretization to evaluate the collision operator. A specific polynomial approximation for the collision operator is proposed to reduce the computational cost of the fast spectral method by K times, where for two-dimensional problem K is 15 when the DG with 4th-order polynomial is used on triangular mesh. Based on the first-order upwind scheme, a sweeping technique is employed to solve the local linear equations resulting from the DG discretization sequentially over spatial elements. This technique can preserve stability of the scheme and requires no nonlinear limiter in solving hypersonic rarefied gas flows when the shock wave structure is fully resolved by fine spatial grid. Moreover, without assembling large sparse linear system, the computational cost in terms of memory consumption and CPU time is significantly reduced. Five different one/two-dimensional tests including low-speed microscale flows and hypersonic rarefied gas flows are used to assess the accuracy and efficiency of proposed approach. Our results show that, DG scheme of different order of approximating polynomial requires the same number of iterative steps to obtain the steady-state solution with the same order of accuracy; and the higher order the scheme is, the fewer spatial elements are needed, thus leading to less CPU time. Besides, our method can be faster than the finite difference solver by about one order of magnitude. The produced solutions can be used as benchmark data for assessing the accuracy of other gas kinetic solvers for the Boltzmann equation and gas kinetic models that simplify the Boltzmann collision operator.