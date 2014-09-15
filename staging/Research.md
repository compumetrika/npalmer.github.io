Title: Publications & Work in Progress
Date: 2014-08-09
Category: reseach
Tags: reseach
Slug: reseach
Author: Nathan M. Palmer

Research Summary 
----------------
My research deals with dynamic learning when agents do not know the transition probabilities associated with their state space. Agents learn the value of an arbitrary policy function from experience, and improve their policy by comparing their estimate with that of a neighbor. With enough experience, agent policies converge to the optimum. Even aside from the optimum, agents continually seek to improve their policy function and are "boundedly rational" -- doing their best conditional on their current knowledge. Intuitively, agents learn fastest when they can communicate with others and when they "baseline" their actions against hypothetical own experiences.
Intuitively, extensions such as social learning and agent-level introspection (a modification to the value estimator) allow faster learning over the most basic version. 

This approach allows agents in complex environments to nonetheless continually learn and improve their policies in a well-understood way. The approach is modular and usable in a wide variety of settings (with one goal of learning analogous to "completely uncoupled" behavior as Nax, Pradelski, and H.P. Young 2013). One intended application is a large-scale agent-based model such as Geanakoplos et al. (2012). Prices are determined by processes in a high-dimensional state-space with non-trivial market structures, both in the general-equilibrium housing market and the partial-equilibrium mortgage and labor markets. Solving for optimal policies in this environment is non-trivial (and perhaps not desirable even if attainable). On the other extreme, agents who do not change their policies as their environment shifts is also not desirable -- even if agents do not unconditionally optimize, we would like them to do the best they can, conditional on their instantaneous state of knowledge. 



The purpose of this approach is to allow agents

An ideal learning mechanism might have the following properties: 



The key intuition is that 

 and in circumstances when the agent does not know the transition probabilities associated 



I am a PhD candidate in George Mason's [Department of Computational Social Science](http://www.css.gmu.edu/), specializing in simulation techniques applied to learning and consumption in macroeconomics and finance. 


I focus primarily on learning mechanisms applied to household consumption and finance. My advisor is Rob Axtell.


[Home](../)
