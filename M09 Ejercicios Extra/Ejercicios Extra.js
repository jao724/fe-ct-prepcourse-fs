/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayOfArrays = [];

   for(const clave in objeto) {
      arrayOfArrays.push([clave, objeto[clave]])
   };
   return arrayOfArrays;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let object = {};

   let newString = string.split('');

   newString.forEach(char => {
      if(object.hasOwnProperty(char)) {
         object[char]+= 1;
      }else {
         object[char] = 1;
      }
   });
   return object;
}

function capToFront(_string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let string1 = [];
   let string2 = [];

   for(let i = 0; i < _string.length; i++){
      if(_string[i] === _string[i].toUpperCase()) {
         string1 += _string[i];
      }else {
         string2 += _string[i];
      }
   }return string1 + string2;
   
}

function asAmirror(_frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let phrase = _frase.split(' ');

   for(let i = 0; i < phrase.length; i++) {
      phrase[i] = phrase[i].split('').reverse().join('');
   }

   let resultado = phrase.join(' ');
   return resultado;
}

function capicua(_numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let reversed = _numero.toString().split('').reverse().join('');
   return _numero.toString() === reversed ? "Es capicua" : "No es capicua";
}

function deleteAbc(_string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   return _string.replace(/[abc]/g,'');
}

function sortArray(_arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return _arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(_array1, _array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo = [];

   for(let num1 of _array1) {
      if( _array2.includes(num1)) {
         arreglo.push(num1);
      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
