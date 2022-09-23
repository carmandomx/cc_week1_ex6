/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */

  /* for loop that goes through the entire string */
  for (let i = 0; i < encoded.length; i++) {
    /* Setting the current character ascii value in a const variable */
    const asciiValue = encoded.charCodeAt(i);

    let char;
    /* v if condition to check if the current ascii value is a letter v */
    if (asciiValue > 96 && asciiValue < 123) {
      /* if condition to check if it is needed to 'loop' through the alphabet */
      if (asciiValue + 13 > 122) {
        const extra = asciiValue + 13 - 122;
        /* Saving the character that will replace the current one */
        char = String.fromCharCode(96 + extra);
      } else {
        /* Saving the character that will replace the current one */
        char = String.fromCharCode(asciiValue + 13);
      }
      /* Replacing the encoded character with the decoded one */
      encoded = encoded.substring(0, i) + char + encoded.substring(i + 1);

      /* v Same as above but with capital letters v */
    } else if (asciiValue > 64 && asciiValue < 91) {
      if (asciiValue + 13 > 90) {
        const extra = asciiValue + 13 - 90;
        char = String.fromCharCode(64 + extra);
      } else {
        char = String.fromCharCode(asciiValue + 13);
      }
      encoded = encoded.substring(0, i) + char + encoded.substring(i + 1);
    }
  }

  return encoded;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
