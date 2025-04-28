const carros = ["fiat", "vw", "honda", "ford"];

console.log(carros[2]);

carros[1] = "Ferrari";

console.log(carros);

carros[4] = "bmw";

console.log(carros);

const numeros = new Array(43, 54, 645, 677);

console.log(numeros);

const pessoa = {
  nome: "Rodrigo",
  idade: 30,
};

numeros.push(pessoa); // método de array que adiciona o item no final do array

numeros.unshift(2); // método de array que adiciona o item no inicio do array

console.log(numeros);

const estoqueCarros = [
  {
    nome: "Honda",
    modelo: "civic",
  },
  {
    nome: "Fiat",
    modelo: "punto",
  },
  {
    nome: "Toyota",
    modelo: "corolla",
  },
  {
    nome: "Honda",
    modelo: "hr-v",
  },
];

const novoCarro = {
  nome: "Toyota",
  modelo: "hilux",
};

estoqueCarros.push(novoCarro);

console.log("estoque:", estoqueCarros);

const newCar = {
  nome: "Fiat",
  modelo: "uno",
};

estoqueCarros.unshift(newCar);

console.log("estoque novamente:", estoqueCarros);

// estoqueCarros.pop();
//remove o ultimo elemento do meu array

// console.log("estoque com ultimo removido:", estoqueCarros);

// estoqueCarros.pop();

// console.log("estoque com HRV removido:", estoqueCarros);

// estoqueCarros.shift();
//remove o primeiro elemento do meu array.

// console.log("estoque com uno removido:", estoqueCarros);

//pratica:
// crie um array de 5 elementos e utilizem os metodos, push, pop, unshift, shift e printem no console os resultados.

// slice - retorna uma cópia de parte do array sem alterar o array original.

const estoqueCarros2 = [
  {
    nome: "Honda",
    modelo: "civic",
  },
  {
    nome: "Fiat",
    modelo: "punto",
  },
  {
    nome: "Toyota",
    modelo: "corolla",
  },
  {
    nome: "Honda",
    modelo: "hr-v",
  },
  {
    nome: "Fiat",
    modelo: "argus",
  },
];

const novoArrayCarros = estoqueCarros2.slice(1, estoqueCarros2.length);
// slice retorna uma cópia de uma parte do array

console.log("slice:", novoArrayCarros);

const arrayLetras = ["A", "B", "C", "D"];

arrayLetras.splice(2, 1, "x", "y", "z");
//Adiciona, remove ou substitui elementos em uma posição específica

console.log(arrayLetras);
