document.writeln("Eliga una opcion");
document.writeln("1. Factorial: ");

var x1 = Number(prompt("Ingresar numero 1: "));
var op = Number(prompt("Ingresar una opcion "));

switch (op) {
    case 1:
        document.writeln("El factorial del primer numero es: "+factorial(x1));
        break;
    case 2:
        document.writeln("El factorial recursivo del numero es: "+factorialRecursivo(x1));
    default:
        break;
}
function factorial (n){
    var total = 1;
    for (i=1; i<=n; i++){
          total = total * i;
    }
    return total;
}

function factorialRecursivo (n){
    if (n == 0){
        return 1;
    }
        return n * factorialRecursivo (n-1);
}