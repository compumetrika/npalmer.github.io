Things I work on:


* Simulation-based inference: indirect inference and the bootstrap
    * a "direct" method of indirect inference: simulated method of moments
    * model-based indirect inference using a *detailed model* and *auxiliary model*
    * model-based ("parametric") bootstrap
    * non-parametric bootstrap

* Welfare ranking for arbitrary policy functions: heuristic policies, social policies
    * employs simulation-based value estimation
    * provides estiamtes of the true welfare cost of social learning (exploitation vs exploration tradeoffs)
    * provides

* First-principles approach to learning solutions to dynamic optimization problems with arbitrary model uncertainty

    * Drows from extensive and established literature: Approximate dynamic programming, reinforcement learning, stochastic approximation
    * Asynchronous dynamic programming as a foundational baseline
        * establishes efficiency (or inefficiency) of finding optimal solutions under learning-from-experience
        * and conveniently, a conceptual bridge from dynamic programming
        * intuitive explanation for *why* agents may 'optimally choose to approximate' (spoiler: signal process is to slow for finding complete dynamic solution to be optimal, once we account for exploration/exploitation tradeoff. Welfare loss from explore/exploit tradeoff implies there is actually an optimal level of approximation, which we can establish in concrete ways, using traditional Policy Iteration as overarching framework.)
    * basic version does not require knowledge about shock process
    * key elements:
        * exploiting knowledge about the shape of the optimal solution
        * approximation of
        * learning from "regret"
    * widely applicable to nearly any policy setting
    * also suggests straightforward ways in which agents may "go off the rails" and learn poorly.
    * approach from first principles implies straightforward framework/taxonomy for "boundely rational" mistakes on part of agents.
        * eg. conditional on claiming
    * intuitive exp
    * Note: it may be the case that some of population is modeled *best* as learning to optimize, some modeled best as purely replication-dynamic learners, and some simply modeled as "confused," not making discernable optimizing choices (NOTE that this may go one of two ways -- optimal policy plus noise, or simply noise within what is feasible.)
        * GREAT EXPERIMENTAL REFERENCE: Houser et al. (200_), Bayesian estimation of number of types of learners.
            * THIS FINDS EVIDENCE for N distinct types of learners! Which at first blush appear to fit the framework above very nicely! That is, "near optimimal" learners, "mistakes in a particular way" learners, and "pure confusion" (non)learners. Very very cool result.
