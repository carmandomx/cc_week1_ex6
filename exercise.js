/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    // Let's make the message capitalize just in case that the message is not that way, so that we can compare with capitalize letters of the alphabeth
    encoded = encoded.toUpperCase();
    // Let's creat a variable with an empty string to storage the decoded message
    let result = "";
    // Then we need all the english alphabeth
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // We need a variable with the rotation difference.
    const difference = 13;
    // Then we need a for loop to work with each element of the string that the exercise provides us
    for (let i = 0; i < encoded.length; i++) {
        // Here we need to compare if each letter of the encoded message actually exists in the letters string
        if (letters.indexOf(encoded[i]) != -1) {
            // If that's true, then we need to save that position plus the difference (in this case 13) in a variable but we need to keep
            //  in mind that alphabet just have 26 letters so we need to rotate the letters, thats why we need the module of the quantity
            // of letters in the alphabeth.
            let position = ((letters.indexOf(encoded[i]) + difference) % 26)
            // Finally, we just need to save each of those values of the positions in the empty variable that we created above.
            result += letters[position];
        }
        // Just in case that the message contains a different characte of the ones that are in the aplhabbeth,  we are just gonna storage it 
        // in the string
        else {
            result += encoded[i]
        }
    }

    return result;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;