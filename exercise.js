/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
   let diffLetter_pos = 13;
   let asciiVal_Let = 0;

    for (let i = 0; i < encoded.length; i++) {
        
        asciiVal_Let = encoded.charCodeAt(i);

        if ((asciiVal_Let > 64 && asciiVal_Let < 91) || (asciiVal_Let > 96 && asciiVal_Let < 123)) {

            let extra = asciiVal_Let + diffLetter_pos;

            if ((extra >= 91 && extra < 109) || (extra >=123)) {
                extra = extra - 26
                encoded = encoded.substring(0, i) + String.fromCharCode(extra) + encoded.substring(i+1);
            }
            else{
                encoded = encoded.substring(0, i) + String.fromCharCode(extra) + encoded.substring(i+1);               
            }
        }
    }

    return encoded;
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;