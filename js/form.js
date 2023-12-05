document
  .getElementById("forms-missao")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const clickedButton = event.submitter;
    if (
      clickedButton.tagName === "BUTTON" &&
      clickedButton.id === "cadastrar-btn"
    ) {
      var valorRascunho = false;
    } else if (
      clickedButton.tagName === "BUTTON" &&
      clickedButton.id === "rascunho-btn"
    ) {
      var valorRascunho = true;
    }

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let descricao = document.getElementById("descricao").value;
    let pontuacao = document.getElementById("pontuacao").value;
    let imgIcone = document.getElementById("img-icone").value;
    let tempo = document.getElementById("tempo").value;
    let dadoInteresse = document.getElementById("dado-interesse").value;
    let frequencia = document.getElementById("frequencia").value;
    let oque = document.getElementById("orientacao1").value;
    let como = document.getElementById("orientacao2").value;
    let quando = document.getElementById("orientacao3").value;
    let onde = document.getElementById("orientacao4").value;
    let estagioProgresso = document.getElementById("estagio").value;

    const dataAtual = new Date();

    /*  if (tempo < dataAtual) {
      erroData.style.display = "block"; // Exibe a mensagem de erro
      setTimeout(function () {
        erroData.style.display = "none"; // Esconde a mensagem após 3 segundos
      }, 5000);
    } else { */
    let dados = {
      frequencia_reativacao: frequencia,
      nome_missao: nome,
      categoria: categoria,
      img: imgIcone,
      descricao: descricao,
      tempo_execucao: tempo,
      dado: dadoInteresse,
      progresso: estagioProgresso,
      orientacao1: oque,
      orientacao2: como,
      orientacao3: quando,
      orientacao4: onde,
      rascunho: valorRascunho,
      progresso_avaliacao: "",
      pre_requisito: "",
    };

    console.log(dados);

    axios
      .post("http://localhost:8080/missao/1", dados, {})
      .then(function (response) {
        console.log(response);
      });
  });

document.getElementById("img-icone").addEventListener("change", function () {
  const fileLabel = document.getElementById("label-file");

  if (this.files.length > 0) {
    fileLabel.textContent = "Arquivo selecionado";
  }
});
