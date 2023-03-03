/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let shift = 13;
  // Lopp through the array
  for (let i = 0; i < encoded.length; i++) {
    // Save each letter of the encoded string in a variable
    const char = encoded[i].toUpperCase();
    // Get the index of that letter
    const index = alphabet.indexOf(char);
    let newChar = char;

    // If character exists in string (indexOf method returns -1 when the element is not in the array)
    if (index !== -1) {
      const newIndex = (index + shift) % alphabet.length;
      newChar = alphabet[newIndex];
    }

    result += newChar;
  }

  return result;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
