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

const inputImg = document.getElementById("img-icone");
inputImg.src = img;

const inputNome = document.getElementById("nome");
inputNome.value = nome;
const inputCategoria = document.getElementById("categoria");
inputCategoria.value = categoria;
const inputDescricao = document.getElementById("descricao");
inputDescricao.value = descricao;

const inputOnde = document.getElementById("orientacao4");
inputOnde.value = onde;
const inputQuando = document.getElementById("orientacao3");
inputQuando.value = quando;
const inputComo = document.getElementById("orientacao2");
inputComo.value = como;
const inputDado = document.getElementById("dado-interesse");
inputDado.value = dado;
const inputFrequencia = document.getElementById("frequencia");
inputFrequencia.value = frequencia;
const inputTempo = document.getElementById("tempo");
inputTempo.value = tempo;
const inputOque = document.getElementById("orientacao1");
inputOque.value = oque;
const inputEstagio = document.getElementById("estagio");
inputEstagio.value = estagio;
/* const inputPontuacao = document.getElementById("pontuacao");
inputPontuacao.value = pontuacao; */



//evento de update no form de rascunho
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir o comportamento padrão do formulário

  const clickedButton = event.submitter;
  if (
    clickedButton.tagName === "BUTTON" &&
    clickedButton.id === "cadastrar-btn-form"
  ) {
    var valorRascunho = false;
  } else if (
    clickedButton.tagName === "BUTTON" &&
    clickedButton.id === "rascunho-btn-form"
  ) {
    var valorRascunho = true;
  }
  const updatedData = {
    nome_missao: inputNome.value,
    categoria: inputCategoria.value,
    descricao: inputDescricao.value,
    pontuacao: pontuacao,
    tempo_execucao: inputTempo.value,
    dado: inputDado.value,
    frequencia_reativacao: inputFrequencia.value,
    orientacao1: inputOque.value,
    orientacao2: inputComo.value,
    orientacao3: inputQuando.value,
    orientacao4: inputOnde.value,
    progresso: inputEstagio.value,
    img: inputImg.value,
    rascunho: valorRascunho,
    progresso_avaliacao: "",
    pre_requisito: "",

  };

  axios
    .put(`http://localhost:8080/missao/${rascunhoId}`, updatedData)
    .then((response) => {
      const modal_aprovado = document.getElementById('modal-aprovado');
      modal_aprovado.style.display = 'block';

      document.getElementById('close-aprovado').addEventListener('click', () => {
        modal_aprovado.style.display = 'none';
      });
    })
    .catch((error) => console.error(error));
});


document.getElementById("img-icone").addEventListener("change", function () {
  const fileLabel = document.getElementById("label-file");

  if (this.files.length > 0) {
    fileLabel.textContent = "Arquivo selecionado";
  }
});