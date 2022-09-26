/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let decodedResult = ""; // Using this variable to present the result from the change of words.
    let StringOne = 'ABCDEFGHIJKLM'; // This variable is the string with the first half of the alphabeth
    let StringTwo = 'NOPQRSTUVWXYZ'; // This variable is the string with the second half of the alphabeth

    // this for loop will take the string and look for words that are in the first string and change them for the ones in the same position in the second string, then it will look for words that are in the second string and change them for the words in the same position in the first string. 
    for (let i = 0; i < encoded.length; i += 1){
        let letterToDecode = encoded[i];
        
        if (StringOne.indexOf(letterToDecode) >= 0){
            decodedResult += StringTwo[StringOne.indexOf(letterToDecode)];
        } else if (StringTwo.indexOf(letterToDecode) >= 0){
            decodedResult += StringOne[StringTwo.indexOf(letterToDecode)];
        } else {
            decodedResult += letterToDecode; // this is in the cases that we have spaces, for them to stay in the stream.
        }
    }
    
   return decodedResult; // result of the changes

    /* Only make changes above this comment */
}







/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;