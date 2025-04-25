// estrutura básica (for)

//sintaxe padrão:

// for (inicialização ; condição ; incremento) {
//       vai o bloco de código que vai se repetir
// }

// const frutas = ["banana", "morango", "laranja", "uva"];

// for (let i = 0; i <= frutas.length - 1; i++) {
//   if (frutas[i] === "laranja") {
//     frutas[i] = "abacate";
//   }
//   console.log(frutas[i]);
// }

// console.log("Fim do loop");

// loop com while

//sintaxe (while)

// let i = 0;
// while (condicao) {
//       codigo a ser repetido
// }

const frutas = ["banana", "morango", "laranja", "uva"];

let i = 0;
while (i <= frutas.length - 1) {
  if (frutas[i] === "laranja") {
    frutas[i] = "abacate";
  }
  console.log(frutas[i]);
  i++;
}

const tenis = [
  {
    marca: "Nike",
    modelo: "Air Max",
    cor: "preto",
    tamanho: [42, 43, 44],
    preco: 499.99,
    estoque: 10,
  },
  {
    marca: "Adidas",
    modelo: "Ultraboost",
    cor: "branco",
    tamanho: [40, 41, 42],
    preco: 599.99,
    estoque: 5,
  },
  {
    marca: "Puma",
    modelo: "RS-X",
    cor: "azul",
    tamanho: [39, 40, 41],
    preco: 399.99,
    estoque: 8,
  },
  {
    marca: "Reebok",
    modelo: "Classic",
    cor: "cinza",
    tamanho: [38, 39, 40],
    preco: 299.99,
    estoque: 12,
  },
];

// ocorreu uma mudança no estoque no qual o estoque de cada um dos tenis foi reduzido em 1
// e o preço do puma entrou em promoção de 399.99 para 299.99
// e o preço do reebok aumentou de 299.99 para 399.99
// o tamanho do nike foi alterado para [42, 43, 44, 45]
// o codigo que faz isso é o seguinte:
