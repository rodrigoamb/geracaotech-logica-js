//const valor = "10";
const valor = "Rodrigo";

const tipo = typeof valor;
const convertido = Number(valor);

if (typeof convertido === "number" && !isNaN(convertido)) {
  console.log("Você digitou um number");
} else if (typeof valor === "string") {
  console.log("Você digitou uma string");
} else {
  console.log("Você digitou um outro tipo");
}
