//Problem: Give a natural number 'n' if the number is prime or not

//A prime numbr is a natural numer  greater than 1 that is not a product of tow smaller natural number

//isPrime(5) = true (1*5, 5*1)
//isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n){
    if(n<2){
        return false
    }
    for(let i =2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
} //time o(n)

//Optimize primality Test
//=> Integers arger than square root do not need to be checked because , whenever 'n=a*b' , one of two factors 'a' and ' 'b' is less than or equal to the square root of n

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
