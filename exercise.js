/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */
    const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Strin with the abc
    const arrayalpha = alpha.split(''); // Transforming the abc string into an array
    const arrayencoded = encoded.split(''); // Transformint the input string into an array
    let res = []; // create a void array for saving the answer
    //the next for loop iterates inside the input array and saves its elements inside the variable item then we make a conditional to validate if the character is a letter of the abc
        for(i=0;i<arrayencoded.length;i++){
            let item = arrayencoded[i]
            if(arrayalpha.includes(item)){
                for(j=0;j<arrayalpha.length;j++){
                    if(item==arrayalpha[j]){
                        let shift = j+13; //here we make the encoding process by moving the letter 13 places.
                        if(shift>=arrayalpha.length){//this conditional allows us to adjust de J value if it goes outsite de values of the length of the abc array
                            let shiftin = shift-arrayalpha.length;
                            item2 = arrayalpha[shiftin];
                            res.push(item2);
                            break;
                        }else{
                            item3 = arrayalpha[j+13];
                            res.push(item3);
                        }
                    }
                }
            }else{
                res.push(item);
            }     
    }
    let decoded = res.join("")
   return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;