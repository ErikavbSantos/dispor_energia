document.getElementById("forms-missao")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    
    const clickedButton = event.submitter;
    if (clickedButton.tagName === "BUTTON" && clickedButton.id === "cadastrar-btn"){
        var valorRascunho = false;
    }
    else if(clickedButton.tagName === "BUTTON" && clickedButton.id === "rascunho-btn"){
        var valorRascunho = true;
    }

    /* function stringCapitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    } */

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let descricao = document.getElementById("descricao").value;
    let pontuacao = document.getElementById("pontuacao").value;
    let imgIcone = document.getElementById("img-icone").value;
    let tempo = document.getElementById("tempo").value;
    let tempoDate = new Date(tempo);
    let dadoInteresse = document.getElementById("dado-interesse").value;
    let frequencia = document.getElementById("frequencia").value;
    let oque = document.getElementById("oque").value;
    let como = document.getElementById("como").value;
    let quando = document.getElementById("quando").value;
    let onde = document.getElementById("onde").value;
    let estagioProgresso = document.getElementById("estagio").value;

    const dataAtual = new Date();

    if (tempoDate < dataAtual) {
        erroData.style.display = 'block'; // Exibe a mensagem de erro
        setTimeout(function() {
            erroData.style.display = 'none'; // Esconde a mensagem após 3 segundos
        }, 5000);
    }else{
        let dados = {
            nome: nome,
            categoria: categoria,
            descricao: descricao,
            pontuacao: pontuacao,
            imgIcone: imgIcone,
            tempo: tempoDate,
            dadoInteresse: dadoInteresse,
            frequencia: frequencia,
            oque: oque,
            como: como,
            quando: quando,
            onde: onde,
            estagioProgresso: estagioProgresso,
            rascunho: valorRascunho,
          };
      
          let dadosJSON = JSON.stringify(dados);
      
          console.log(dadosJSON);
    }
    
    
    
  });


  document.getElementById('img-icone').addEventListener('change', function() {
    const fileLabel = document.getElementById('label-file');

    if (this.files.length > 0) {
        fileLabel.textContent = "Arquivo selecionado";
    } 
});
