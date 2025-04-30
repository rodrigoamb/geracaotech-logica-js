// criando objetos:

const pessoa = {
  nome: "Carlos",
  idade: 33,
  cidade: "Fortaleza",
};

console.log(pessoa);

//como acessar os dados no objeto:

const valor1 = pessoa.cidade;
console.log(valor1);

const valor2 = pessoa["nome"];
console.log(valor2);

//como modificar valores do meu objeto

pessoa.idade = 30;

console.log(pessoa);

//como adicionar propriedades no meu objeto

pessoa.profissao = "Programador";

console.log(pessoa);

//como deletar propriedade do objeto

delete pessoa.idade;

console.log(pessoa);

//desestruturação (destructuring) de objetos e arrays

//em objetos
const produto = {
  nome: "notebook",
  preco: 3500,
  estoque: 20,
};

//em vez disso:

// const nome = produto.nome
// const preco = produto.preco
// const estoque = produto.estoque

//faça desestruturação:

const { nome, preco, estoque } = produto;

console.log(nome);
console.log(preco);
console.log(estoque);

//Em arrays:

let numeros = [10, 20, 30];

//em vez disso:
// const primeiro = numeros[0];
// const segundo = numeros[1];

//faça isso:
const [primeiro, segundo] = numeros;

console.log(primeiro);
console.log(segundo);

//com ...rest:

let arrNumeros = [10, 20, 30, 40, 50];

const [a, b, ...restoDoArray] = arrNumeros;

console.log("a: ", a);
console.log("b: ", b);
console.log("resto do Array: ", restoDoArray);
