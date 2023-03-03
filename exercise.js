/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] /*we define the english alphabet */
    code_length=encoded.length  /* Length of the code. Important value for loops*/
    let encoded_arr=encoded.split("")  /*split de string to array cause array are unmutable and hard to manipulate */
    for (let i=0;i<code_length;i++){  /*iterate through the whole code */
        for (let j=0;j<26;j++){  /* iterate through alphabet*/
            if (encoded[i]===alphabet[j]){  /* We check is a string element is in the english alphabet and which position it is in*/
                encoded_arr[i]=alphabet[(j+13)%26] /* we rotate it cyclicaly 13 places through the english alphabet*/
                break  /* break the loop is string element actually in the alphabet*/
            }
        }

    }
    encoded='' /* auxiliar to contain solution*/
    for (let i=0;i<code_length;i++){  /* we stick back the splitted encoding after rotating its elements*/
        encoded+=encoded_arr[i]
    }
    
    
   return encoded;
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;