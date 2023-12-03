const parametros = new URLSearchParams(window.location.search);

// Obtém os valores individualmente
const nome = parametros.get("nome");
const categoria = parametros.get("categoria");
const descricao = parametros.get("descricao");
const onde = parametros.get("onde");
const quando = parametros.get("quando");
const como = parametros.get("como");
const dado = parametros.get("dado");
const frequencia = parametros.get("frequencia");
const tempo = parametros.get("tempo");
const oque = parametros.get("oque");
const estagio = parametros.get("estagio");
const pontuacao = parametros.get("pontuacao");

const inputNome = document.getElementById("nome");
inputNome.value = nome;
const inputCategoria = document.getElementById("categoria");
inputCategoria.value = categoria;
const inputDescricao = document.getElementById("descricao");
inputDescricao.value = descricao;

const inputOnde = document.getElementById("onde");
inputOnde.value = onde;

const inputQuando = document.getElementById("quando");
inputQuando.value = quando;
const inputComo = document.getElementById("como");
inputComo.value = como;
const inputDado = document.getElementsById("dado");
inputDado.value = dado;
const inputFrequencia = document.getElementsById("frequencia");
inputFrequencia.value = frequencia;
const inputTempo = document.getElementById("tempo");
inputTempo.value = tempo;
const inputOque = document.getElementById("oque");
inputOque.value = oque;
const inputEstagio = document.getElementById("estagio");
inputEstagio.value = estagio;
const inputPontuacao = document.getElementById("pontuacao");
inputPontuacao.value = pontuacao;

console.log(
  oque,
  como,
  onde,
  quando,
  dado,
  frequencia,
  tempo,
  estagio,
  pontuacao
);
