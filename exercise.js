/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z"];  //We get an array with all the letters in the alphabet
    let pos=0;
    word=encoded.split("");
        for(let i=0; i<word.length; i++){   //We cycle through all the elements in the array of the encoded word
            for(let j=0; j<alphabet.length;j++){ //We cycle through all the letters in the alphabet o find wich one is equal to the word letter
                if(word[i]===alphabet[j]){
                    pos=j+13;
                        if(pos>25){  //if the new position is more than the positions in the alphabet we go to the begining and start counting
                                    //from there
                            pos=(pos-25);
                            pos--;
                            }
                        word[i]=alphabet[pos];
                        pos=0;
                        j=alphabet.length;
                    }
                }   
            }
    encoded="";
        for(let i=0;i<word.length;i++){ //Here we just turn the array in an string
                encoded += word[i];
            }

   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;