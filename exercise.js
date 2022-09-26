/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    
    //we create a array variable to store the new decoded array
    let convertedArray = "";
    
    //we go through array encoded, element by element with a for cycle to evaluate its ascii code
    //in a vChar variable
    for(let i = 0; i < encoded.length; i++){
        
        let vChar = encoded.charCodeAt(i);
        //we keep the data equal if they dont belong to the range A-Z
       if(vChar > 90 || vChar < 65){
            convertedArray += String.fromCharCode(vChar);
       }
       //We rotate 13 places if the element is between A and Z
       else if((vChar + 13 <= 90) && (vChar + 13 >= 65)){        
        
        convertedArray += String.fromCharCode(vChar + 13);
       }
       //we make the adjust if the actual evaluated value exceeds the range A-Z
       //with the rotation of 13 places
       else if(vChar + 13 > 90){
        convertedArray += String.fromCharCode(vChar - 13);
       }
        
                
    }
    
    //we return the resulted array
   return convertedArray;
    /* Only make changes above this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;