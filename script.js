console.log("Hoje iniciamos JS"); //exibe uma mensagem no console

/* 
em varias
linhas o meu 
comentário
*/

// comentario de uma unica linha

//variáveis

//nao utiliza mais
var nome = "Rodrigo";

//o que utilizamos hoje para criar variáveis

let idade = 32;
const cargo = "programador";

//tipo de dados primitivos

//tipo (string)

let marcaDeCarro = "Fiat v8 ";
let motor = "Motor 2.0 ";
let corDoCarro = `Vermelho`;

console.log(marcaDeCarro);
console.log(corDoCarro);

//concatenação

console.log("Eu tenho um " + marcaDeCarro + motor + corDoCarro);

//template string ``

console.log(
  `Eu me chamo ${nome} e tenho um ${marcaDeCarro} que tem um ${motor} e é da cor ${corDoCarro}`
);

//tipo number

let altura = 1.87;
let peso = 90;
let numeroNegativo = -23;

console.log(altura + peso);

// tipo boolean (booleanos)

let estaVacinado = true;
let passouDeAno = false;

// tipo undefined

let sobrenome;

console.log(sobrenome);

sobrenome = "Medeiros";

console.log(sobrenome);

// tipo null

let nulo = null;

// tipos de dados complexos

// arrays

let frutas = ["banana", "maça", "abacaxi", "morango"];

console.log(frutas);

console.log(frutas[3]);

frutas[3] = "cajá";

console.log(frutas);

let meuArray = [
  [true, true, "Medeiros"],
  ["banana", "Fiat"],
  ["Frontend", "Fullstack", 100],
  45,
  "Rodrigo",
];

console.log(meuArray[2][2]);

meuArray[2][2] = 200;

console.log(meuArray);

// objetos

let carro = {
  marca: "Honda",
  motor: 2.0,
  modelo: "Civic Exl",
  ano: 2020,
  cor: "Branco",
  bancoDeCouro: true,
  multimidia: true,
  tetoSolar: false,
  extras: ["ar", "farol de milha", "led"],
};

console.log(carro.modelo);
console.log(carro.extras[2]);
console.log(carro["marca"]);

// operações matemáticas

let numero1 = 20.46;
let numero2 = 10;

let numero3 = "30";
let numero4 = "4020";

let nome1 = "ovo";
let nome2 = "o";

//soma
console.log(numero1 + numero2);
console.log(numero1 + numero4);

let resultado = numero4 - numero1;
console.log(typeof resultado); //descobre o tipo do dado
console.log(typeof numero4);

//subtração
console.log(numero1 - numero2);
console.log(nome1 - nome2);

//multiplicação
console.log(numero1 * numero2);

//divisão
console.log(numero1 / numero2);

//resto da divisão (mod)
console.log(numero1 % numero2);

//Operadores Relacionais

let num1 = 30;
let num2 = 25;
let num3 = "30";

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 != num2);

console.log(typeof num1 == typeof num3);

//operadores lógicos

// (e) AND - &&
// (ou) OR - ||
// invert - !

let result = num1 > num2 || num1 == num2;
console.log(!result);
