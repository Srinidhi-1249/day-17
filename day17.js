function hasUniqueCharacters(str) {
    // Create an object to keep track of characters seen so far
    const charSeen = {};
  
    // Loop through each character in the string
    for (const char of str) {
      // If the character is already in the object, it's not unique
      if (charSeen[char]) {
        return false;
      }
      // Mark the character as seen
      charSeen[char] = true;
    }
  
    // All characters are unique
    return true;
  }
  
  console.log(hasUniqueCharacters("abcdefg")); // Output: true
  console.log(hasUniqueCharacters("hello"));   // Output: false
  