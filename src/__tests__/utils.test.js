// Your tests here
// src/__tests__/utils.test.js
const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('should return true for a palindrome word "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome word "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for a palindrome word with mixed case "RaceCar"', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow('Input must only contain alphabetic characters');
  });

  test('should throw an error for input that is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
