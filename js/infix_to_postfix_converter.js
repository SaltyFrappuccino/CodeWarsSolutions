// https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/javascript

function toPostfix(infix) {
    const ops = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}, stack = [], out = [];
    infix.replace(/\d+|[+\-*/^()]/g, token => {
      if (!isNaN(token)) out.push(token); 
      else if (token === '(') stack.push(token); 
      else if (token === ')') { 
        while (stack.length && stack.at(-1) !== '(') out.push(stack.pop());
        stack.pop(); 
      } else { 
        while (stack.length && ops[token] <= ops[stack.at(-1)] && token !== '^') out.push(stack.pop());
        stack.push(token);
      }
    });
    while (stack.length) out.push(stack.pop());
    return out.join('');
  }