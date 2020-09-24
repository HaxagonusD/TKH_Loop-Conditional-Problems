// ***1) Given the array,
// Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?
//             2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.
//  4) Now what if the array was
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this?
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
const findLongestStringIndex = (someArray) => {
  let longestWordIndex = 0;
  someArray.forEach((word, index, array) => {
    if (word.length > array[longestWordIndex].length) {
      longestWordIndex = index;
    }
  });
  return longestWordIndex;
};

console.log(findLongestStringIndex(lunchArray));
console.log(lunchArray[findLongestStringIndex(lunchArray)]);
