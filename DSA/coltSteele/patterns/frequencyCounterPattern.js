// writing a function that will take in a array create key and objects then
//it will find those keys and increase their value
//end comapring key's in each object

// first approach -> creating two objects if key in the objects are of same value then true else false
// const objFreq = (arr1, arr2) => {
//   let obj = {};
//   let obj2 = {};

//   for (let i = 0; i < arr1.length; i++) {
//     let squareNum = arr1[i] * arr1[i];
//     if (!obj[squareNum]) {
//       obj[squareNum] = obj[squareNum] = 1;
//     } else obj[squareNum] = obj[squareNum] + 1;
//   }
//   for (let k = 0; k < arr2.length; k++) {
//     if (!obj2[arr2[k]]) {
//       obj2[arr2[k]] = obj2[arr2[k]] = 1;
//     } else obj2[arr2[k]] = obj2[arr2[k]] + 1;
//   }
//   for (key in obj) {
//     if (obj[key] !== obj2[key]) return false;
//   }
//   return true;

//   //   return { obj, obj2 };
// };

// console.log(objFreq([1, 2, 3, 1], [1, 4, 1, 9])); // true
// console.log(objFreq([1, 2, 3, 2], [1, 4, 1, 9])); // false
// console.log(objFreq([1, 2, 3, 1], [1, 4, 1, 9])); // true
// console.log(objFreq([1, 2, 3], [1, 4, 1, 9])); // false

// second approach
// create one obj put the keys of squared in the object while iterating second obj +1 if repeated key;
// then deduct the keys while iterating second object;
// then iterate the keys if any key in the object is not zero return false

// third approach
// iterate through first array if the corresponding value is found in second array delete it
// if the value is not found return false
// if at the end of all iteration arr2 is empty then return true
