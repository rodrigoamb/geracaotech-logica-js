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

//operador spread (...)

const usuario = {
  nome: "Ana",
  idade: 28,
};

//copiando objetos

const novoUsuario = {
  ...usuario,
  profissao: "Dev",
};

console.log(novoUsuario);

// copiando arrays

const numerosOriginais = [1, 2, 3];
const numerosOriginais2 = [4, 5, 6];

const arrayCopiado = [...numerosOriginais, ...numerosOriginais2];

console.log(arrayCopiado);

//métodos de objetos

const carro = {
  marca: "Ford",
  modelo: "Ranger",
  ano: "2025",
};

// Object.keys() - retorna um array com as chaves do objeto

const minhasChaves = Object.keys(carro);

console.log(minhasChaves);

// Object.value() - retorna um array com os valores do objeto

const meusValores = Object.values(carro);

console.log(meusValores);

// Object.entries() - retorna um array de arrays chave e valor

const meuArrayChaveValor = Object.entries(carro);

console.log(meuArrayChaveValor);

//iteração sobre o objeto (for..in)

for (let chave in carro) {
  console.log(`${chave} : ${carro[chave]}`);
}

// Criando classes em Javascript

class Pessoas {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
  }
}

const cidadao = new Pessoas("Rodrigo", 30);

cidadao.falar();
