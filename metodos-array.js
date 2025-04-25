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
