/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let output = ""; //Variable to store the text.

    // I run through each character.
    for (let i = 0; i < encoded.length; i++) {
        // I get the character to be added.
        let c = encoded[i];

        // I check if it is a letter.
        if (c.match(/[a-z]/i)) {
            // Get the code.
            let code = encoded.charCodeAt(i); //Returns the Unicode of the character.
            c = String.fromCharCode(((code - 65 + 13) % 26) + 65);
        }
        // Add the character.
        output += c;
    }
    encoded = output;

    return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;