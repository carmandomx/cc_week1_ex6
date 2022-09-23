/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */

  const upperCaseAlpha = [
    0,
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

  const lowerCaseAlpha = [
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let pivot = 13;

  let arrCode = encoded.split("");

  arrCode.forEach((element, index) => {
    if (upperCaseAlpha.includes(element)) {
      let letterU = upperCaseAlpha.indexOf(element);
      if (letterU + pivot < upperCaseAlpha.length) {
        arrCode[index] = upperCaseAlpha[letterU + pivot];
      } else {
        arrCode[index] = upperCaseAlpha[letterU - pivot];
      }
    }

    if (lowerCaseAlpha.includes(element)) {
      let letterL = lowerCaseAlpha.indexOf(element);
      if (letterL + pivot < lowerCaseAlpha.length) {
        arrCode[index] = lowerCaseAlpha[letterL + pivot];
      } else {
        arrCode[index] = lowerCaseAlpha[letterL - pivot];
      }
    }
  });
  encoded = arrCode.join("").toUpperCase();
  return encoded;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
