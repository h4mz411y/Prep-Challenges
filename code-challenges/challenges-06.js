'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max;
    let startPoint = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[startPoint]) {
        startPoint = i;
      }else {
        continue;
      }  
    }
    max = arr[startPoint];
    return max;
  };
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81    const element = array[i];
//  

const sumNums = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
        if (typeof arr[i] === "number"){
            sum = sum + arr [i];
         
    }
    return sum;
}
         
            
        
        
   

    




// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#'] const element = array[i];

const reverseArray = (arr) => {
    // write your code here
    const newArr = [];
    let counter = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr[counter] = arr[i];
      counter++;
    }
    return newArr;
  };
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};