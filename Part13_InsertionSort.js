// gradually sort form the left side of the arr

// i am not actually inserting- I am swapping. 
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        console.log('i', arr[i])
        for(let j = 0; j < i; j++){
            console.log('j', arr[j])
            if(arr[i] < arr[j]){
            console.log('inserting', arr[i], arr[j])
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }          
        }
    }  
    console.log(arr)
    return arr
}
// this is Colt's solution for comparison
// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

insertionSort([5,34,0,80,899,4,9,12])