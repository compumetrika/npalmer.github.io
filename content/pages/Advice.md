Title: Advice
Date: 2014-09-15
Category: advice
Tags: advice
Slug: advice
Author: Nathan M. Palmer

I frequently find myself speaking with students and other researchers about how to approach agent-based modeling in economics. If you are a prospective graduate student, a current graduate student, a current researcher in CSS (Computational Social Science) broadly, or even a current economist, this is for you. I have some strong opinions about some of these topics and will at times be blunt. Of course, I also try to be self-aware -- it's certainly the case that multiple way approaches can be successful. I share below what has worked well for me. (If you have a particular burning question, feel free to email me! I may be a little slow to respond but will answer if I can.)

Much of this advice is actually what I would call "doing science well," but applied to simulation and economics. 

This is a work in progress and will almost certainly expand regularly. Advice below is in summarized bullet-point form:

### Know your literature

I can't say this enough: you *must* know where your research fits in the current literature. You *must* know where you are contributing -- you *must* be able to discuss what need you are filling which is not provided by everything else that exists. Science doesn't happen in a vacuum. If you are a programmer, you know that code vetted and debugged by 3 other programmers is *much* more likely to be low-error than single-author code. It's the same for research but at a broader scale. You may be headed down a path which will reveal itself a dead end in 2 years. If someone else has already found that dead end, you *really* want to know about it. I have had this experience again and again, learning from another's comments (and even criticisms) that I was headed down a dead-end path. 



### Know your Journals

"Be able to answer. If prospective student, ask this question." 
"Cheat-sheet for economics: JEDC, JEBO, CE, MacroDynamics, PlosOne (open access), the big ones:"



### Listen to Criticism

You will get excellent research direction from criticism. Criticism isn't just someone being mean (although it can be) -- it's usually an excellent window into a weak point in your thinking. Embrace the criticism. Understand it from the point of view of the criticizer. You don't need an answer right away, but bear it in mind as you work on your topic. Some of my best motivations have come from answering criticism. 


### Technical Background

Here's my strong opinion: If you think you want to criticize some current piece of research, you *must* first understand it from the 'accepting' point of view. You must understand, at a deep level, why the idea you think you oppose *can be* a good idea. Then, after you build your own model, you must also understand how to take your model "to the data." If you can't take your model to the data, you miss out on a lot of possible usage.

A good research program (your research program) has these components: theory, methodology, and empirics. You need to identify all parts to have a "complete package" of research. 

#### Theory Background:
You must understand the technical background of current economic theory. This can be a big lift -- most of the successful[] people[] in[] our[] program who do research in economics or finance have taken the "core" courses for an economics PhD. Mason participates in the Washington Consortium of Schools[], and a number of our students have taken at least a bit of the micro core at, eg, UMD (and gotten As!). You should do something similar -- at a minimum, learn preference/utility theory, expected utility, and general equilibrium. Those are the basics -- there is more to learn based on your specific field. 

#### Empirical Background:
With respect to empirical tools, you need to know econometrics. You need to know the *basics* (statistical tests and 'basic' regressions) and you need to know the *advanced things* (panel data, treatment effects, time series). It's good at least be conversant, but not necessarly an extreme expert. As you find your place in the literature you will learn the specific tools needed for your kind of model. If you want to estimate/calibrate a large simualtion, there are two popular simualtion estiamtion techniques you should look into: SMLE (simulated maximum likelihood estimation) and SMM (simulated method of moments). These, of course, are based on MLE and GMM. Read more about these [here](). Be aware: SMM is the first thing some people may think of, if you say you are "calibrating" your simulation. Don't be surprised if that happens. See this [blog post]() for a reasonably short, related read. It doesn't go into much detail but is a good start. 

We have a fantastic computational statistics department at Mason. Much of what we do with simulation is *essentially* a structural computational estimation procedure. It's good to get into the "headspace" of thinking about how estiamtor

Terminology: you may hear the terms "structural" and "reduced form" thrown around, with respect to estimation of models against data. The "formal" definition (eg on Wikipedia, as of this writing) is a little different than what I've encountered in common use. This [EJMR thread]() actually has a good summary of the loose, 'common use' I've often heard. That is, structural = 'impose specific model forms such as utility, markets, etc,' and reduced form = 'regress the relationship you care about, being careful to address the usual regression concerns'. I'm sure that's vastly oversimplifying it, but it's a working definition. How does this affect you, ABM-economist? Fitting or calibrating a simulation is almost certainly some version of a structural estimation -- but you may have agents which form expectations via some reduced form estimation (as in the [macro]() least-square learning literature). OR, alternatively, you *as the researcher* may understand relationships in your own complex model via reduced-form regressions. 



A wise man once told me that "even with differences of opinion, I am always open others' ideas, and in the end I often find our ideas rub off on one another and all parties emerge a bit changed and a bit better at the end." This is the attitude I try to maintain.


* Email: <npalmer4@masonlive.gmu.edu>

[Home](../)
