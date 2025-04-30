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
