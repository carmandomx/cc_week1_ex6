/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let coded = encoded.split("");//First here I created a new array, with the string received to split each letter into a position
        let res = "";//I declared a empry string to fill with the decoded string that i'm goin to write.
        let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//I delared the alphabet that I'm going to use to make the compares and decode the string.
        
        
        for (let i = 0; i < coded.length; i++) {//This is the loop use to read every letter in the array.
          for (let j = 0; j < alph.length; j++) { //This loop is going to be use to find the position of the letter in the alphabet
            let a,b; //These are the variables that I'm going to use for calculate the position of the new character in the current position
            if (alph[j] == coded[i]) {//if the letter in the current position match the letter in the alphabeth
                    a=j+13;      //I'm going to use the position of the letter in the alphabet and add 13 positions to the indicator j to find the new letter.
                if (a>=alph.length) {//if the new position exced the length of the positions in the alphabet is going to follow the next instructions
                    b=(26-a)*-1;//here is the formula used to find the position in the array into the alphabet
                    coded[i] = alph[b]; //Now it would set the new letter into the current position of our encoded array with the indicator 
                   j=26;//And now, to break the loop, here I set the j to 26 and it would stop the running for this letter
                }else{ //If the position setted on the a variable is less than the lenght of the array it would do the next instruction
                     coded[i] = alph[a];//It's going to simple set the new letter in the new position (a) at the current encoded letter
                     j=26;//After that, this is only going to break the loop, to keep on the next letter in the encoded array
                }
            } 
          }  
            res=res+coded[i]; //Here is the new string with the decoded results 
        }
    encoded=res; //Now, I set the string with the decoded message into the encoded variable
   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;