"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78


const reverseArray = (arr) => {
  let arr2=[];
  for(let i =arr.length-1;i>=0;i--)
  {
    arr2.push(arr[i]);

  }
  return arr2;
};
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81


const arrInc = (arr) => {
  const result = [];
  let x=0;
  for(let i=0; x < arr.length;x++)
  {
x=arr[i]+10;
result.push(x);
  }
  return result;
};
// -------------------------------------------------------------------------------------------------------
