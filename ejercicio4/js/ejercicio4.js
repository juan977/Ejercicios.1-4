document.writeln("Menu")
document.writeln("Eligir una opcion");
document.writeln("1. suma: ");
document.writeln("2. resta: ");
document.writeln("3. multiplicaicon: ");
document.writeln("4. division: ");
document.writeln("5. salir: ");

var x1 = Number(prompt("Ingresar numero 1: "));
var x2 = Number(prompt("Ingresar numero 2: "));
var op = Number(prompt("Ingresar una opcion: "));

switch (op) {
    case 1:
        document.writeln("La suma de los numeros es: "+suma(x1,x2));
        break;
    case 2:
        document.writeln("La resta de los numeros es: "+resta(x1,x2));
        break;
    case 3:
        document.writeln("La multiplicacion de los numeros es: "+multiplicaicon(x1,x2));
        break;
    case 4:
        document.writeln("La division de los numeros es: "+division(x1,x2));
        break;
    case 5:
        document.writeln("Salir: "+salir(x1,x2));
        break;
    default:
        break;
}

function suma(x1,x2){
    return x1 + x2;
}

function resta(x1,x2){
    return x1 - x2;
}

function multiplicaicon(x1,x2){
    return x1 * x2;
}

function division(x1,x2){
    return x1 / x2;
}

function salir(){
    return salir;
}
