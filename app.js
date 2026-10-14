
console.log("===== BLOCO 1: VARIÁVEIS E TIPOS =====");

// 1. Variável pontos
let pontos = 20;
pontos = pontos + 10;
console.log("Pontos:", pontos);

// 2. Constante e tentativa de reatribuição
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

try {
  MAX_PONTOS = 150;
} catch (erro) {
  console.log("Erro:", erro.name);
  console.log("Motivo: const não permite reatribuição.");
}

// 3. Tipos primitivos
const texto = "Olá, JavaScript!";
const numero = 42;
const ativo = true;
let semValor;
const valorNulo = null;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof ativo);
console.log(typeof semValor);
console.log(typeof valorNulo); // "object" por um bug histórico

// 4. Template Literals e concatenação
const nome = "João Gabriel";
const curso = "Engenharia da Computação";

console.log(`Meu nome é ${nome} e estudo ${curso}.`);
console.log("Meu nome é " + nome + " e estudo " + curso + ".");


console.log("===== BLOCO 2: FUNÇÕES =====");

// 1. Função declarada e hoisting
console.log(ehMaiorDeIdade(20));
console.log(ehMaiorDeIdade(16));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2. Função de expressão e ReferenceError
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log("Erro:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(20));

// 3. Dobro nas três formas
function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log(dobroDeclarada(5));
console.log(dobroExpressao(5));
console.log(dobroArrow(5));

// 4. Parâmetro com valor padrão
function dobroComPadrao(n = 1) {
  return n * 2;
}

console.log(dobroComPadrao(6));
console.log(dobroComPadrao());


console.log("===== BLOCO 3: CONTROLE DE FLUXO =====");

// 1. Classificação da nota
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(classificarNota(8));
console.log(classificarNota(4));

// 2. Semáforo com switch
const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3. Tabuada do 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva
let contagem = 5;

while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}

// 5. Pares e ímpares com for
for (let i = 1; i <= 20; i++) {
  console.log(i, i % 2 === 0 ? "par" : "ímpar");
}

// 6. Pares e ímpares com while
let atual = 1;

while (atual <= 20) {
  console.log(atual, atual % 2 === 0 ? "par" : "ímpar");
  atual++;
}

// 7. Dia da semana com switch
function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido";
  }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));

console.log("===== FIM DA ATIVIDADE =====");
