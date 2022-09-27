/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.
    This is a shift cypher meaning that all the letters shift it's position by a set amount.
    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.
*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */


    //Deciphered reference letters
        let decoded = {
            a: 'n', b: 'o', c: 'p',
            d: 'q', e: 'r', f: 's',
            g: 't', h: 'u', i: 'v',
            j: 'w', k: 'x', l: 'y',
            m: 'z', n: 'a', o: 'b',
            p: 'c', q: 'd', r: 'e',
            s: 'f', t: 'g', u: 'h',
            v: 'i', w: 'j', x: 'k',
            y: 'l', z: 'm',  ' ':' ',
            '!': '!'  
         }
  
        //convert the string to lowercase
        encoded = encoded.toLowerCase();
  
        //decipher the code
        let decipher = '';
        for(let i = 0 ; i < encoded.length; i++){
            decipher += decoded[encoded[i]];
        }
    
     return decipher;
    /* Only make changes above this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;