/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded, spaces) => {
    
    /* Only make changes below this comment */
    let res = ""

    for (let i = 0; i < encoded.length; i++){ //iterates every element
        let chr = encoded[i]

        if (chr.match(/[a-zA-Z]/i)) { //check every element if its a letter and ignores non-letters elements
           
            let code = encoded.charCodeAt(i); //return a integer number of the UTF-16 code 
    

            if (code >= 65 && code <= 90) { //for Uppercase letters
            chr = String.fromCharCode(((code - 65 + spaces) % 26) + 65 ) //Rounds the results to move the letter 13 spots.
            }

            else if (code >= 97 && code <= 122) { //for Lowercase letter
            chr = String.fromCharCode(((code - 97 + spaces) % 26) + 97 ) //Rounds the results to move the letter
            }
    }
        
    res += chr;
    }
  
   return res;
    /* Only make changes above this comment */
}

str = "Hola, me llamo Sergio Eloy"
prueba1 = cypher(str,13)

console.log(prueba1)




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;