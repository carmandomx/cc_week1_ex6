/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */

   encoded = encoded.split(""); //convert the string to an array with each character as an element
   const aToM = 'ABCDEFGHIJKLM'.split(""); //create an array with letters from a to m
   const nToZ = 'NOPQRSTUVWXYZ'.split(""); //create an array with letters from n to o
   for(i=0; i<encoded.length; i++) { //for loop to iterate through the input string array
    if(isNaN(Number(encoded[i]))) { //this methods compare if the element in the given index is a number. If it'ts not, that means it's a letter and we proceed to replace it
        for(j=0; j<aToM.length; j++) { //inner loop to iterate through our letter arrays 
            if (encoded[i] === aToM[j]) { //if the letter goes from a to M...
                encoded[i] = nToZ[j]; //replace it with its opposite on the other array
            }
            else if (encoded[i] === nToZ[j]){ //if the letter goes from N to Z...
                encoded[i] = aToM[j];//do the same. Replace it with its opposite on the other array!
            }
        }
    }
   }
   encoded=encoded.join(""); //convert the array back to a string
   //This was hard!!!! Fun challenge tho
   return encoded;
    /* Only make changes above this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;