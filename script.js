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

