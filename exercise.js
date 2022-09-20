/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */
    let alphabeth = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'
    ,'O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const arraySize = encoded.length;
    let decoded="";
    // Concat the decoded message in a new string
    for(let i=0;i<arraySize;i++){
        decoded+=getCharValue(alphabeth,encoded[i]);
    }
   return decoded;
    /* Only make changes above this comment */
}

// Function that receives an alphabeth array and the letter that will be shifted
// Returns the shifted letter
const getCharValue = (arr,letter) => {
    /* Only make changes below this comment */
    let index=-1;
    let arrSize= arr.length;
    let finalLetter;
    for(let i=0;i<arr.length;i++){
        if(letter==arr[i]){
            console.log(i);
            index=i;
        }
    }
    // Not a letter
    if(index==-1){
        finalLetter=letter;
    } // A letter
    else{
        let newIndex;
        index=index+13;
        if(index<26){
            newIndex= index;
        }else{
            newIndex= index % arrSize;
        }
        finalLetter= arr[newIndex];
    }
    
    return finalLetter
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;