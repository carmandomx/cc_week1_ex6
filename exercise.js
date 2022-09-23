/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    
    let decoded = encoded.split('');                                // Converts each characater of a string into an element of an array.

    // English alphabet to encode/decode the message. 
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // For loop to confirm if the character needs to be decoded. 
    for (let index = 0; index < decoded.length; index++) {
        const element = decoded[index];
        
        // If the character needs to be decoded, find the index in the English alphabet and shift 13 letters. 
        if (alphabet.includes(element)) {
            let alpIndex = alphabet.findIndex((letter) => letter === element);
            if ((alpIndex + 13) > 26) {
                alpIndex -= 13;
            }
            else if (alpIndex === 13) {
                alpIndex = 0;
            }
            else {
                alpIndex += 13;
            }
            decoded.splice(index,1,alphabet[alpIndex]);            //  Replace the letter with the encoded letter. 
        }
        
        
    }
    decoded = decoded.splice(0,encoded.length);                     //  Joins the array elements into a single element.
    encoded = decoded.join('');                                     //  Converts the array to a string.

   return encoded;                                                  //  Return the message encoded. 
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;