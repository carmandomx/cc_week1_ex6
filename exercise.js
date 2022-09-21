/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

const { assertDirective } = require('graphql');

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */

    // ascii code of A 65, Z 90, a 97, z 122
    console.log(String.fromCharCode(122 - 13));

    return encoded
        .split('') // transform string into an Array
        .map((l) => {
            // iterate through each letter
            if (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122 - 13) {
                // if the letter goes from a - m (because after m the letters have to start again from a)
                return String.fromCharCode(l.charCodeAt(0) + 13); // return the letter shifted 13 ascii codes
            } else if (l.charCodeAt(0) > 122 - 13) {
                // when the letter is past m
                let complement = Math.abs(122 - 12 - l.charCodeAt(0)); // calculate how many places from a we will shift the letter
                return String.fromCharCode(97 + complement); // return the letter shifted the calculated spaces
            } else if (l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 90 - 13) {
                // if the letter is from A to M
                return String.fromCharCode(l.charCodeAt(0) + 13); // return the letter shifted 13 ascii codes
            } else if (l.charCodeAt(0) > 90 - 13) {
                // if the letter is past M
                let complement = Math.abs(90 - 12 - l.charCodeAt(0)); // Calculate how many spaces past A we will shift the letter
                return String.fromCharCode(65 + complement); // return the letter shifted the calculated spaces
            }
            return l; // if the character is not in the range of A - Z, a - z return the character as normal
        })
        .join(''); // convert the array back into a string
    /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
