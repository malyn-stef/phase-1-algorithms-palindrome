function isPalindrome(word) {
  wordArray = []
  wordArray2 = []
  for (i = 0; i < word.length; i++) {
    letter = word[i]
    wordArray.push(letter)
    wordArray2.push(letter)

  }
  wordArray2.reverse()
  if (wordArray.toString() === wordArray2.toString()) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
/* create function and take in a word
    iterate over each letter in the word using length
    save each letter in array,
    reverse array
    if words === the same
      return true
    else
      return false
/*
  Add written explanation of your solution here
*/
// Starting with the word, I iterate over each letter to generate a new array. Using the new array, I
// use .reverse() to reverse the array and check it against the original array. need to turn array back to string, while strings are seperated by commas, the function still works. Return true if the arrays match
// return false if they do not. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
