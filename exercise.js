/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */

    let length = encoded.length; // Length of the string
    let i = 0; // Var - for index

    let asciiCode = 0; // Var - storage ascii value
    let coded = '';

    /* Loop through each character in the array */
    for (i = 0; i < length; i++) {
        /* Assign the numerical value of the ascii code in the position of the text string */
        asciiCode = encoded.charCodeAt(i);

        /* Condition to know if the number of the ascii code is between the range of capital letters */
        if(asciiCode >= 65 && asciiCode <= 90) {
            /* Formula of Caesar's cypher */
            asciiCode = ((asciiCode - 65 + 13) % 26) + 65;
        }
        /* Asign the result of the encoded string */
        coded += String.fromCharCode(asciiCode);

    }

    /* Return result */
    encoded = coded;
    return encoded;

    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;