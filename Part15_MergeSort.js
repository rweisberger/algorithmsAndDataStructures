// Intermediate sorting algorithms
// the goal is not to write this all on your own, it is to be able to understand teh code. These sorting algorithms were written by 
// academics and are not easy to write. They are much more efficient with larger data sets

// Works by decomposing an array into smaller arrays. We split the array in half until we have 1 or 0 element arrays
// the smaller arrays are compared and merged, 

// First, lets merge sorted arrays.
const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        // console.log(arr1[i])
        if( arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    // we need to add in any leftover values, which we will do with a while loop
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++
    }
   
    console.log(result)
    return result
}

// merge([1,10,50], [2,14,99,100])

// part 2 we need to break the array into two slices. We are going to do this recursively

const divideArray = (arr) => {
    if(arr.length <= 1) return arr
    
    let first = divideArray(arr.slice(0, Math.floor(arr.length/2)));
    let second = divideArray(arr.slice(Math.floor(arr.length/2), arr.length));
    return merge(first,second)
}
divideArray([9,4,64,76,2,342,6])