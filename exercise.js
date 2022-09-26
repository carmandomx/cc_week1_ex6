/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let decodedResult = "";
    let StringOne = 'ABCDEFGHIJKLM';
    let StringTwo = 'NOPQRSTUVWXYZ';

    for (let i = 0; i < encoded.length; i += 1){
        let letterToDecode = encoded[i];
        
        if (StringOne.indexOf(letterToDecode) >= 0){
            decodedResult += StringTwo[StringOne.indexOf(letterToDecode)];
        } else if (StringTwo.indexOf(letterToDecode) >= 0){
            decodedResult += StringOne[StringTwo.indexOf(letterToDecode)];
        } else {
            decodedResult += letterToDecode;
        }
    }
    
   return decodedResult;

    /* Only make changes above this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;