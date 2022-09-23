/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */
  /*We need an array for reference, this will be our "dictionary" for search values per positions and comparate them with our encoded string. One for upper cases and other one for lower cases. */
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
  //Next, we assign a value to make the jump in our code. This time it will be number 13.
  let pivot = 13;

  //Validations for only existing values (true) and string values. For falsy conditions we send a message.
  if (!encoded) {
    return "Please write a string for encode";
  }
  if (typeof encoded !== "string") {
    return "Only string values for encode";
  }

  /* If all is fine, we split our encoded array to individually access values. Re-asign the value to "arrCode" array.*/
  let arrCode = encoded.split("");

  //per each element in array "arrCode" (using forEach) we access to elements and index.
  arrCode.forEach((element, index) => {
    //1.- if element (arrCode) exist in dictionary of upper cases, then...
    if (upperCaseAlpha.includes(element)) {
      /*assign a value for the element id index that matches between arrCode and the dictionary (upperCaseAlpha), this will be the new value for the value index of arrCode.*/
      let letterU = upperCaseAlpha.indexOf(element);
      //Here is for cases that value it's less that 26 or equal characters (dictionary length)
      if (letterU + pivot < upperCaseAlpha.length) {
        /*For less than 26 (array length) we change the value of the index in "arrCode" to the index "upperCaseAlpha" (alphabet) which is the previous value in the dictionary array (letterU) + pivot. We reassign the value of the index value in "arrCode" to the new encoded value of "upperCaseAlpha".*/
        arrCode[index] = upperCaseAlpha[letterU + pivot];
      } else {
        /*otherwise we just need to reassign the value of arrCode (per index) to the dictionary array value, how to do a new loop from value 1 ("A").*/
        arrCode[index] = upperCaseAlpha[letterU - pivot];
      }
    }
    //2.- if element (arrCode) exist in dictionary of lower cases, then...
    if (lowerCaseAlpha.includes(element)) {
      /*assign a value for the element id index that matches between arrCode and the dictionary (lowerCaseAlpha), this will be the new value for the value index of arrCode.*/
      let letterL = lowerCaseAlpha.indexOf(element);
      //Here is for cases that value it's less o equal that 26 characters (dictionary length)
      if (letterL + pivot < lowerCaseAlpha.length) {
        /*For less than 26 (array length) we change the value of the index in "arrCode" to the index "lowerCaseAlpha" (alphabet) which is the previous value in the dictionary array (letterL) + pivot. We reassign the value of the index value in "arrCode" to the new encoded value of "lowerCaseAlpha".*/
        arrCode[index] = lowerCaseAlpha[letterL + pivot];
      } else {
        /*otherwise we just need to reassign the value of arrCode (per index) to the dictionary array value, how to do a new loop from value 1 ("a").*/
        arrCode[index] = lowerCaseAlpha[letterL - pivot];
      }
    }
    /*here we will have obtained the new assigned values ​​for each value of the array ""arrCode*/
  });

  /*We reassign our input value to bind arrCode as a string value. Finally, we return the value of the string.*/
  //Note: if we want we can return the string in uppercase or lowercase.
  encoded = arrCode.join("");
  return encoded;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
