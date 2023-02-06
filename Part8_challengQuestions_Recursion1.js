// power
// Write a function called power which accepts a base and an exponent. The function should return the
// power of the base to the exponent. This function should mimic the functionality of Math.pow()  -
// do not worry about negative bases and exponents.

function power(base, exp){
    if(exp === 0) return 1;
    if(exp === 1) return base;
    return  base * power(base, exp-1);
}
// power(2,4)

// factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A
// factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! )
// is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}

// factorial(4)

// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if(arr.length === 0) return 1;
    console.log(arr);
    return arr[0] * arr.slice(1)
}

// productOfArray([3,2,4,5])

// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number
// passed to the function

function recursiveRange(num){
    // can this be a negative number?
    if(num === 0)return 0;

    return num + recursiveRange(num > 0 ? num - 1 : num + 1);
}

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and
// 1, and where every number thereafter is equal to the sum of the previous two numbers.

// clearly, the solution below is not recursive
function fib(num){
    let arr = [1, 1];
        if(num === 1 || num === 2){
            console.log(1);
            return 1;
        } else {
            for(let i = 1; i <= num - 2; i++){
                arr.push(arr[i - 1] + arr[i]);
            }
            console.log(arr[arr.length - 1]);
            return   arr[arr.length - 1];
        }
}

// fib(30);
// numbers 1, 1, 2, 3, 5, 8,
// what must repeat? adding the two previous numbers

function fib(num){
   if(num <= 2) return 1;
   return fib(num-1) + fib(num-2);
}
function fib(num){
    return num <= 2 ? 1 : fib(num-1) + fib(num-2);
 }
fib(10)