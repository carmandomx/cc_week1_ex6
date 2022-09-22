/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    /* Only make changes below this comment */
    //We first split the string into an array for easier manipulation
    encoded = encoded.split("");

    /*Here we start the process to get the ASCII value of every element and process the transformation
    in another funcion which will return the new value, then, we substitute the original value
    with that new processed value into the array*/
    for(let i = 0; i < encoded.length; i++){
        encoded[i] = transform(encoded[i].charCodeAt());
        //Here we just turn the ASCII code into the value it represents
        encoded[i] = String.fromCharCode(encoded[i]);
    }

    //Finally we just convert the array back into a string and that's it
    return encoded.join("");
    /* Only make changes above this comment */
}

//Function to transform every letter
const transform = (char) => {
    let actValue = 0;
    //If the ASCII value is of a capital letter, we use the first 2 instances
    if(char >= 65 && char+13 <= 90){
        actValue = char + 13;

    }else if(char >= 65 && char+13 > 90){
        actValue = 64 + ((char+13)-90);

    //If the ASCII value is of a lowercase letter, we use the next 2 instances
    }else if(char >= 97 && char+13 <= 122){
        actValue = char + 13;

    }else if(char >= 97 && char+13 > 122){
        actValue = 97 + ((char+13)-122);

    //Finally, if the ASCII code correspond to other type of value, we leave it as is
    }else{
        actValue = char;
    }

    //We return the numeric value of the ASCII code
    return actValue;
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;