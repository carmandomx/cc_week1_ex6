/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
  /* Only make changes below this comment */
  const regularExpresion = /[A-Za-z]/; //Crear expresion regular
  const decodedWord = [];
  const word = encoded.split("");

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (regularExpresion.test(letter)) {
      //Ver si el caracter es una letra
      let letterCode = letter.charCodeAt(); //Obtener el valor ASCII de la letra

      //Ver si la letra es minúscula o mayúscula
      let upperCase = letterCode >= 65 && letterCode <= 90;
      let lowerCase = letterCode >= 97 && letterCode <= 122;
      //Agregar las 13 posiciones
      letterCode += 13;
      if ((upperCase && letterCode > 90) || (lowerCase && letterCode > 122)) {
        letterCode -= 26; //Si después de agregar las 13 posiciones se sale del rango de una letra, sustraer 26 posiciones.
      }
      decodedWord[i] = String.fromCharCode(letterCode); //Regresar el valor ASCII a carácter
    } else {
      decodedWord[i] = letter;
    }
  }
  encoded = decodedWord.join("");
  return encoded;
  /* Only make changes above this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
