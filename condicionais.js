let passouNoTeste = true;
let idade = 20;

// pra eu tirar minha habilitacao => passar no teste e ser maior que 18 anos.

if (passouNoTeste && idade >= 18) {
  console.log("Tirei minha habilitação");
} else {
  console.log("Nao tirei minha habilitação");
}

//Dia 25/04/25 é a minha festa, então para entrar na minha festa a camisa tem que ser branca ou a calça branca. Caso não obedeça isso, você não entra na minha festa.

let camisa = "branco";
let calca = "preto";
let data = "25/04/25";

if (data == "25/04/25" && (camisa == "branco" || calca == "branco")) {
  console.log("Entrei na festa");
} else {
  console.log("Não entrei na festa");
}

// isso é chamado CamelCase

let diaDaSemana = "sexta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Começou mais uma semana");
    break;
  case "terça":
    console.log("Opa, agora é terça");
    break;
  case "sexta":
    console.log("SEXTOU! Bora tomar umas!");
    break;
  default:
    console.log("Estou trabalhando muito!");
}

// Operador ternário

let minhaIdade = 20;

let statusDaIdade = minhaIdade >= 18 ? "É maior" : "É menor";

console.log(statusDaIdade);
