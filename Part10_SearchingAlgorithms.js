// linear search O(n)

function linearSearch(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            console.log('index:', i);
            return i
        }
    }
    console.log(-1);
    return -1
}

// linearSearch([1,3,5,7,9,2], 12);

// binary search- the information must be sorted

// my attempt
// function binarySearch(arr, n){
//     let h = 0;    
//     let j = arr.length;
//         while((h + 1)< j){
//             let i = Math.floor(h+(j-h)/2);
//             console.log(h,i,j)
//             if(n === arr[i]){
//                 console.log(i);
//                 return i;
//             } else if (arr[i] < n){
//                 h = i;
//             } else {
//                 j = i 
//             }
//         }
    
//     return -1
//     }
    
// with guidance
function binarySearch(arr, n){
    let h = 0;    
    let j = arr.length - 1;
    let i = Math.floor((h + j)/2);
        console.log(h,i,j)
    
        while(arr[i] !== n  && h < j){
            console.log(h,i,j)
            if (arr[i] < n){
                h = i + 1;
            } else {
                j = i - 1
            }
            i = Math.floor((h + j)/2)
        }
    
    return arr[i] === n ? i : -1
    }
    
    binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 13)
                // h            i                 j
    
// String Search- find a smaller string in a larger string 

// naive string search 
// if we are looking for a single character, then linear is our only method
// if we are looking for a sequence, it is a bit more complex

// my attempt- not successful 
function stringSearch(str, seq){
    let count = 0; 
    for(let i = 0; i < str.length; i++){
        console.log(string[i]);
        for(let j = 0; j < seq.length; j++){
            if(seq[j] !== str[i]) break;
            else if(seq[j] !== str[i]){
                count += 1
            } 
            return count
        }
        
    }
}
// Colt's solution
function stringSearch(str, seq){
    let count = 0; 

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < seq.length; j++){
            if(seq[j] !== str[i+j]) break;
            if(j === seq.length -1) count += 1;
        }
    }
    return count
}

stringSearch('faster terry', 'ter');

stringSearch('faster', 'ter');