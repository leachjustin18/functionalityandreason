---
author: Justin Leach
tags: ['Algorithm, Order', 'JavaScript']
category: Algorithm
title: Finding the next prime number
---

Let's say we have an array of random numbers: `[0, -1, -1, 2, 3]` and we had to find the next prime number, in this case 4, how do you think we would do it?

One way would to sort the number and find the next number.  We would also want to remove any dups.  From here we would could use a fee different loops.

```Javascript
  for(let i = 0; i < arr.length; i++) {
      //do stuff
  }
```