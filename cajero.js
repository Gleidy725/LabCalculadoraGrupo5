const prompt = require('prompt-sync')();

//let nombre = prompt("¿Cuál es tu nombre? ");
let numero1;
let numero2;
let operacion;
let resultado;
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