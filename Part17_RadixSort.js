// To implement this sorting method, we need some helper functions

// First, we will look at get the digits starting with the right

// getDigit(12435, 0) returns 5
// getDigit(12435, 12435) returns 3

// To implement this sorting method, we need some helper functions

// First, we will look at get the digits starting with the right

// getDigit(12435, 0) returns 5
// getDigit(12435, 12435) returns 3


const getDigit = (num, place) => {               
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;  
}   
    
// getDigit(12435, 1);

// we also need to know how many digits are in the numbers- specifically the mav number of digits

// my response
const digitCount = (num) => {
    if (num === 0) return 1
    return Math.abs(num).toString().length
}

// Cole's response from 
// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(math.log10(Math.abs(num))) + 1;
// }

digitCount(10)

// now we need to write a helper funcrtion that takes a list of numbers and tells us which one had the most digits

const mostDigits = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        // if( digitCount(arr[i]) > max){
        //     max = digitCount(arr[i]) 
        // }
        // instead of having an if block, Cole uses Math.max
        max= Math.max(max, digitCount(arr[i]))
    }
    return max;
}

mostDigits([0,45,876,1345,6789,456,122,98,8765])

const radixSort = (arr) => {
    let max = mostDigits(arr);
    console.log(max)
    
    for(let i = 0; i < max; i ++){
        // let buckets = [];
        // for(let j = 0; j < 10; j++){
        //     buckets.push([])
        // }
        // Cole's easier method
        let buckets = Array.from({length: 10}, () => []);
        
        for(let j =0; j < arr.length; j++){
            buckets[getDigit(arr[j], i)].push(arr[j]);
        }  
        console.log(buckets);
        arr = [].concat(...buckets);
        console.log(arr)
    }   
    return arr
}
radixSort([0,45,876,1345,6789,456,122,98,8765])
