// Looking though an input and looking at i and j, for example

// write a function called sumZero that takes a sorted array of integers
// the function should find the first pair to total 0. The function returns the 
// an array with both values that sum to zero or undefined if no case exists.

// const sumZero = (arr) => {

    // I understand that colt is teaching a strategy, but my initial thought is that 
    // we can loop through the array and look for the inverse of that number in the array.
    // I suppose using a find would be a fairly costly function, not necessarily better than 
    // nested loops

    // this is pretty much nested loops and has a time complexity of n^2

//     let result;
//     for(num in arr){
//         if(arr.find(item => item === -num)){
//             result = [num, -num];
//             console.log(result);
//             return
//         } 
//     }
//     result = undefined;
//     console.log(result);
// }

const sumZero = (arr) => {
    let left = 0; 
    let right = arr.length - 1;
    let result;

    while(left < right){
        let sum = arr[left] + arr[right];
        console.log('right larger');
        if(sum === 0){
            result = [arr[left], arr[right]];
            console.log(result); 
            return result;
        } else if(sum > 0){
            right--;
            console.log('in else if')
        } else {
            left++;
            console.log('in else')
        }
    }
}

// sumZero([-3,-1,0,2, 3, 4])



// this solves the problem using the a counter object and not multiple pointers
// const countUniqueValues = (arr) => {
// let counter = {};
// let result=[]; 

// for(let index in arr){
//     // let num = arr[index];
//     // console.log(num)
//     counter[arr[index]] ? counter[arr[index]] += 1 : counter[arr[index]] = 1
// }
// console.log(counter)

// for(let key in counter){
//     if(counter[key] === 1)
//     result.push(key)
//     }
//     console.log(result)
// }

// const countUniqueValues = (arr) => {
// // I misunderstood this problem I am counting how many unique values there are in the array, not finding and returning the unique values
// //  I am going to try to do this by constructing a set from the array
// let result = new Set(arr);
// console.log(result.size);
// }

const countUniqueValues = (arr) => {
    let i = 0;
    let result;

    if(arr.length === 0 ){ 
        result = 0
    }

    for(let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        } 
        // console.log(i,j);
        result = i + 1      
    }

     console.log(result)
}

countUniqueValues([1,1,1,2,3,4,5,5]);

