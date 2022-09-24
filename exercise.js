/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */
    // We can use ASCII to represent each uppercase char as a number
    // A-Z = 65-90, there´s 26 letters in the US alphabet, each encoded by a 13 place shift
    // let alphabetArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // let codeArr = ['65','66','67','68','69',...];

    // We define two empty array literals 
    let alphaCharCode = []; // to store the ASCII codes of each alphabet character of the string
    let decodedArr = []; // to store the decoded characters of each the string

    // function that receives the encoded string and returns the respective ASCII codes array
    function getCharCodes(encoded){ 
        // loop through each character of the string 
        for(let i = 0; i < encoded.length; i++){
            let code = encoded.charCodeAt(i); // to obtain the ASCII code
            // Check if we have to add or subtract 13, depending on the code number (to stay within the range))
            if (code >= 65 && code <= (90-13)) {
                code += 13;
            } else if (code > (90-13) && code <= (90)){
                code -= 13;
            }
            alphaCharCode.push(code); // append the new decoded value to the ASCII codes array
        }
        return alphaCharCode;
    }

    // asigning an array literal to a variable for using it later
    let numsArr = getCharCodes(encoded); // contains the result of the previous function

    // Loop through the array like before, but now converting the other way around
    for (let i = 0; i < numsArr.length; i++) {
        const num = numsArr[i]; // a number, representing an ASCII code, in the array
        let decoded = String.fromCharCode(num); // transform back ASCII to an alphabet letter
        decodedArr.push(decoded); // append result to the new array
    }

    let decoded = decodedArr.join(""); // Join each element of the array into a string
    return decoded;

    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;