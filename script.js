/* Tarea 7
Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne 
un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

*/
function interseccion(array1,array2){
    let arraylisto = []; 
    arraylisto = array1.concat(array2);
    for(let i=0;(i<= arraylisto.length);i++){
        for(let j=i+1;(j<= arraylisto.length);j++){
           if (arraylisto[i]==arraylisto[j]){
            arraylisto.splice(j,1);
           }
        }
    }    
    return arraylisto;
}
alert("En esta tarea realizaremos la Union entre dos arreglos menos la Interseccion entre ellos.");
let array1=[1,2,2];
let array2=[3,4,4,5];
console.log(array1);
console.log(array2);
console.log(interseccion(array1,array2));
/*tarea 8 

Hacer una function darCartas() devuelva un  objeto que contenga una propiedad 
palo con su valor y una propiedad numero con su valor.
La función va a elegir uno cualquiera de: [2,3,4,5,6,7,8,9,10,J,Q,K,A]
y uno cualquiera de:[“pica “,“trebol”,”corazón”,”diamantes”]

Ejemplo darCartas() devuelve {palo:”trébol”, valor: “A”}
*/
function darCartas(carta){
    let palos = ["Pica","Trebol","Corazón","Diamantes"];
    let numeros = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    let num = Math.floor(Math.random()*palos.length);
    let num2 = Math.floor(Math.random()*numeros.length);
    carta = {
        palo: palos[num],
        numero: numeros[num2]
    }
    return carta;
}
let carta = {
    palo: '',
    numero: ''
}
console.log(darCartas(carta));