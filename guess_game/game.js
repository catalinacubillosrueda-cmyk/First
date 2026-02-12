const number = Math.floor(Math.random() * 100) + 1;
let intent = 0;
let guessed = false;
const readline =require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("adivina el numero de 1 a 100");
function preguntar() {
    readline.question("ingresa un numero: "), entrada => {
    const numero = parseInt(entrada);
    intento++;
    if (isNaN(numero) || numero < 1 || numero > 100){
        console.log("ingrese un numero entre 1 y 100");
    }else if (numero === number) {
        console.log("Wooow adivinaaste el numero ${number} en ${intent} intentos")
        guessed = true;
        readline.close();
        return;
    } else {
        const diference = Math.abs(numero - number);
        if (diference <= 10) {
            console.log("Caliente");
        } else if (diference <= 20){
            console.log("Tibio");
        }else {
            console.log("Frío");
        }
    }
    if(!guessed) preguntar();
    }
}
preguntar();

