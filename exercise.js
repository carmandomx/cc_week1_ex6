/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */

    //transform the string into an array
    const words = encoded.split(''); //array
    //Variable for the answer
    let decoded = '';
    //method foreach, to read each element into words
    words.forEach(Element=>{
        
        /*num:variable for save the char trasformed into a number
        If the element is greater than 90 (ASCII: Letra Z) or less than 65(ASCII: letra A)
            ->tha value of num is the char transformated into a number
            else -> If my value transformated into a number plus 13 is greater than 90
                ->I add 13 to the number from my char
                else -> rest 13 to the number from my char
        */
        let num = (Element.charCodeAt(0)>90 || Element.charCodeAt(0)<65 ? Element.charCodeAt(0) :(Element.charCodeAt(0)+13) >90 ? Element.charCodeAt(0)-13:Element.charCodeAt(0)+13);
        //build my decoded word
        decoded += String.fromCharCode(num);
    });

   return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;