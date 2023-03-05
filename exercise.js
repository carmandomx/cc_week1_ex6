/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let abc = ["A","B","C","D","E","F","G","H","I",
        "J","K","L","M","N","O","P","Q","R","S","T",
        "U","V","W","X","Y","Z"];

    let decoded = "";
    encoded.split('').forEach((element) => { // split the string to convert it in an array
        let index = 0;
        let pos = 0;
        if (abc.includes(element)) { // asking if the element is a letter of the abc array
            index = abc.indexOf(element); // taking and saving the index of the element on the abc array
            pos = index + 13 > 25 ? index - 13 : index + 13; // rotating 13 positions to the raight on the abc array
        }
        decoded += abc.includes(element) ? abc[pos] : element; // decodify the letter and save it in a new string
    });
    
   return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;