// 1
function exercicio1() {
let idade = 18;

if (idade >= 18) {
console.log("Maior de idade");
} else {
console.log("Menor de idade");
}
}

// 2
function exercicio2() {
let num = 9;

if (num % 3 === 0) {
console.log("Múltiplo de 3");
} else {
console.log("Não é múltiplo de 3");
}
}

// 3
function exercicio3() {
let a = 10,
b = 20;

if (a > b) console.log("A maior");
else console.log("B maior");
}

// 4
function exercicio4() {
let num = -5;

if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");
}

// 5
function exercicio5() {
let nota = 7;

let res = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(res);
}

// 6
function exercicio6() {
let opcao = "Ajuda";

switch (opcao) {
case "Inicio":
console.log("Inicio");
break;
case "Ajuda":
console.log("Ajuda");
break;
case "Sair":
console.log("Sair");
break;
}
}

// 7
function exercicio7() {
let i = 1;

while (i <= 5) {
console.log(i);
i++;
}
}

// 8
function exercicio8() {
let i = 10;

do {
console.log(i);
i--;
} while (i >= 1);
}

// 9
function exercicio9() {
for (let i = 0; i <= 10; i++) {
if (i % 2 === 0) console.log(i);
}
}

// 10
function exercicio10() {
let soma = 0;

for (let i = 1; i <= 100; i++) {
soma += i;
}

console.log(soma);
}

// 11
function exercicio11() {
let frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
console.log(frutas[i]);
}
}

// 12
function exercicio12() {
let nomes = ["Ana", "João", "Carlos"];

for (let nome of nomes) {
console.log(nome);
}
}

// 13
function exercicio13() {
let pessoa = {
nome: "Leandro",
idade: 20,
cidade: "Sorocaba",
};

for (let chave in pessoa) {
console.log(chave + ": " + pessoa[chave]);
}
}

// 14
function exercicio14() {
for (let i = 1; i <= 5; i++) {
if (i === 3) continue;
console.log(i);
}
}

// 15
function exercicio15() {
for (let i = 1; i <= 10; i++) {
if (i === 7) break;
console.log(i);
}
}

// 16
function exercicio16() {
let idade = 25;

if (idade <= 12) console.log("Criança");
else if (idade <= 17) console.log("Adolescente");
else if (idade <= 59) console.log("Adulto");
else console.log("Idoso");
}

// 17
function exercicio17() {
let nomes = ["Ana", "João", "Carlos"];

for (let nome of nomes) {
console.log(nome + " - " + nome.length);
}
}

// 18
function exercicio18() {
let pessoa = {
nome: "Leandro",
idade: 20,
cidade: "Sorocaba",
};

let count = 0;

for (let chave in pessoa) {
console.log(chave + " -> " + typeof pessoa[chave]);
count++;
}

console.log("Total:", count);
}

// 19
function exercicio19() {
let palavra = "amor";
let letras = {};
let isograma = true;

for (let letra of palavra) {
if (letras[letra]) {
isograma = false;
break;
}

```
letras[letra] = 1;
```

}

console.log(
isograma
? "É um isograma"
: "Não é um isograma"
);
}

// 20
function exercicio20() {
let opcao = "";
let opcoes = ["Inicio", "Ajuda", "Sair"];
let i = 0;

while (opcao !== "Sair") {
opcao = opcoes[i];

```
switch (opcao) {
  case "Inicio":
    console.log("Tela inicial");
    break;

  case "Ajuda":
    console.log("Menu de ajuda");
    break;

  case "Sair":
    console.log("Encerrando...");
    break;

  default:
    console.log("Opção inválida");
}

i++;
```

}
}

// menu
function menu() {
let opcao = 20; // escolha o exercício aqui

switch (opcao) {
case 1:
exercicio1();
break;
case 2:
exercicio2();
break;
case 3:
exercicio3();
break;
case 4:
exercicio4();
break;
case 5:
exercicio5();
break;
case 6:
exercicio6();
break;
case 7:
exercicio7();
break;
case 8:
exercicio8();
break;
case 9:
exercicio9();
break;
case 10:
exercicio10();
break;
case 11:
exercicio11();
break;
case 12:
exercicio12();
break;
case 13:
exercicio13();
break;
case 14:
exercicio14();
break;
case 15:
exercicio15();
break;
case 16:
exercicio16();
break;
case 17:
exercicio17();
break;
case 18:
exercicio18();
break;
case 19:
exercicio19();
break;
case 20:
exercicio20();
break;
default:
console.log("Opção inválida");
}
}

menu();
