const parametros = new URLSearchParams(window.location.search);

// Obtém os valores individualmente
const nome = parametros.get("nome");
const categoria = parametros.get("categoria");
const descricao = parametros.get("descricao");
const pontuacao = parametros.get("pontuacao");
const tempo = parametros.get("tempo");
const dado = parametros.get("dado");
const frequencia = parametros.get("frequencia");
const oque = parametros.get("orientacao1");
const como = parametros.get("orientacao2");
const quando = parametros.get("orientacao3");
const onde = parametros.get("orientacao4");
const estagio = parametros.get("estagio");
const rascunhoId = parametros.get("id");
const img = parametros.get("img");

const inputImg = document.getElementById("img-ava");
inputImg.src = img;

/* const imageLinkInput = document.getElementById('imageLinkInput');
const previewImage = document.getElementById('previewImage');

imageLinkInput.value = img;
previewImage.src = img; */

const inputNome = document.getElementById("nome-ava");
inputNome.value = nome;
const inputCategoria = document.getElementById("categoria-ava");
inputCategoria.value = categoria;
const inputDescricao = document.getElementById("desc-missao");
inputDescricao.value = descricao;

const inputOnde = document.getElementById("orien4-ava");
inputOnde.value = onde;
const inputQuando = document.getElementById("orien3-ava");
inputQuando.value = quando;
const inputComo = document.getElementById("orien2-ava");
inputComo.value = como;
const inputDado = document.getElementById("dado-ava");
inputDado.value = dado;
const inputFrequencia = document.getElementById("frequencia-ava");
inputFrequencia.value = frequencia;
const inputTempo = document.getElementById("tempo-ava");
inputTempo.value = tempo;
const inputOque = document.getElementById("orien1-ava");
inputOque.value = oque;
const inputEstagio = document.getElementById("estagio-ava");
inputEstagio.value = estagio;

