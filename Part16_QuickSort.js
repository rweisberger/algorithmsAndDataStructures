// here we are also going to divide the array until it has a length of 0 or 1. this is similar to mergeSort
// here we select one element called the pivot and find where that should go in the sorted array

// my attempt
const pivotHelper = (arr) => {
    let pivot = arr[0];
    let count = 0;
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < pivot){
            count++;
            // swap positions
            let temp = arr[count];
            arr[count]= arr[i];
            arr[i]=temp;
        } 
    }


    // let slice = arr.slice(1,count + 1)
    // slice.push(pivot)
    // console.log(slice, count)

    // SWAP the numbers!
    let temp = arr[count];
    arr[count] = pivot;
    arr[0] = temp;
    console.log('count', count, arr)

}

pivotHelper([5,2,8,4,7,1,6,3]);


// Cole's response
const pivot=(arr, start=0, end=arr.length-1) => {
    let pivot = arr[start];
    let swapIdx = start //this is the counter that will tell us where to move the pivot
 
    const swap = (arr, i,j) => {
        let temp = arr[i];
            arr[i]= arr[j];
            arr[j]=temp;
        } 
        
    for(let i = start +1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);   
            console.log("in loop", arr);
        }
    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}
pivot([4,8,2,1,5,7,6,3])
// 4 needs to be at index 3

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    // we need to call the pivot function, which returns the swapIdx and then recursively call the 
    // pivot on the subarray
    // we need a conditional so that we do not have an infinite loop
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //given the arr below, the return will be 3
        // now we need to call the function for the left and the right sides
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
quickSort([4,6,-90,9,1,2,5,3])