// what is recursion?
// a process that calls itself- a function that calls itself
// There has to be some end point

function checkForOdds(arr){
    if(arr.length === 0) return

        console.log(arr[0])
    if(arr[0] % 2 === 0){
        arr.shift();
    } else {
        console.log('odd');
        return 'odd'
    }
    console.log(arr)
    checkForOdds(arr);

}
// checkForOdds([3456,56,34,567])

function countDown(int){
    if(int === 0) return;

    console.log(int);
    int--;
    countDown(int);
}
// countDown(6)

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}
// sumRange(5)

function factorial(int){
    if(int === 1) return 1;
    return int * factorial(int - 1);
}
factorial(5)

// common problems: there is not base case or the base case is wrong
// is there is no return in the base case, there will be a stack overflow!


// Helper Method Recursion
// this means there is a function inside the main function that is called recursively

// below is an example of helper method recursion
// function collectOddValues(arr){

//     let result = [];

//     function helper(helperInput){
//         if(helperInput.length ===0) return

//         if(helperInput[0] % 2 !==0){
//             result.push(helperInput[0])
//         }
//         console.log('slice', helperInput.slice(1));
//         helper(helperInput.slice(1));
//     }

//     helper(arr);
    
//     console.log(result);
//     return result;
// }

collectOddValues([1,2,3,4,5,6,7]);

// lets solve the previous problem with pure recursion
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) return newArr;

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    console.log(newArr);
    return newArr;
}
