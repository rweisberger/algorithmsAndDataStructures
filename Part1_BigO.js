//Big O Notation
//Optimize code

//Example= write a function that add all the numbers up to and including the n. 
// This is one possible with a loop. 
// const addTo = (num) => {
    // let sum = 0;
    // for(let i = 1; i <= num; i++){
    //     sum += i
    // }
    // console.log(sum)
    // return sum
// }

// this is another possible solution using a mathematical formula
const addTo = (num) => {
    let sum = num * (num + 1) / 2;
    console.log(sum);
    return sum
}
let t1 = performance.now();
addTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2- t1)/1000} seconds.`)

// which is better?
// first are we talking speed, memory usage, readability or brevity?
// usually faster code is less readable and this make writing 
// time depends on the environment and is not precise, but can be used to make speed comparisons.

// Instead of time, we can count the number of simple operations that the computer needs to perform.
// the second function has some simple math - addition, multiplication and division
// the first function has to loop through all the assignment within the for loop and will perform them n times as it loops!
// Using this method, the second operation in much more efficient 

// Big O notation allows us to talk about how the runtime of an algorithm increases as inputs grow 

// We can also discuss the space complexity or auxillary space complexity
// Most primitives take up constant space
// Stings take up space based on their length

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}