---
layout: paper
title: "Scoring each decision, not just the loop: testing agents' scientific judgement in simulation discovery loops"
year: "2026"
shortref: "Pillai <i>et al.</i> <i>ELLIS UnConference workshop</i> 2026"
journal: "ELLIS UnConference 2026, Next Generation of Discovery Loops workshop (non-archival)"
volume:
issue:
pages:
authors: "Pillai R, Hermann A, Kirsz M, Hulikal Chakrapani T, He F"
image: /images/papers/2026-11-23-ScoringEachDecision.jpg
fulltext:
doi: "10.5281/zenodo.24458686"
supplement:
pdflink:
github:
datashare:
altmetric_id:
category: paper
funder:
tags: [agents, md]
highlight: false
---

# Abstract

In simulation discovery loops the steps run without human involvement, and the decisions between them, which often need expert judgement, are increasingly being handed to large language model (LLM) agents. Whether the agents make these decisions well is not always measured. Molecular simulation is widely used from drug discovery to batteries and chip manufacturing; machine-learned interatomic potentials (MLIPs) have recently started providing the highly-accurate interatomic forces that underpin it, replacing traditional force fields. Our simulation discovery loop of interest is the one that builds an MLIP, which therefore determines how far novel molecular simulations can be trusted. The MLIP loop has five decisions between its steps. We argue that each decision should be scored on its own, against an answer fixed in advance (the key, or ground truth) and checkable by rerunning the simulation, alongside a (human) domain expert and a fixed if-then rule developed by the expert. As early evidence, we have tested the last decision (fit for use) in a simpler form, on a test bed of completed molecular simulations. Using Claude Opus 5.5, we ran 10 independent trials, each starting with blank memory, to judge whether 11 openly available molecular simulations could be ‘trusted’. Against the key it averaged 9.3/11, versus 4/11 both for a rule that trusts every simulation and for one that trusts none. We propose this test for all decisions within simulation discovery loops, to find out when agents can be trusted and when they cannot.
