function hasTargetSum(array, target) {
  // Write your algorithm here

  // Loop over every element in the array and sum pairs
  for (i=0; i<array.length; i++){ //loop over every element

    // Sum pairs
    // // declare a variable for the next index and loop over them
    for (j = i+1; j !== array.length; j++){ 
      let sum = array[i] + array[j]; //sum the pairs and assign to variable
      if (sum === target) return true; //return true if sum is equal to target
    }

  }
  return false; //return false if there is no matching sum
}
/* 
  Write the Big O time complexity of your function here
  Quadratic time
  O(n^2)
*/ 

/* 
  Add your pseudocode here
  declare function that takes array and target as inputs:
    start for loop for every element in array
      start loop for every next element
        sum current element and next element
        return true if sum equals target
    return false if there is no match
*/

/*
  Add written explanation of your solution here
  I need a function that takes in an array and target as inputs.
  The function then sums pairs of the array elements.
  It should return true if any sum of pairs matches the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;