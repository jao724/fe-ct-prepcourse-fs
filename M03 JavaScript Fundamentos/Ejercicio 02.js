/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string.toString();
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   //let sumar = x + y;
   //return sumar;

   return x + y;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let restar = x - y;
   return restar;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let dividiendo = x / y;
   return dividiendo;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let multiplicado = x * y;
   return multiplicado;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let obteniendoResto = x % y;
   return obteniendoResto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
