/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let narray=[]; //Array to store the new message

//Comparing the Ascii value of each element of the array (to exclude signs) 
    for(let i = 0; i < encoded.length; i++)
    {
        let key = encoded.charCodeAt(i);

        
       if(key > 90 || key < 65) //if is not a leter, we pass the same character
       {
            narray += String.fromCharCode(key);
       }

       else if((key + 13 <= 90) && (key + 13 >= 65)) //If dont't overflows, we simply add 13
       {        
        narray += String.fromCharCode(key + 13);
       }
       else if(key + 13 > 90) //In third case, if overflows, we substract 13 
       {
        narray += String.fromCharCode(key - 13);
       }
    }

    //Once checked the whole array, we return our storing array
   return narray;
    
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
