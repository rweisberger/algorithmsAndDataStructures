// What is an algorithm? 
// Its a set of steps to accomplish a task

// How do we get better at interview problems?
// 1. devise a plan
// 2. master common patterns

// think about potential issues - what if the person only has one input in the sum problem below? Should we add a default?
const add = (a, b) => {
    b ? b : b = 0;
    console.log(a + b);
    return a + b
}

// add(7);

// write a function that counts the number of times each character appears in a string

// const countChar = (str) => {
//     let response = {};
//     let simplified = str.toLowerCase().replace(/[ ,.;:'!@#|?/$\\%^&*(_+)`~=]/g, "");
    
//     for(i=0; i < simplified.length; i++){
//         let char = simplified[i];
//         if(response[char] > 0){
//             response[char] += 1;
//         } else { 
//             response[char] = 1;
//         }
//     }
//         console.log(response); 
// };

const countChar = (str) => {
    let response = {};
    str = str.toLowerCase();

    for (let char of str){
        if(/[a-z0-9]/.test(char)){
            // if(response[char] > 0){
            //     response[char] += 1;
            // } else { 
            //     response[char] = 1;
            // }
            response[char] ? response[char]++ : response[char] = 1
        }
    }
        console.log(response); 
};

// countChar('Rachel We`+=isber&*\(ger');

// write a function called same that accepts 2 arrays. 
// the function should return true if every value in the 1st array
// has a corresponding value in the second array. the frequency of the values
// must be the same

// my try at this problem
// const same = (arr1, arr2) => {
//     let result;

//     if(arr1.length != arr2.length){
//         result = false;         
//         console.log("in fist if", result)
//         return result
//     } else {
//         for(let i in arr1){
//             let squared = arr1[i] * arr1[i];
//             let arr1filtered = arr1.filter(num => num === arr1[i]);
//             let arr2filtered = arr2.filter(num => num === squared);
//             if (arr1filtered.length !== arr2filtered.length){
//                 console.log('here')
//                 result = false;
//                 break
//             } else { 
//                 result = true;
//             }
//         }
//     }
//     console.log(result);
//     return result
// }

//  Cole suggests using counter objects
const same = (arr1, arr2) => {
    let result;

    if(arr1.length !== arr2.length){
        result = false
        console.log(result)
        return result
    }

    let counter1 = {};
    let counter2 = {};

    for(let num in arr1){
        counter1[arr1[num]] ? counter1[arr1[num]] += 1 : counter1[arr1[num]] = 1
    }
    for(let num in arr2){
        counter2[arr2[num]] ? counter2[arr2[num]] += 1 : counter2[arr2[num]] = 1
    }

    for(let key in counter1){
      if(!(key ** 2 in counter2)){
        result = false; 
        console.log(result)
        return result
      }
        if(counter2[key ** 2] !== counter1[key]){
        result = false
        console.log(result)
        return result
      }
    }

    result = true
    console.log(result)
}
// same([1,2,3, 3], [1,4,9, 9])

// need to square the numbers in arr1 and check that the result is in  
// arr2.  

// const validAnagram = (str1, str2) => {
//     // anagram is same letters in any combination. we need to count the letters and     
//     // their frequency in each string and verify that they are the same. 
    
//     // if the string are different lengths, it cannot be an anagram
//     // i am using 'result' and logging it so that I can see the results on the console. 
//     // Otherwise, i should just return true or false directly
//     let result; 

//     // in an interview, you should always check for edge cases- are there upper and lowercase?
//     // can there by spaces?

//     if(str1.length !== str2.length){
//         result = false;
//         console.log(result);
//         return result
//     }
//     str1Counter = {};
//     str2Counter = {};

//     for(let i in str1){
//         str1Counter[str1[i]] ? str1Counter[str1[i]] += 1 : str1Counter[str1[i]] = 1
//     }
//     for(let i in str2){
//         str2Counter[str2[i]] ? str2Counter[str2[i]] += 1 : str2Counter[str2[i]] = 1
//     }
//     // console.log(str1Counter, str2Counter)
    
//     for (let key in str1Counter) {
//         if(!(key in str2Counter)){
//             result = false;
//             console.log(result);
//             return result
//         }
//         // console.log(str1Counter[key], str2Counter[key])
//         if(str1Counter[key] !== str2Counter[key]){
//             result = false;
//             console.log(result);
//             return result
//         }
//     }
// result = true;
// console.log(result)
// return result

// }
// validAnagram('age', 'eg')

// Make a valid anagram solution with only 1 counter
const validAnagram = (str1, str2) => {
    let result; 

    // initial check - if strings have different lengths then they cannot be anagrams
    if(str1.length !== str2.length){
        result = false;
        console.log(result);
        return false
    }
    
    // now we will create a letter counter object for te first string
    let lettersCounter = {};

    for(let i in str1){
        console.log(str1[i])
        lettersCounter[str1[i]] ? lettersCounter[str1[i]] += 1 : lettersCounter[str1[i]] = 1
    }
    console.log(lettersCounter)
// check this against cole's result. I chose a slightly different version
    for(let i in str2){
        letter = str2[i]
        if(lettersCounter[letter]){
            lettersCounter[letter] -= 1
        } else {
            console.log(letter , 'not found in', lettersCounter={})
            result = false;
            console.log(result);
            return result
        }
    }
    result = true;
    console.log(result);
}

validAnagram('anagram', 'gramang');

const inputCubed = (arr1, arr2) =>{

// This will take two arrays. The function should return true ir arr1 is an array 
// of numbers and arr2 is an array the at contains the numbers in arr1 cubed. The order doesn't matter
    let result;

    if(arr1.length !== arr2.length) {
        result = false;
        console.log('if1', result);
        return result
    }
    let counter1 = {};
    let counter2 = {};

    for(let i in arr1) {
        counter1[arr1[i]] ? counter1[arr1[i]] += 1 : counter1[arr1[i]] = 1
    }
    for(let i in arr2) {
        counter2[arr2[i]] ? counter2[arr2[i]] += 1 : counter2[arr2[i]] = 1
    }

    for(let key in counter1){
        if(!((key ** 3) in counter2)) {
            result = false;
            console.log('if2', result);
            return result;
        }
        if(counter1[key] !== counter2[key ** 3]){
            result = false;
            console.log('if3', result);
            return result;
        }  
    }
    result = true;
    console.log(result);
    return result; 
}

// inputCubed([1,5,3,4,3], [1, 27, 27, 64, 125])