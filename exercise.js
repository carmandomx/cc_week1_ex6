/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */

    //English alphabet with 26 letters (positions from 0 to 25 )
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    //Auxiliary array to put the result as an array
    let result = [];
    //I transform the input into an array to work with each element
    let arrayInput = Array.from(encoded);

    //checking each element of the input
    for(element in arrayInput){

        //if the element is in the alphabet...
        if(alphabet.includes(arrayInput[element])){
            //... I get the equivalent index of the element in the alphabet array and add 13
            newIndex = alphabet.indexOf(arrayInput[element]) + 13;
            //if the index of the alphabet array is exceeded, I have to substract 26 (the number of letters)
            if(newIndex > 25) newIndex = newIndex - 26;
            //then I push the value of that index in the alphabet array to the result array
            result.push(alphabet[newIndex]);

        }else{
            //If the element is NOT a letter, then I just push it to the result array
            result.push(arrayInput[element]);
        }


    }

    //Array to string
    encoded = result.join("");


   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;