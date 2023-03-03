/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */
    const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arrayalpha = alpha.split('');
    const arrayencoded = encoded.split('');
    let res = [];
        for(i=0;i<arrayencoded.length;i++){
            let item = arrayencoded[i]
            if(arrayalpha.includes(item)){
                for(j=0;j<arrayalpha.length;j++){
                    if(item==arrayalpha[j]){
                        let shift = j+13;
                        if(shift>=arrayalpha.length){
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