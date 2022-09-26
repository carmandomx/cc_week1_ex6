/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    // Declare variable for store decoded string
    let decoded = '';
    // Received string is divided in a letters array
    // Then every letter is evaluated with a foreach
    encoded.split('').forEach(letter => {
    // every single letter is converted to its ascii code
    const letterAscii = letter.charCodeAt(0);
    // Check if letter is bewtween the values 65 and 90 of the ascii code
    // this letters are the A and Z, both mayus
    if( letterAscii > 64 && letterAscii <91)
    { 
        // Declare variable to convert ascii code to a letter
        let asciiToChar = 0;
        // Evaluate if the letter plus 13 is a value higher that the Z mayus character, it is necessary to substract 13 and aiign this value to the variable "asciiToChar"
        // Otherwise, "asciiToChar" will we the letter evaluated plus 13
        letterAscii + 13 > 90 ? asciiToChar = letterAscii - 13 : asciiToChar = letterAscii + 13;
        // add to the decoded string the value(asciiCode) of "asciiTochar" converted to the letter value
        decoded += String.fromCharCode(asciiToChar);
    } else {
        // if the character is not an alphabet letter then we just add it to the decoded string
        decoded += letter;
    }
    });
    // return the decoded string
    encoded = decoded;
    return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;