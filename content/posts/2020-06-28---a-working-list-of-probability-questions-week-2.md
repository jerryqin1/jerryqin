---
title: "A Working List of Probability Questions: Week Two"
date: "2020-06-28T22:40:32.169Z"
template: "post"
draft: false
slug: "a-working-list-of-probability-problems-week-two"
category: "Mathematics"
tags:
  - "Probability"
  - "Quantitative Trading"
  - "Interview Prep"
description: "Week two problems and solutions for an ongoing probability/statistics series."
socialImage: ""
---

<span style="display:block; height: 40px;"> <span style="color:grey"> <font size="+2.9">Options, Market Making, and Expected Value</font></span>
<br>
<strong><font size="-0.8">June 28, 2020</font> <span style="color:grey"> <font size="-0.8">| Updated July 1, 2020</font></span></strong>
</span>
</br>


Welcome to week two of my trading prep series! This week I'm going to focus most of my attention on learning and practicing market making, options pricing, and random processes. I'll be expanding the depth of the problems I work on and continue posting problems and solutions every day. I'll also post resources and links to additional problems as I go along for my documentation purposes. Thanks for tuning in!

<center><span style="color:gray"><strong><a style="text-decoration:none;color:black" href="/posts/a-working-list-of-probability-problems-week-two#day-eight-june-29">Day 8</a> &nbsp 
<a style="text-decoration:none;color:black" href="/posts/a-working-list-of-probability-problems-week-two#day-nine-june-30">Day 9</a>&nbsp  
<a style="text-decoration:none;color:black" href="/posts/a-working-list-of-probability-problems-week-two#day-ten-july-1">Day 10</a></strong> &nbsp Day 11 &nbsp Day 12 &nbsp Day 13 &nbsp Day 14</span></center>

###Day Eight: June 29

