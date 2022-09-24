/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    encoded = encoded.split("")
    encoded = encoded.map(char => {
                            
        let code = char.charCodeAt(0)

        if( (code > 64 && code < 78) || (code > 96 && code < 110) )
            code += 13

        else if ( (code > 77 && code < 91) || (code > 109 && code < 123) )
            code -= 13
        
        return String.fromCharCode(code)
    })

    return encoded.join("")
   
  
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;