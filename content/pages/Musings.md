Title: Musings
Date: 2014-09-15
Category: musings
Tags: musings
Slug: musings
Author: Nathan M. Palmer

I frequently find myself speaking with students and other researchers about how to approach agent-based modeling in economics. If you are a prospective graduate student, a current graduate student, a current researcher in CSS (Computational Social Science) broadly, or even a current economist, this is for you. I have some strong opinions about some of these topics and will at times be blunt. Of course, I also try to be self-aware -- there are multiple paths to success!

If you have a particular burning question, feel free to email me. I may be a little slow to respond but will answer if I can.

Much of this advice is actually what I would call "doing science well," but applied to simulation, CSS and economics:


### Know the Literature -- Know Where Your Work Provides Value-Added

I can't say this enough: you *must* know where your research fits in the current literature. You *must* be able to answer the question, "what question are you trying to answer?" You must be able to verbalize what need you are filling in the current lit. 

Aside from the "bug catching" nature of finding your place in the literature (many smart minds have already tackled these problems, with the same data you have available!), you need to be speaking in a language and in frameworks that other researchers will quickly understand. You will often have 5-10 minutes to sell an idea as reasonable -- even when you have a 90 minute window to talk. If you can't communicate the idea, you will fail to improve the state of human knowledge -- even if your idea truly is revolutionary. (Usually it isn't.)

30 years ago ______ and _______ wrote a great paper about simulation as a tool for economics. Many of their ideas are as true today as they were then, and are the best motivations for ABM -- which of course is simply a simulation technique.

For ABM in particular, there are good and bad uses of ABM. Get to know the literature and tools and you will find the "gaps." If the gaps have to do with 

 -- and uses  In my opinion, you use ABM when you think heterogeneity is important, when you think complex interactions are important, when you have an enormous amount of data which you would like to exploit in a structured and rigorous way. Do you have a complex market or production structure, about which you have a lot of data? ABM may be right for you. Do you think that interactions between particular sets of contractually specified behavior may be important -- and you have data and knowledge of the relevant structures? ABM may be for you. 

An important note: if some of the added str


### Know your Journals

Be able to answer the question, "what are the journals you hope to publish in/what are the journals that authors in your field publish in?" If prospective student, ask this question of your potential classmates and professors. 

Cheat-sheet for economics, very incomplete: 
    * Field journals: JEDC, JEBO, CE, MacroDynamics
    * The big ones: Econometrica, JPE, other top 5
    * The biggest: Nature, Science.


### Key model structures

You need to be able to answer these Qs about your model:
    
    * How do agents form their behavior? (technically, their policy functions?)
        * What is their information set?
        * How do agents form expectations?
        
        * If agents are using rules of thumb:
            * why are these justified?
            * do they improve/change them? how? why? 
            * can you formulate an objective function for these agents? 
    
        * If they are optimizing, either "well" or "poorly":
            * what is their objective function?
            * what is their optimization process?
            * Note: I assume agents can be optimizing without being fully rational -- that is, they can be solving an optimization problem which is simply *not quite the right one.* Perhaps they approximate some portions.

    * How do prices form? 
        * Straightforward if you use market clearing and agent policy functions
        * If via auction or random matching/bargaining, agents will need to form bid/ask prices -- how?
    
    * If agents use rules of thumb, will your results be destroyed by adding a single (or multiple) "fully rational" agents?
        * Note: adding fully rational agents may require *you*, the modeler, to iteratively try out different forms of expectation-formation for your "fully rational" agents. If their expectations are not on average correct, they are not fully rational! For ideas, see: Krusell Smith 1996, 1998. 
        
    * How does randomness enter the model?

    * How do you estimate your model? What are calibrations vs estimated results? (be clear here!)
    

### Listen to Criticism

You will get excellent research direction from criticism. Criticism isn't just someone being mean (although it can be) -- it's usually an excellent window into a weak point in your thinking. Embrace the criticism. Understand it from the point of view of the criticizer. You don't need an answer right away, but bear it in mind as you work on your topic. Some of my best motivations have come from answering criticism. 


### Technical Background

Here's my strong opinion: If you think you want to criticize some current piece of research, you *must* first understand it from the 'accepting' point of view. You must understand, at a deep level, why the idea you think you oppose *can be* a good idea. Once you understand this, you very often are driven to see the flaws as well, as a consequence. In my experience, half the time the key important flaws have been different than what I first believed. This process usually requires a bit of specialized technical knowledge. 

You must also understand how to take models to data. This will also require technical background, often of a different flavor than for above.

A good research program (your research program) has these components: theory, methodology, and empirics. You need to identify all parts to have a "complete package" of research, and demonstrate proficiency in each. 


#### Theory Background:
You must understand the technical background of current economic theory. This can be a big lift -- most of the [successful](http://www.inet.ox.ac.uk/people/view/54) [people]](http://www.css.gmu.edu/node/8?q=node/13) [in](http://carrknight.github.io/ [our](https://sites.google.com/site/mlatek/)) [program](http://www.css.gmu.edu/node/8?q=node/163) [who](http://www.css.gmu.edu/node/8?q=node/237) [do](http://www.css.gmu.edu/node/8?q=node/277) research in economics or finance have taken "core" graduate courses for economics, often at the PhD level. Mason participates in the [Washington Consortium of Schools](http://www.consortium.org/), and a number of our students have taken at least a bit of the micro core at, eg, UMD (and gotten As!). You should do something similar: at a minimum, learn preference/utility theory, expected utility, and general equilibrium. Those are the basics -- there is more to learn based on your specific field (eg game theory for many of you), but these are the basics in which you must be conversant.

#### Empirical Background:
With respect to empirical tools, you need to know econometrics. You need to know the *basics* (statistical tests and 'basic' regressions) and you need to know the *advanced things* (panel data, treatment effects, time series). You must be at least conversant in these -- know when they are useful and the basic dangers. As you find your place in the literature you will learn the specific tools needed for your kind of model. 

For complex simulation-based models there are some simulation-based estimator: SMLE (simulated maximum likelihood) and SMM (simulated method of moments), based of course on MLE and GMM. I believe a number of ABMs are "accidentally"/informally estimated by SMM. Read more about this [here](http://fxdiebold.blogspot.com/2013/07/more-on-strange-american-estimator-gmm.html) -- and while you're at it, read this(http://stats.stackexchange.com/questions/27662/what-are-the-major-philosophical-methodological-and-terminological-differences#159). If you are a bit more brave, I believe the world of Bayesian estimation will eventually bring some powerful tools to the table for bringing ABMs to data.

We have a fantastic computational statistics department at Mason. Much of what we do with simulation is *essentially* a structural computational estimation procedure. It's good to get into the "headspace" of thinking about how estimators work, which I believe these classes will do. 

An aside on 'metrics terminology: you may hear the terms "structural" and "reduced form" thrown around. The "formal" definition (eg on Wikipedia, as of this writing) is a little different than what I've encountered in common use. This [EJMR thread](http://www.econjobrumors.com/topic/whats-reduced-form-and-whats-structural-form-estimation) actually has a reasonable 'loose summary' of the common use I've heard. It's surely vastly oversimplified. How does this affect you, ABM-economist? Fitting or calibrating a simulation is almost certainly some version of a structural estimation -- but you may have agents which form expectations via some reduced form estimation (as in the [macro](press.princeton.edu/titles/7097.html) least-square learning literature). OR, alternatively, you *as the researcher* may understand relationships in your own complex model via reduced-form regressions. 


[Home](http://npalmer.github.io/)