A friend linked me to a blog post by Messy Matters on confidence intervals/overconfidence that you can find [here](http://messymatters.com/calibration/). I've been spending some time with market making questions so I found the excercise and results of the "study" pretty interesting. I also found this [powerpoint](http://web.mit.edu/sebc/finance/FinanceInterviewPrep.pdf) on recuiting tips when I was looking for new problems to do.

**Problem 1.** Make me a market on the temperature in an hour.
<span style="display:block; height: 5px;"></span>
**Solution.** I was thinking through this problem after taking a walk this morning. At the time, I estimated the temperature to be about $60^\circ - 65^\circ$ (the actual temperature was $64^\circ$). Given it was $10\colon 35AM$, it's still relatively early in the day and there's quite a bit of room for the temperature to increase to before it plateaus in the afternoon. From my experience, the temperature in a typical summer day in San Francisco usually tops off around $75^\circ$ to $85^\circ$. This morning was relatively cool and so I'd expect that today would be one of the cooler days, toping off between $75^\circ$ to $78 ^\circ$. Then, just assuming that the temperature increases somewhat linearly, I'd set my bid at $63^\circ$ and offer at $68^\circ$. 

After setting my initial spread, I'd adjust my interval accordingly to how the second party/market makers chooses to buy from or sell to me. To do this, I [sampled](https://www.random.org/gaussian-distributions/) from a normal distribution meaned at $65.5$ with $\sigma = 0.83$ for the price and flipped a coin to determine whether I was being bought or sold to at that price.

1. Bid at $66.9^\circ$: buying from me at a value leaning so far to the right in my range indicates that I severely underestimated the temperature in an hour, as the willingness to buy higher might be an attempt to execute an unfavorable trade with me to then later sell at a higher price with an acceptable margin. However, I also know the temperature cannot change too much so I'd adjust my spread to account for this new information by shifting my position to $65.5-71$. I widened my range a bit since I'm pretty skeptical that my original range reflected the actual temperature well and I want to make sure to cover all my bases.

2. Offer at $68.4^\circ$: A willingness to sell indicates that, taking into account my decision-making, the second party believes that $68.4^\circ$ optimizes both margins and chance of trade execution. I wouldn't expect the exact temperature to be $68.4^\circ$ since not all buyers with information on the weather would want to buy the exact  of the instrument as it's harder to later sell for profit. I'd adjust my spread down to $66.5 - 69.5$. 

Unfortunately, this simulation is flawed as I didn't really have a second party with better information on the specific product being exchanged. I tried to adjust for that by using the sampler and randomizing but since the real value of the temperature at $11\colon35$ wasn't known to either me or my fictitious party, I had to operate under the assumption that my initial spread wasn't completely wrong, which could have been the case. Next time, I'll probably try this with a partner. The actual temperature at $11:35$ was about $66^\circ$ so you can see how the spread deviated from that without this information, but this exercise still helps me practice adjusting my spread to new information.


**Problem 2.** Smith is in jail and had $3$ dollars and can get out on bail if he has $8$ dollars. A guard agrees to make a series of bets with him, with Smith's probability of winning $p = 0.4$ and probability of losting $p = 0.6$. Find the probability that he can leave on bail before losing all his money if he bets $1$ every time versus if he bets as much as possible each round to get to $8$ dollars but nothing more than that. Which is the optimal strategy?
<span style="display:block; height: 5px;"></span>
**Solution.** This problem is from Aldous's STAT 150 class and is a spinoff of the gambler's ruin problem. If Smith bets one dollar at a time, the Markov chain that describes his money at each state $i$ follows:

<img src="/Resources/probability_problems/week2/day_8_problem2_1.jpg" style="width:80%">

Let $p_i$, $i\in[0,8]$ be the probability that Smith's money reaches $8$ before $0$ when starting from state $i$. Then we have 
$$
\begin{aligned}
&p_i =  0.4p_{i+1} + 0.6p_{i-1} \text{ for } i \in [1,7]\\
&p_0 = 0\\
&p_8 = 1\\
\end{aligned}
$$ 
You can solve this extremely convoluted system of linear equations to find that $p_3 = 0.0964$. Alternately, the transition matrix for this Markov chain is:
$$
P = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
0.6 & 0 & 0.4 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 0.6 & 0 & 0.4 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 0.6 & 0 & 0.4 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 0.6 & 0 & 0.4 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 0.6 & 0 & 0.4 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 0.6 & 0 & 0.4 & 0\\
0 & 0 & 0 & 0 & 0 & 0 & 0.6 & 0 & 0.4\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
$$
Taking $P^n$ with $n$ sufficiently large gives us the steady state of this Markov chain, and $P^n_{4,9}$ gives us $p_3$ as well!

For the case that Smith bets as much as possible each round as needed to reach $8$ dollars, we have the Markov chain: 
<img src="/Resources/probability_problems/week2/day_8_problem2_2.jpg" style="width:80%">

This in turn gives us the system of equations
$$
\begin{aligned}
&p_3 = 0.4p_6 + 0.6p_0 = 0.4p_6\\
&p_4 = 0.4p_8 + 0.6p_0 = 0.4\\
&p_6 = 0.4p_8 + 0.6p_6 = 0.4 + 0.6p_4
\end{aligned}
$$

Solving for this gives us $p_3 = 0.256$. This is considerably higher than betting one dollar each time, so Smith should choose this strategy when betting.

**Problem 3.** What is the expected number of tosses for a us to toss a $HTH$?
<span style="display:block; height: 5px;"></span>
**Solution.** This is another Markov chain problem. Note that we start all the way over whenever we roll a tails before our first heads so let's call this state $0$. We can also account for all the other possible states: $1 = H$, $2 = HT$, and $3 = HTH$. Assuming a fair coin we have the following Markov chain: 
<img src="/Resources/probability_problems/week2/day_8_problem_3.jpg" style="width:80%">

Let's denote $\mathbb{E}[i]$ as the expected number of turns to get $HTH$ from each state $i$. Then we have the following system of linear equations: 
$$
\begin{aligned}
&\mathbb{E}[0] = 1 + 0.5\mathbb{E}[0] + 0.5\mathbb{E}[0]\\
&\mathbb{E}[1] = 1 + 0.5\mathbb{E}[1] + 0.5\mathbb{E}[2]\\
&\mathbb{E}[2] = 1 + \mathbb{E}[3] + 0.5\mathbb{E}[0]\\
&\mathbb{E}[3] = 0 
\end{aligned}
$$

Solving these gives $\mathbb{E}[0] = 10$ so we expect it to take 10 turns to flip our first $HTH$.

**Problem 4.** Players $A$ and $B$ play a marble game. Each player has a red and a blue marble in a bag and draws one marble from their bag each round. If both marbles are blue $A$ wins $\$3$ and if both are red $A$ wins $\$1$. If the two colors are different, $B$ wins $\$2$. If you can play this game 100 times, who would you play as?

<span style="display:block; height: 5px;"></span>
**Solution.** Since there is an equal chance of picking marbles with different colors as picking two marbles that are the same color, the expected value of playing player $A$ versus player $B$ is the same (EV $= \$1$). Then, minimizing risk, we can calculate the variance of the payoff for each player:
$$
\begin{aligned}
\sigma^2_A &= (1-1)^2 \cdot \frac{1}{4} + (3-1)^2 \cdot \frac{1}{4} + (0-1)^2 \cdot \frac{1}{2} = \frac{3}{2}\\
\sigma^2_B &= (0-1)^2 \cdot \frac{1}{2} + (2-1)^2 \cdot \frac{1}{2} = 1
\end{aligned}
$$
$A$'s payoff has larger variance and he holds more risk so it's advantageous to play as player $B$ when risk-averse. However, since $n$ is relatively large, the actual payoff approaches the expected payoff of playing, minimizing the risk of playing as player $A$. 


**Problem 5.** You are trapped in a dark cave with three indistinguishable exits on the walls. One of the exits takes you 3 hours to travel and takes you outside. One of the other exits takes 1 hour to travel and the other takes 2 hours, but both drop you back in the original cave through the ceiling, which is unreachable from the floor of the cave. You have no way of marking which exits you have attempted. What is the expected time it takes for you to get outside?
<span style="display:block; height: 5px;"></span>
**Solution.** This is a simple EV problem. Since the doors are indistinguishable and we can't makr our escape attempts, the probability of selecting each of the exists is identical and independent from the others. Then let $X$ be a random variable measuring the time it takes to make it out of the cave. There is $\frac{1}{3}$ chance we make it outside in time $3$, $\frac{1}{3}$ chance we waste an hour and end up back in the cave, and $\frac{1}{3}$ chance we waste two hours and end up back in the cave. Then, 
$$
\mathbb{E}[X] = \frac{1}{3} \cdot 3 + \frac{1}{3}(1 + \mathbb{E}[X]) + \frac{1}{3}(2 + \mathbb{E}[X])
$$
Solving this equation gives $\mathbb{E}[X] = 6$ so we expect to spent $6$ hours attempting to escape before we're finally outside.

###Day Nine: June 30

For today's problems I took a step back and reviewed some general problems and conditional probability.

**Problem 1.** A deck of cards has 3 Red and 3 Blue cards. At each stage, a card is selected at random. If it is Red, it is removed from the deck. If it is Blue then the card is not removed and we move to the next stage. Find the average number of steps till the process ends.
<span style="display:block; height: 5px;"></span>
**Solution.** Note that the proces ends when there are no red cards left. To get started, I'll draw the Markov chain for this problem:
<img src="/Resources/probability_problems/week2/day_9_problem1.jpg" style="width:80%">

Now let's index the states: State $0 = R^3B^3$, State $1 = R^2B^3$, State $2 = RB^3$, State $3 = B^3$. Let $\mathbb{E}[i]$ denote the expected time until the process ends. Then we have the following equations:
$$
\begin{aligned}
\mathbb{E}[0] &= \tfrac{1}{2}(1+ \mathbb{E}[0]) + \tfrac{1}{2}(1+ \mathbb{E}[1])\\
\mathbb{E}[1] &= \tfrac{2}{5}(1 + \mathbb{E}[2]) + \tfrac{3}{5}(1 + \mathbb{E}[1])\\
\mathbb{E}[2] & = \tfrac{1}{4} \cdot 1 + \frac{3}{4}(1 + \mathbb{E}[2])
\end{aligned}
$$
Solving this system gives $\mathbb{E}[0] = 8.5$. 


**Problem 2.** A process moves on the integers 1, 2, 3, 4, and 5. It starts at 1 and, on each successive step, moves to an integer greater than its present position, moving with equal probability to each of the remaining larger integers. State five is an absorbing state. Find the expected number of steps to reach state five. 
<span style="display:block; height: 5px;"></span>
**Solution.** The Markov chain for this problem is

<img src="/Resources/probability_problems/week2/day_9_problem2.jpg" style="width:60%">

This gives us the transition matrix
$$
\begin{pmatrix}
0 & \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4}\\
0 & 0 & \frac{1}{3} & \frac{1}{3} & \frac{1}{3}\\
0 & 0 & 0 & \frac{1}{2} & \frac{1}{2}\\
0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 0 & 1
\end{pmatrix}
$$
We're interested in finding the expected number of steps to reach state five from state one so let $\mathbb{E}[i]$ denote the expected number of steps to reach step $5$ from step $i$. Then we have the equations
$$
\begin{aligned}
\mathbb{E}[1] &= 1 + \tfrac{1}{4}\mathbb{E}[2] + \tfrac{1}{4}\mathbb{E}[3] + \tfrac{1}{4}\mathbb{E}[3] + \tfrac{1}{4}\mathbb{E}[5]\\
\mathbb{E}[2] &= 1 + \tfrac{1}{3}\mathbb{E}[3] + \tfrac{1}{3}\mathbb{E}[4] + \tfrac{1}{3}\mathbb{E}[5]\\
\mathbb{E}[3] &= 1 + \tfrac{1}{2}\mathbb{E}[4] + \tfrac{1}{2}\mathbb{E}[5]\\
\mathbb{E}[4] &= 1\\
\mathbb{E}[5] &= 0 
\end{aligned}
$$
Solving this system of linear equations gives us the set of expected steps from each state $\{\mathbb{E}[1], \mathbb{E}[2], \mathbb{E}[3], \mathbb{E}[4], \mathbb{E}[5]\} = \{\frac{25}{12}, \frac{11}{6},\tfrac{3}{2}, 1, 0\}$ so we expect about $2.0833$ steps to reach $5$.

