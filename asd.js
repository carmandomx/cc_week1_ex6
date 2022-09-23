/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */

  for (let i = 0; i < encoded.length; i++) {
    const asciiValue = encoded.charCodeAt(i);

    let char;
    if (asciiValue > 96 && asciiValue < 123) {
      if (asciiValue + 13 > 122) {
        const extra = asciiValue + 13 - 122;
        char = String.fromCharCode(96 + extra);
      } else {
        char = String.fromCharCode(asciiValue + 13);
      }
      encoded = encoded.substring(0, i) + char + encoded.substring(i + 1);
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

console.log(cypher('JRYPBZR GB VGX!'));
