// This means we are pulling a portion of the input to meet some criterion

// write a function called maxSubarraySum which takes an array of integers 
// and return and a number(n). It will find the continuous section of the 
// array with length n that has the highest sum

// const maxSubarraySum = (arr, n) => {
//     let info = []
//     let result;

//     if(arr.length ===0){
//         result = null
//     } else {
//         for(let i = 0; i <= (arr.length-n); i++){
//             let subArray = arr.slice(i, i+n);
//             console.log(subArray);
//             let sum = subArray.reduce((total, num) => total + num);
//             // console.log(sum);
//             info.push(sum);
//         }    
//         let sorted = info.sort((a, b)=> b-a);
//         result= sorted[0];
//     }
//     console.log(result);
// }

// the solution above works, but can be made more efficient. Below is Cole's example 
const maxSubarraySum = (arr, n) => {
    let max = 0;
    let temp = 0;
    // manage edge cases
    if(arr.length < n){
        console.log(null)
        return null
    }
    // find the total of the n digits in the array 
    for(let i = 0; i < n; i++){
        max += arr[i];
    }
    // initially the first total is th max and is also the temp value
    temp = max;
    // now we are going to slide through the array and make a new total 
    // by subtracting the first number and adding the second number
    // this is exactly how I would do this problem by hand if the array
    // and n were long- it is much more efficient
    for(let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i];
        // the line below could also be an if statement
        max = Math.max(max, temp);
    }
    console.log(max);
    return max

    // 
}

maxSubarraySum([1,1003,4,13,600,9,1], 4)

const lengthOfLongestSubstring = function(s) {
    // not the right idea- the substring could be in the middle of the input
    //     counter={};
    //     console.log(s);
    // for(let i = 0; i < s.length; i++){
    //     let char = s[i];
    //     console.log(char);
        
    //     counter[char] ? counter[char].push(i) : counter[char] = [i]}
    //     if(counter[char] === 2){
    //         return s.slice(0,i)
    //     }
    
    // };
    // console.log(counter)
    

    if(s === null || s.length === 0) return 0;

    let i= 0;
    let j= 0;
    let max = 0;

    const unique = new Set();
    
    while(i < s.length){
        let char = s[i];
        console.log(char);

        if(!unique.has(char)){
            unique.add(char);
            max = Math.max(max, unique.size);
            i++;
            console.log(unique);
        } else{
            unique.delete(s[j]);
            j++;
        }          
    }
    return max              
};
        
lengthOfLongestSubstring("aassddd");