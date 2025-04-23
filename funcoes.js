//sintaxe básica de declaração de função:
function nomeDafuncao() {
  //aqui vai o meu código
}

//exemplo 01

function apresentacao(nome, idade) {
  console.log(
    `Olá, muito prazer, eu me chamo ${nome} e tenho ${idade} anos de idade`
  );
}

// apresentacao();

//exemplo 02

const saudacao = function (linguagem) {
  console.log(`Olá estamos aprendendo ${linguagem}`);
};

// saudacao();

//exemplo 03 (arrow function)

const mensagem = (conteudo) => {
  console.log(`Olá turma do GT, hoje estamos aprendendo ${conteudo}`);
};

// mensagem();

// parametros e argumentos de uma função

apresentacao("Rodrigo", 30);
apresentacao("Rafael", 22);
apresentacao("Lucas", 19);

saudacao("C#");
saudacao("Java");
saudacao("Javascript");

mensagem("lógica de programação com JS");

// Escopo global e escopo local

const meuNome = "Rodrigo"; // aqui está no escopo global

function mostrarMeuNome(sobrenome) {
  const meuNome = "Lucas";
  const segundoNome = "Mota";
  console.log(`Olá, eu sou ${meuNome} e meu sobrenome é ${sobrenome}`);
}

console.log(segundoNome); // nao consigo acessar por conta que ela foi declarado dentro do escopo de função

mostrarMeuNome("Medeiros");
