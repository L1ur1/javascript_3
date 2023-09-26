 /*
Ejercicio 1
let edad=prompt("Digite su edad");

let mayor=18
if (edad>=mayor){
    alert("Usted es mayor de edad");
} else {
   alert("Usted es menor de edad");
} 

Ejercicio 2
let nota1 = prompt("Digite la nota 1")
let nota2 = prompt("Digite la nota 2")
let nota3 = prompt("Digite la nota 2")
let prome = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
let div = prome / 3;
alert("El promedio de las tres notas es: "+div);

let aprobo = 6
if (div>=aprobo){
    alert("usted aprobo el curso");
} else {
    alert("Usted no aprobo el curso");
}

Ejercicio 3 
let num1 = prompt("Digite un número A");
let num2 = prompt ("Digite un número B");

if (num1 > num2){
    alert(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    alert(num1 + " es menor que " + num2);
} else {
    alert(num1 + " es igual a " + num2);
}

Ejercicio 4 
var num1 = parsefloat (prompt ("Digite el primer número"));
var num2 = parsefloat (prompt ("Digite el segundo número"));

var ascendentes = [num1, num2].sort(fuction(a, b), {
    return: a-b
}); 
alert ("Los números en forma asendente son: "+ ascendentes.join(", "));

/*

Ejercicio 5 
let peso = prompt("Digite su peso");

if (peso< 40){
    alert("Persona baja de peso");
}  else if (peso >= 41 && peso <=70) {
    alert(" persona, peso, promedio ");
}   else {
    alert(" Persona con sobrepeso ");
} 

Ejercicio 6
let numero = parseInt(prompt("Digite un número"));

switch (numero) {
    case 1:
        alert ("Día 1 -  Lunes");
        break;
    case 2:
        alert ("Día 2 - Martes");
        break;
    case 3:
        alert ("Día 3 - Miércoles");
        break;
    case 4: 
        alert ("Día 4 - Jueves");
        break;
    case 5:
        alert ("Día 5 - Viernes");
        break;
    case 6:
        alert ("Sábado");
        break;
    case 7:
        alert ("Domingo");
        break;
    default:
        alert ("ESCRIBIÓ UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
        break;
}

Ejercicio 7
let compr = prompt ("Digite el precio de sus compra");

let descuento;
    if (compr >= 1000) {
        descuento = compr * 0.2;
    } else {
        descuento = compr * 0.05;
    }

    let pago = compr - descuento;
    alert("La cantidad a pagar es: "+ pago);


Ejercicio 8
let nhoras = prompt ("Digite el número de horas trabajadas");

let salario;
    if (nhoras <= 40) {
        salario = nhoras * 16000;
    } else {
        salario = nhoras * 20000;
    }
alert ("Su salario semanal es de: "+ salario);

Ejercicio 9
let nombre1 = prompt ("Digite el nombre de la primera persona");
let edad1 = prompt ("Digite la edad de la primera persona");

let nombre2 = prompt ("Digite el nombre de la segunda persona");
let edad2 = prompt ("Digite la edad de la segunda persona");

let mayor;
    if (edad1 > edad2) {
        mayor = nombre1;
    } else if (edad2 > edad1) {
        mayor = nombre2;
    } else {
        mayor = "Las dos personas tienen la misma edad";
    }
alert("La persona mayor es: "+ mayor);

Ejercicio 10
let cantcamisas = prompt ("Digite la cantidad de camisas compradas");
let precamisas = prompt ("Digite el precio de cada camisa");
let tsindesc = cantcamisas * precamisas;

let descuento;
    if (cantcamisas >= 3) {
        descuento = tsindesc * 0.2;
    } else {
        descuento = tsindesc * 0.1;
    }
let tcondesc = tsindesc - descuento;
alert ("El total a pagar por la compra de camisas es: "+ tcondesc);

Ejercicio 11 
let num1 = parsefloat (prompt("Ingrese el primer número"));
let num2 = parsefloat (prompt("Ingrese el segundo número"));

let resultado;
if (num1 === num2) {
    let resultado = num1 * num2;
        alert("El resultado de la multiplicación es: "+resultado);
} else if (numero1 > numero2) {
    let resultado = numero1 - numero2;
        alert("El resultado de la resta es: " + resultado);
} else {
    let resultado = numero1 + numero2;
        alert("El resultado de la suma es: " + resultado);
} 

Ejercicio 12 
let opcion=prompt("1.suma 2.resta 3.division 4.multiplicacion");
let numero1=prompt("Digite el primer número")
let numero2=prompt("Digite el segundo número")

    if(opcion==1){
        suma=parseInt(numero1)+parseInt(numero2)
        alert("La suma es: "+suma);
    } else if(opcion==2){
        resta=parseInt(numero1)-parseInt(numero2)
        alert("La resta es: "+resta);
    } else if(opcion==3){
        division=parseInt(numero1)/parseInt(numero2)
        alert("La division es: "+division);
    } else {
        multiplicacion=parseInt(numero1)*parseInt(numero2)
        alert("La multiplicacion es: "+multiplicacion);
    } */