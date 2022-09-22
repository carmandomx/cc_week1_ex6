/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */

    /*---------------------------------------------------
    WE DECLARE A CONST FOR THE ALPHABET, A FUNCTION FOR TEST IF THE STR isAlpha 
    AND VARIABLE TO STORAGE DE FINAL STRING  
    ----------------------------------------------------*/
    
    const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    let fstr = "";

    //---------------------------------------------------//
    
    for (let e = 0; e < encoded.length; e++) {  //wE GONNA EVALUATE CHARACTER BY CHARACTER IN A FOR
        if (isAlpha(encoded[e])){  //IF THE CHARACTER isAlpha then
            let index_in_Alp = alphabeth.indexOf(encoded[e]); //We gonna ask for his index in the Alphabet
            let finalIndex = (index_in_Alp + 13) // WE ADD 13 positions for know the real character in the alphabet
        
            finalIndex >= 26 //but firts we evaluate if the index is not >= 26
                ? finalIndex = Math.abs(finalIndex - 26) // in this case we substract 26 position to know the real index in alphabet and make a Math.abs() to obtein de absolute value (non negative)
                : finalIndex = finalIndex; 

            //We add the real character to the final string
            fstr += alphabeth[finalIndex]
       
            }  else {
                fstr += encoded[e] //If the character is not isAlpha then we just add it
            }
    }
    
   return fstr; 
    /* Only make changes above this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;

