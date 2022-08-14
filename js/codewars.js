// function isIsogram(str) {
//   // if (str.length === 0) {
//   //   return true;
//   // }
//   let subStr = str.toLowerCase().split('');
//   for (let i = 0; i < subStr.length; i += 1) {
//     for (let y = i + 1; y < subStr.length; y += 1) {
//       if (subStr[i] === subStr[y]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('isogram'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));
// console.log(isIsogram('isIsogram'));
// console.log(isIsogram(''));

// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));

// function findNeedle(haystack) {
//   // your code here
//   for (let i = 0; i < haystack.length; i += 1) {
//     if (haystack[i] === 'needle') {
//       return `found the needle at position ${i}`;
//     }
//   }
//   return "Your function didn't return anything";
// }
// your code here
// let positives = 0;
// let negatives = 0;
// for (const iterator of input) {
//   if (iterator > 0) positives += 1;
//   if (iterator < 0) negatives += 1;
// }

// function countPositivesSumNegatives(input) {
//   if (input.length === 0 || input === null) return [];
//   let newArray = [0, 0];
//   for (const iterator of input) {
//     if (iterator > 0) newArray[0] += 1;
//     if (iterator < 0) newArray[1] += iterator;
//   }
//   return newArray;
// }
