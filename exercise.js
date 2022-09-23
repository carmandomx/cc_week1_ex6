/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {

    /* Only make changes below this comment */

    // Variable which will be the output
    let decoded = "";

    // Go through each character
    for (let i = 0; i < encoded.length; i++) {

        // Get the character we will be appending
        let char = encoded[i];
        console.log(char); //j

        // The ".match()" method matches a string
        // With "/[a-z]/i" Search for a characters group from "a to z"
        // The "i" is a flag which indicate that it will be case insensitive search
        /* In a nut shield, if is a letter without matter no matter if it is uppercase or lowercase
        it will doing the shift */
        if (char.match(/[a-z]/i)) {

            /* Gets the ASCII code from the selected character in the "encoded" string
            and saves it in the "code" variable */
            // The ".charCodeAt()" method returns the Unicode of the character at a specified index in a string 
            let code = encoded.charCodeAt(i);
            console.log(code); //74

            // Uppercase letters case
            /* This condition matches if the ASCII code is between 65 and 90 
            this is why the uppercase are in this range */
            if (code >= 65 && code <= 90) {

                // Here is where does the shift
                // The "String.fromCharCode()"" method converts Unicode values to characters
                char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
            }

            // Lowercase letters case
            /* This condition matches if the ASCII code is between 97 and 122
            this is why the loweercase are in this range */
            else if (code >= 97 && code <= 122) {

                // Here is where does the shift
                // The "String.fromCharCode()"" method converts Unicode values to characters
                char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
            }
        }

        // Appending
        decoded += char;
    }

    // All done!
    return decoded;

    return encoded;
    /* Only make changes above this comment */
}

console.log(cypher("JRYPBZR GB VGX!"));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;