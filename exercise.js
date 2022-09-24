/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
   
    /* Only make changes below this comment */

    //First. We invent the ALPHABETH
    const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decoded = "";
    
    //A for loop to iterate through the input to...
    for (let i = 0; i < encoded.length; i++) {

            //check if the string character is in our alphabeth
            let index = alphabeth.indexOf(encoded[i]);
            
            //When the index is -1 it means it's an empty space like this => " "; So we add the space
            if (index == -1) {
                decoded += encoded[i];
            }
            //Now the decoder takes the index and sums 13 but if the index becomes greater than 26 we apply the
            //remainder operation after the sum so we get the new position based on looping the number inside a 26 scale
            else{
                let decoder = (index + 13) % 26
                decoded += alphabeth[decoder];
            }
        
        }
        return decoded;
    
    /* Only make changes above this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;