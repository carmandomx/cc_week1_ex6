/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let abc = {
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M",
      };
    
     
      let decoded = "";

      for (let i = 0; i < encoded.length; i++) {
        decoded = decoded +abc[encoded[i]];
      }
    
      //return the decoded
      return decoded 


 /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;