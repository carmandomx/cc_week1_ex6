/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */
  //Create an array with the alphabet that we will use for rotate the input string
  const alphabeth = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //Create a variable for storage the rotate string and return it
  let acc = "";
  //Using for loop to iterate the input string
  for (let i = 0; i < encoded.length; i++) {
    //Create a variable for check that the input in position i is a letter
    const isALetter = alphabeth.includes(encoded[i]);
    // if isALetter is true the string will rotate
    if (isALetter === true) {
      //Create a new variable for check the index in the alphabet string
      const charIndex = alphabeth.findIndex((x) => x === encoded[i]);
      //Operation for rotate the input index 13 positions
      acc += alphabeth[charIndex + 13] || alphabeth[charIndex - 13];
      //if isALetter is false, only added the input i
    } else {
      acc += encoded[i];
    }
  }

  return acc;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