After doing some reading, I found that 

**Problem 3.** An unfair coin has probability $p$ of tossing heads and $q = 1-p$ of tossing tails. How do you make this coin fair?
<span style="display:block; height: 5px;"></span>
**Solution.** Note that $p_H = p$ and $p_T = p$. The only way for us to make the coin fair is to somehow combine the $H,T$ outcomes as rolling consecutive heads vs tails has different probability of success. Note that $HT$ is rolled with a probability of $pq$ and $TH$ is rolled with a probability of $qp$ (note these are equal). Also $HH$ has $p = p^2$ and $TT$ has $p = q^2$. We can modify the typical rules of coin flipping in in the following way to make it fair: Let heads be tossing an $HT$ and tails be tossing $TH$, which both have equal probability and is fair. Then, to account for the remaining two possible outcomes, we just start over when we get $HH$ or $TT$, which gives us an automatic reset when we toss two of the same face. Technically, $HHT$ would be rolling a $HT$, but note that $P(HHT) = p^2q \neq q^2p = P(TTH)$ so we can't simply take the first occurance of $HT$ or $TH$ as a fair outcome is not guaranteed. 


**Problem 4.** This is a variation of the gambler's ruin problem. You have $9$ and want to reach $10$. Your probability of success is $p = 0.4$ and failure is $q=0.6$. You may only place bets in multiples of $10p$. How would you maximize the probability of reaching $10$?
<span style="display:block; height: 5px;"></span>
**Solution.** I would bet $\$4$ each time I play. Note that from $\$9$ we can bet either $4$ or $8$. We have $p= 0.4$ of reaching $\$10$ from each of these bets, but $0.6$ chance of reaching $\$1$ if we bet $8$ dollars and $q$ chance of reaching $\$5$ if we bet $4$ dollars. Once we reach $1$, we can no longer bet as all of our bets must be a multiple of $4$. Then, if we bet $\$8$, we have a total of probability $0.4$ to reach our goal. If we bet $\$4$, then we have probability $0.4$ of getting to $\$10$ the first round. If this doesnt happen and we lose the first bet instead, then we're at $\$5$ and we have the opportunity to go down to $\$1$ (probability $0.4$) in which we're done and can't bet anymore or go back up of $\$9$ and play over our original scenario over again. Clearly, betting $\$4$ per round is optimal as we have probability $0.4$ of winning the first round (matching the probability of winning when betting $\$8$) and there also is some additional probability $p_0 >0$ that we can reach $\$10$ in later rounds.


