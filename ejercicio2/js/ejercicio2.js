var num;
var anterior = 0;
var actual = 1;
var fibo = 0;

document.writeln("Introduce un numero");
   num=parseFloat(prompt());

document.writeln("O,");
document.writeln("1,");

while(fibo<num){
    fibo=(anterior+actual);
    anterior=actual;
    actual=fibo;

    document.writeln(fibo+ ",");
}