---
title: "A List of Probability Questions"
date: "2020-06-21T22:40:32.169Z"
template: "post"
draft: false
slug: "a-working-list-of-probability-problems"
category: "Mathematics"
tags:
  - "Probability"
  - "Quantitative Trading"
  - "Interview Prep"
description: "A 30 day series of probability questions and solutions."
socialImage: ""
---

<span style="display:block; height: 40px;"> <span style="color:grey"> <font size="+2.9">In Preparation For Quantitative Trading Interviews</font></span>
<br>
<strong><font size="-0.8">June 21, 2020</font> <span style="color:grey"> <font size="-0.8"></font></span></strong>
</span>
<br>

This post is mostly for my own self-documentation purposes as I prepare for recruiting at the end of summer. I'll be updating this page with 5 new problems/brain teasers and solutions every day to keep myself accountable. These problems will come from a variety of sources, including *A Practical Guide to Quantitative Finance Interviews*, Math Stack Exchange, and UC Berkeley's EECS 126 [course](https://inst.eecs.berkeley.edu/~ee126/sp20/).

###Day One: June 21

**Problem 1.** What is the expected number of tosses to get three consecutive heads when flipping a fair coin?
<span style="display:block; height: 5px;"></span>
**Solution.** Let $\mathbb{E}[3]$ denote the expected number of rolls for $3$ consecutive heads. If we start rolling and roll a tail first, which has probability $\frac{1}{2}$, then the expected number of tosses will be $\mathbb{E}[3] + 1$. If we roll a head then a tail, which has probability $\frac{1}{4}$, then the expected number will be $\mathbb{E}[n] + 2$. If we roll 2 heads then a tail with probability $\frac{1}{8}$ then expected value is $\mathbb{E}[3] + 3$. Finally if we roll $3$ heads consecutively, which has probability $\frac{1}{8}$, then $\mathbb{E}[3] = 3$. Combining these together, we have
$$
\mathbb{E}[3] = \frac{1}{2}(\mathbb{E}[3] + 1) + \frac{1}{4}(\mathbb{E}[3] + 2) + \frac{1}{8}(3)
$$
Solving this equation gives $\mathbb{E}[3] = 14$. We can extend this to find the expected number of rolls for $n$ consecutive heads to get $\mathbb{E}[n]$: 
$$
\mathbb{E}[n] = \frac{1}{2}(\mathbb{E}[n] + 1) + \frac{1}{4}(\mathbb{E}[n] + 2) + \cdots + \frac{1}{2^n}(\mathbb{E}[n] + n) + \frac{1}{2^n}(n)
$$

Solving for this in general gives us the formula $\mathbb{E}[n] = 2(2^n - 1)$. A number of other solutions of this type of problem can be found [here](https://math.stackexchange.com/questions/364038/expected-number-of-coin-tosses-to-get-five-consecutive-heads?rq=1).

**Problem 2.** Suppose there are five pirates with $100$ pieces of gold who are voting on splitting up the gold. The most senior pirate will propose a way to distribute the gold and requires $50\%$ of the votes in order to pass his proposal. If he receives less than $50\%$ of the votes then he will be killed and the process will begin with the next most senior pirate. How will the gold coins be divided?
<span style="display:block; height: 5px;"></span>
**Solution.** Let's label each pirate in ascending order based on seniority, so pirate $5$ will be most senior and $1$ will be least senior. Building this up from the two pirate case:
Pirate 2 can safely propose he take all $100$ gold pieces as he constitutes $50\%$ of the votes. Then Pirate 1 receives nothing. 

Moving on to the three pirate case--Pirate 3 knows that if his plan is voted down, then Pirate 2 can take all $100$ coins and Pirate 1 will receive nothing. All he needs to do is give Pirate 1 one coin to secure his vote. Adding a fourth pirate, Pirate 4 knows that if his plan is voted down, then Pirate 2 will get nothing. Then all he needs to do is propose to offer Pirate 2 one coin and keep the remaining 99. Now considering all five pirates, Pirate 5 knows that if his plan is voted down, Pirate 1 and Pirate 3 will receive nothing. Then all he needs to do is offer 1 gold coin each to Pirate 1 and Pirate 3, keeping the 98 coins. 

We can extend this to any number $n$ pirates (so long as $n<= 200$). If $n$ is odd, the most senior pirate will offer Pirates $1, 3, \dots, n - 2$ each one coin and keep the remainder for himself. If $n$ is even, then he will offer Pirates $2, 4, \dots, n-2$ one coin each and keep the remainder.


**Problem 3.** For a best of 3 set tennis match, would you bet on it finishing in two sets or three sets given that probabilty of winning a set is constant?
<span style="display:block; height: 5px;"></span>
**Solution.** Let $p = P(\text{player 1 wins})$ and $q = P(\text{player 2 wins})$. To win in two sets, we can have player 1 or player 2 win two consecutive sets, giving a total probability of $p^2 + q^2$. In order for the match to end in three sets, one player must win 2 sets (assume thats its player 1) and the other one set. This corresponds with a probability of $2pq$. Note that $(p - q)^2 \geq 0$, implying that $p^2 + q^2 \geq 2pq$, so I would bet on the match finishing in two sets. 


**Problem 4.** Your break a stick of length 1 at two points uniformly. What is the probability that the three resulting pieces can form a triangle?
<span style="display:block; height: 5px;"></span>
**Solution.** A triangle is possible to form so long as one piece is not longer than the sum of the other two (one side $> \frac{1}{2}$) and the difference between two pieces is not longer than the third. Consider the midpoint $M$ of the original stick: if both cuts are made on the same side of $M$ (probability $\frac{1}{2})$, then one side will have length greater than $\frac{1}{2}$ and a triangle is not possible. Let's say we break the stick at two points $x$ and $y$ with $x < y$ and $x$ and $y$ are on different side of $M$. There is probability $\frac{1}{2}$ that $x$ is farther left on it half of the stick than $y$ is right on its half or the vice versa. In this case, we can't form a triangle either because the difference between two sides will be longer than the third. Then only $(1 - \frac{1}{2}) \cdot ( 1 - \frac{1}{2}) = \frac{1}{4}$ of breaks can form a triangle (my justification of this seems a bit shady and I'll work on a more analytical solution another time).


**Problem 5.** Consider a game where there are two blue balls and two red balls in a bag. Each ball is removed from the bag without replacement and if you guess the color of the ball correctly you earn a dollar. How much would you pay to play this game?
<span style="display:block; height: 5px;"></span>
**Solution.** On your first draw you have a $\frac{2}{4}$ chance of guessing correctly. On the second draw, you have a $\frac{2}{3}$ chance of guessing correctly so long as you guess the color opposite of the first ball. By the third ball, either you have selected two balls of the same color with probability $\frac{1}{3}$ or you selected two balls of different color with probability $\frac{2}{3}$. In the first case you are guaranteed to know the colors of the next ball and in the second you have a $50\%$ chance of guessing the next ball correctly. Finally, the probability of guessing correctly on the last ball is $1$. Then calculating the expected value of the game from our individual draws: 
$$
\mathbb{E}[x] = (\frac{2}{4}\cdot 1) + (\frac{2}{3}\cdot 1) + (\frac{1}{3} \cdot 1 + \frac{2}{3}\cdot\frac{1}{2} \cdot 1) + 1 = \frac{17}{6}
$$
So I would pay \$$\frac{17}{6}$ to play this game. 
