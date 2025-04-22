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
