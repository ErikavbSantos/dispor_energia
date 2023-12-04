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



const divBtn = document.querySelector(".buttons-form");

axios
  .get("http://localhost:8080/listaMissao")
  .then((response) => {
    const dataRascunho = response.data;
    dataRascunho
      .filter((rascunho) => rascunho.rascunho)
    
        const btn_rascunho = document.querySelector(".rascunho-btn");
        const btn_cadastrar = document.querySelector(".cadastrar");


        btn_rascunho.addEventListener("click", (event) => {
         console.log("clicou no rascunho")

            axios
              .put(`http://localhost:8080/missao/${rascunho.id}`, rascunho)
              .then((response) => console.log(response));
                
        });

        btn_cadastrar.addEventListener("click", (event) => {
          console.log("clicou no cadastrar")
 
             axios
                .put(`http://localhost:8080/missao/${rascunho.id}`, rascunho)
                .then((response) => console.log(response));
        })
  })


