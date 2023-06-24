//Problem: Given and integer 'n' find the factorial of that integer

//Factorial: In mathmetics, the factorial of a non-neg integers 'n', denoted n!, is product of all positive integers less than or equal

//factorial(5) = 5*4*3*2*1



function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
} //time O(n), space O(1)

console.log(factorial(5));
