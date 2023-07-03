 //Problem- Given a integer numer n, determine if the number is power of 2 or not. 
 //An interger is power of two an integer x such thatn n === 2^x
 //isPowerOfTwo(1) = true (2^0)
 //isPowerOfTwo(2) = true (2^1)
 //isPowerOfTwo(5) = false 

function isPowerOfTwo(n){
    if(n<1) return false
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}

const res = isPowerOfTwo(1)
const res1 = isPowerOfTwo(2)
const res2 = isPowerOfTwo(5)
console.log(res);
console.log(res1);
console.log(res2);

