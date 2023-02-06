// This means we divide a data set into smaller chunks and repeat a process with the subsets.
// It drastically decreases complexity.

// binary search example. this accepts a sorted array and a number. 
// we return the index of the number in the array of -1 if it not there. 

const binarySearch = (arr, n) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle]

        if (arr[middle] < val) {
            min = middle + 1;
        } 
        else if (arr[middle] > val){
            max = middle - 1;
        } else {
            return middle
        }
        
    }
}

binarySearch([1,3,4,5,6,8,9,12,35,56],12)