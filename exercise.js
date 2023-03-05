/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */
  let input = encoded.split("");

  let output = "";
  let a = "A".charCodeAt(0);

  for (var i = 0; i < input.length; i++) {
    let c = input[i].charCodeAt(0);

    if (c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0)) {
      c = ((c - a + 13) % 26) + a;
    } else if (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) {
      c = ((c - a + 13) % 26) + a;
    }

    output += String.fromCharCode(c);
  }

  return output;

  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
