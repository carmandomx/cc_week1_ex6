/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    const words = encoded.split(''); //array

    let decoded = '';
    words.forEach(Element=>{
        
        //console.log(String.fromCharCode(Element.charCodeAt(0) +13))
        let num = (Element.charCodeAt(0)>90 || Element.charCodeAt(0)<65 ? Element.charCodeAt(0) :(Element.charCodeAt(0)+13) >90 ? Element.charCodeAt(0)-13:Element.charCodeAt(0)+13);
        decoded += String.fromCharCode(num);
    });

    console.log(decoded);
    /*
    let t = 'A';
    let num = t.charCodeAt(0)
    console.log(t, t.charCodeAt(0) )
    console.log('here', String.fromCharCode(t+13))*/
    
   return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;