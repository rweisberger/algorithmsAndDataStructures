// Bubble sort is not super efficient and not commonly used

function bubbleSort(arr) {
    for(let i = arr.length; i > 0 ; i--){
        for(let j = 0; j < i - 1; j++){
           if(arr[j] > arr[j+1]){
            // Swap the numbers!
               let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
           } 
        }
    }
    console.log(arr);
    return arr;
}

// bubbleSort([29, 10, 14, 30, 37, 14, 18]);

// We can optimize bubbleSOrt by making sure that we made a switch during the inner loop if no switch occurred, then we do not need to continue sorting. 

function bubbleSort(arr) {

    for(let i = arr.length; i > 0 ; i--){
        let swaps = 0;             
        console.log('run through');

        for(let j = 0; j < i - 1; j++){
            noSwaps = 0;
           if(arr[j] > arr[j+1]){
               console.log(arr[j], arr[j+1]);
            // Swap the numbers!
               let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swaps += 1;                
                console.log("inside", swaps, arr);
           } 
        }
        if(swaps === 0) break;
    }
    return arr;
}

bubbleSort([29, 10, 14, 30, 37, 14, 18]);
