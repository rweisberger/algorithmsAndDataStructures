// similar to bubble sort ut moves small values into position first

// compare all nums and find min in set and move the min to the front. now start again, remembering that the first position is already solidified

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let min = arr[i];
        let index;
        // console.log("starting", min)
        // console.log('i', arr[i])
        for(let j = i + 1; j < arr.length; j++){
            // console.log('j', arr[j])
            if(arr[j] < arr[i]){
                min = arr[j];
                index = j; 
            } 
        }    
        // console.log("pass", i, min)
            if(index){
                // check for es6 swap logic
                console.log('swapping')
                let temp = arr[i]
                arr[i] = min; 
                arr[index]= temp;
            } 
    }
    console.log('arr', arr);
    return arr
}

selectionSort([5,3,7,8,9,1,12])