**Problem 5.** Two players, $A$ and $B$, toss a fair coin in that order. The sequence of heads and tails is recorded. If there is a $HT$ sequence in the rolls, then whoever rolled the tails wins and the game ends. What is the probability that $A$ wins?
<span style="display:block; height: 5px;"></span>
**Solution.** Let $P(A)$ and $P(B)$ denote the probabilities that $A$ and $B$ win respectively. Note that $P(B) = 1 - P(A)$. This next part is pretty cool--we can condition $P(A)$ on $A$'s first coin toss, with has probability $0.5$ to roll $H$ and probability $0.5$ to roll $T$. Then we have $P(A) = \tfrac{1}{2}P(A \, | \, H) + \frac{1}{2}P(A \, | \, T)$. If $A$ tosses heads, then $B$ essentially becomes the first to toss and so $P(A , |, T) = P(B) = 1-P(A)$. If $A$ tosses heads however, we can then condition the probability further on $B$'s first toss. $B$ has probability $0.5$ of rollng $T$, in which $A$ loses, and probability $0.5$ of tossing $H$, which essentially brings us to the scenario that $B$ is the first person to toss an $H$ so $A$ would have probability $1-P(A \, | \, H)$ of winning. Then we have 
$$
P(A \, | \,H) = \tfrac{1}{2} \cdot 0 + \tfrac{1}{2}(1 - P(A\, | \, H)) \to P(A \, | \,H)= \tfrac{1}{3}
$$
We can then plug this back into the original expresion to find that $P(A) = \frac{4}{9}$. 

