// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2){
    // lets use counter objects
    num1 = num1.toString();
    num2 = num2.toString();

    counterNum1 = {};
    counterNum2 = {};

    if (num1.length !== num2.length) {
        console.log(false);
        return false
    }
    console.log(num1, num2)
    for(let i = 0; i < num1.length; i++){
        counterNum1[num1[i]] ? (counterNum1[num1[i]] += 1) : (counterNum1[num1[i]] = 1)
    }
    for(let i = 0; i < num2.length; i++){
        counterNum2[num2[i]] ? (counterNum2[num2[i]] += 1) : (counterNum2[num2[i]] = 1)
    }
        console.log(counterNum1, counterNum2)
    
    for (let item in counterNum1){
        if(!(item in counterNum2)){
            console.log('2nd if', false);
            return false
        }
        if(counterNum1[item] !== counterNum2[item]){
            console.log('3rd if', false);
            return false 
        }
    }
    console.log(true);
    return true
}

// sameFrequency(12278, 17281)


// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in.  You can solve this using the 
// frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b',  'c', 'a') // true 
// Restrictions:

// Time - O(n)

// solve with counter object
// function areThereDuplicates(...input) {
//     let counter = {};

//     for(let i = 0; i < input.length; i++){
//         counter[input[i]] ? counter[input[i]] += 1 : counter[input[i]] = 1;
//     }

//     for(let key in counter) {
//         if(counter[key] > 1){
//             console.log(true)
//             return true
//         }
//     }
//     console.log(false)
//     return false
// }

// now lets try multiple pointers
function areThereDuplicates(...input) {
    input.sort();
    console.log(input)
    let i = 0; 

    for (let j = 1; j < input.length; j++){
        console.log(input[i], input[j])
        if(input[i] === input[j]){
            console.log(true);
            return true
        }
        i++
    }
    console.log(false)
    return false
}

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, ave){
    // one pair is enough to return true. We can use multiple pointers to point to position n and look at the 
    // n + 1. 

    let i = 0;
    let j = Math.floor(arr.length/2);



    while (j < arr.length && j > 0) {
        console.log(arr[i], j, arr[j]);
        if((arr[i] + arr[j]) === (2 * ave)){
            console.log("if", true);
            return true
        } else if ((arr[i] + arr[j]) < (2 * ave)){
            console.log("if else");
            j++
        } else{
            console.log("else");
            j--
        }
        console.log('increment i')
        i++
    }
    console.log(false);
    return false

}

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters 
// in the first string form a subsequence of the characters in the second string. In other words, the 
// function should check whether the characters in the first string appear somewhere in the second 
// string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// udemy is telling me this solution below is incorrect - "expected false to be true"
function isSubsequence(str1, str2){
    //  I'm going to assume that a sequence of two or more matching letters is fine
    let i = 0;

    while (i <= str1.length - 2){
        for(let j = 0; j<= str2.length - 2; j++){
            console.log(str1.slice(i, i+2), str2.slice(j, j+2))
            if(str1.slice(i, i+2) === str2.slice(j, j+2)){
                console.log(true)
                return true
            }
        }
        i++; 
    }
    console.log(false);
    return false
}

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the 
// maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first 
// example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3)  // null

function maxSubarraySum(arr, num){
    if(num > arr.length){
        console.log(null);
        return null
    }

    let max = 0; 

    for(let i = 0; i < num; i ++){
        console.log("add to max", arr[i]);
         max += arr[i];
    }
    console.log('first max', max);

    let temp = max;

    for(let j = num; j < arr.length; j++){
        console.log("change -", arr[j - num],'+', arr[j]);
        temp = temp - arr[j - num] + arr[j];
        console.log('temp',temp);
        if(temp > max){
            max = temp;
        }
    }
    console.log('final', max);
    return max
}

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the 
// integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLen(arr, num){

    // I had sorted the array, but that is not correct. I need to find a contiguous array
    
    let sum = 0;
    console.log('sum', sum, 'int', num);
    for(let i=0; i < arr.length; i++){
        if(sum >= num){
            console.log('final sum', sum,i);
            let count = i; 
            console.log(count);
            return count
        } else {
           console.log('in else');
            sum += arr[i];
            console.log('adding', arr[i], 'i', i);
        }
    }
    console.log(0);
    return 0

}