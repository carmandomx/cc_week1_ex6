/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */

    //this method splits a string into an array of substrings
    encoded = encoded.split("")

    //This method creates a new array
    // populated with the results of calling a provided function on every element in the calling array.

    encoded = encoded.map(char => {
    
    //this method returns the Unicode of the character at a specified index (position) in a string. 

        let code = char.charCodeAt(0)

    //translation for uppercase and some lowercase
        if( (code > 64 && code < 78) || (code > 96 && code < 110) )
            code += 13
            
    //translation for lowercase and some uppercase
        else if ( (code > 77 && code < 91) || (code > 109 && code < 123) )
            code -= 13
        //convert to character
        return String.fromCharCode(code)
    })
   return encoded.join("");
    /* Only make changes above this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;