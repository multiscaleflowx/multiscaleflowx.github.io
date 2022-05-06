---
layout: paper
title: "Multiscale simulation of molecular gas flows by the general synthetic iterative scheme"
year: "2021"
shortref: "Su <i>et al.</i> <i>Comput. Methods Appl. Mech. Engrg.</i> 2021"
journal: "Computer Methods in Applied Mechanics and Engineering"
volume: 373
issue:
pages: 113548
authors: "Su W, Zhang Y, Wu L"
image: /images/papers/2021-01-01-poly-gsis-cmame.png
fulltext: https://www.sciencedirect.com/science/article/pii/S0045782520307337
doi: "10.1016/j.cma.2020.113548" 
supplement:
pdflink: 
github:
datashare: 
altmetric_id: 
category: paper
funder: EPSRC
tags: [multiscale, GSIS, polyatomic gas]
highlight: false
---

# Abstract 

The in-depth knowledge of rarefied gas dynamics is crucial to address challenges in a wide range of engineering problems, where gas flows are usually multiscale, i.e., covering a wide range of Knudsen numbers. As the traditional Navier–Stokes equations fail, gas kinetic equations are required to model the flows. So far, very few numerical methods are designed to efficiently solve the multiscale gas dynamics and reveal the role of internal degrees of freedom of gas molecules. In this work, a general synthetic iterative scheme (GSIS) is proposed to find steady-state solutions of the gas kinetic equations for molecular gas flows accurately and efficiently, where the gas kinetic equations are solved together with the macroscopic synthetic equations that expedite solutions towards the steady state. In the macroscopic synthetic equations, while the momentum equation is the same as that used in the GSIS for monatomic gas, two energy equations are introduced here for polyatomic gases: one is for the translational energy and the other for the internal energy; these equations are derived exactly from the gas kinetic equations hence no approximation is made in final solutions. The Fourier stability analysis is performed to show that the GSIS permits fast convergence to steady-state solutions in the entire flow regime; meanwhile the asymptotic analysis shows that the GSIS recovers the Navier–Stokes equations when the Knudsen number is small, even on the spatial grid with cell size much larger than the molecular mean free path. With all these unique features, several challenging numerical examples are given to show that the proposed GSIS is a promising tool to simulate multiscale molecular gas flows and investigate the effects of internal degrees of freedom.