###Day Ten: July 1

Come back later for the rest of today's problems!

**Problem 1.** You play a game with an urn that contains $75$ clue balls $25$ red balls and $1$ yellow ball. For each red ball you draw you gain a dollar and if you draw the yellow ball you lose everything and the game ends. What is your strategy for this game given that you can decide to stop or redraw after each turn?
<span style="display:block; height: 5px;"></span>
**Solution.** Note the payoff for each blue ball draw is $0$ and the payoff for the yellow ball is $-r$ where $r$ is the number of red ball already drawn. If we let $b$ be the number of blue balls already drawn, we can derive the marginal expected value (not sure if this is a term):
$$
\begin{aligned}
\mathbb{E}[X] &= \frac{75 - b}{(75 - b) + (25 - r) + 1}\cdot 0 + \frac{25 - r}{(75 - b) + (25 - r) + 1} \cdot 1 \\ 
&+ \frac{1}{(75 - b) + (25 - r)
+ 1}\cdot (-r) = \frac{25- 2r}{(75 - b) + (25 - r) + 1}
\end{aligned}
$$
Our marginal $EV$ should be greater than $0$ for us to keep playing. Then, setting the numerator to $0$ and solving gives us $r= \frac{25}{2}$. This is the number of balls that have already been drawn, so after drawing $12$ balls our $EV$ is still positive so we'll draw a $13$th one. Then we draw $13$ balls and call it a day (of course this will sometimes be cut short if we draw a yellow ball before then).