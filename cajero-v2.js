const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
    let entrada = prompt(mensaje);
    return Number(entrada);
}

function calcular(numero1, operacion, numero2) {
    if (operacion === "+") {
        return numero1 + numero2;
    } else if (operacion === "-") {
        return numero1 - numero2;
    } else if (operacion === "*") {
        return numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 === 0) {
            return "No se puede dividir entre 0 :(";
        }
        return numero1 / numero2;
    } else {
        return "Operación no válida";
    }
}
let activo = true;


while (activo) {
let respuesta = prompt("Desea hacer alguna operacion: (S/N)");
let numero1;
let numero2;
let operacion;
let resultado;

if (respuesta === "N") {
    activo = false;
    console.log("!Vuelve Pronto!");
} else {
    
    console.log("Digite sus valores");
    numero1=prompt("Igrese el primer número ");
    numero2=prompt("Igrese el segundo número ");
    operacion=prompt("Igrese su operacion ");
    numero1=Number(numero1);
    numero2=Number(numero2);


if(operacion="+"){
    resultado=numero1+numero2;
    console.log("Resultado", resultado);
}else if(operacion="-"){
    resultado=numero1-numero2;
    console.log("Resultado", resultado);
}else if(operacion="*"){
    resultado=numero1*numero2;
    console.log("Resultado", resultado);
}else if(operacion="/"){
    resultado=numero1/numero2;
    if(numero2==0){
        console.log("No se puede dividir entre 0 :(");
    }else{
        console.log("Resultado", resultado);
    }
}
}
}

