let t1 = 0;
let t2 = 1;
let t3 = 0;

let valor = prompt("Digite um número:");

while (valor > t3) {
    t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
}

if (valor == 0 || valor == 1) {
    alert("O número faz parte da sequência de Fibonacci.");
} else if (valor == t3) {
    alert("O número faz parte da sequência de Fibonacci.");
} else {
    alert("O número digitado não faz parte da sequência de Fibonacci.");
}
