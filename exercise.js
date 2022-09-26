/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let decoded = '';                           //Create an empty string to store the decoded string
    for (i = 0; i < encoded.length; i++) {      //Create a loop to iterate through every character from the string
        let letter = encoded.charCodeAt(i);     //Use charCodeAt to get the current character's HTML ASCII unicode 
        if (letter >= 65 && letter <= 90) {     //Create a conditional to only pass true when the character is a letter from the alphabet, all other characters stay the same
        for(j = 0; j < 13; j++) {               //Create a loop to cycle 13 times
            if (letter == 90)                   //Check if the unicode is for the letter Z
            letter -= 25;                       //If true, subtract 25 to position the unicode at letter A (65)
            else {
         letter += 1;                           //if false, add 1 to the unicode
            }
        }
    }
        decoded += String.fromCharCode(letter); //After cycling the character unicode 13 times, get the letter with the character code and add it to the empty string
    }
    return decoded;                             // return the decoded string
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;