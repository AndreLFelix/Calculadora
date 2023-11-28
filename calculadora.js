var num1;
var num2;
var operador;

num1 = prompt("Digite o primeiro numero");
num2 = prompt("Digite o segundo numero");
operador = prompt("Digite que operação fazer (usando os simbolos: +, -, * ou /");

switch (operador) {
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        if ((num1 % num2) != 0){
            alert(num1 % num2);
        }
        break;
    default:
        alert("Operação inválida");
}