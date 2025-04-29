// lenght - conta o número de caracteres de uma string

const nome = "RODRIGO";

console.log(nome.length);

// toUpperCase() - deixa minha string em caixa alta.

const sobrenome = "medeiros";
const sobrenomeCaixaAlta = sobrenome.toUpperCase();

console.log(sobrenomeCaixaAlta);

// toLowerCase() - deixa minha string em caixa baixa.

const nomeCaixaBaixa = nome.toLowerCase();

console.log(nomeCaixaBaixa);

// includes() - verifica se a string contém outra string

const frase = "Aprender Javascript é incrível";

console.log("verificando com includes():", frase.includes("Javascript"));

//startsWith() - verifica se a string começa com determinado texto.

const saudacao = "Bom dia!";
console.log("startsWith: ", saudacao.startsWith("Bom"));

//endsWith() - verifica se a string termina com determinado texto

console.log("endsWith: ", saudacao.endsWith("dia!"));

//indexOf() - retorna o índice da primeira ocorrência de um caractere

const fruta = "abacaxi";
console.log("indexOf: ", fruta.indexOf("b"));
console.log(fruta[3]);

//lastIndexOf() - Retorna o índice da ultima ocorrência de um caractere

console.log("lasIndexOf:", fruta.lastIndexOf("a"));

//slice() - extrai uma parte da string sem modificar a original

const texto = "Javascript é top";

const linguagem = texto.slice(0, 10);

console.log("minha linguagem:", linguagem);

//replace() - substitui a primeira ocorrencia encontrada por outra string

const novaFrase =
  "Eu amo Javascript e ele que paga minhas contas. Javascript é top!";

console.log("usando replace: ", novaFrase.replace("Javascript", "Python"));

//replaceAll() - substitui todas as ocorrencias.

console.log(
  "usando replaceAll: ",
  novaFrase.replaceAll("Javascript", "Python")
);

//split() - divide a string em um array

const listaDeCompras = "pão,leite,ovos";

const arrayListaDeCompras = listaDeCompras.split(",");

console.log(arrayListaDeCompras);

const novoString = arrayListaDeCompras.join(" ");
console.log(novoString);

function formatarData(data) {
  return data.split("-").reverse().join("/");
}

const resultadoDaFormatacao = formatarData("2025-04-29");

console.log("formatado:", resultadoDaFormatacao);

//trim() -> remove espaços vazios no começo e no final da string

const meuNome = "   Rodrigo   ";

console.log(meuNome.trim());
