// src/utils.js

function isPalindrome(word) {
  // Check if the input is a string
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Return false if the string is empty
  if (word === "") {
    return false;
  }

  // Check if the word contains only alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must only contain alphabetic characters");
  }

  // Convert the word to lowercase for case-insensitive comparison
  const lowercasedWord = word.toLowerCase();

  // Check if the word is equal to its reverse
  return lowercasedWord === lowercasedWord.split("").reverse().join("");
}

module.exports = { isPalindrome };
