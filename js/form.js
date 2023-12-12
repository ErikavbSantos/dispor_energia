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
    ) 
    {
      var valorRascunho = true;
    }

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let descricao = document.getElementById("descricao").value;
    let imgIcone = document.getElementById("picture__input").value;
    let tempo = document.getElementById("tempo").value;
    let dadoInteresse = document.getElementById("dado-interesse").value;
    let frequencia = document.getElementById("frequencia").value;
    let oque = document.getElementById("orientacao1").value;
    let como = document.getElementById("orientacao2").value;
    let quando = document.getElementById("orientacao3").value;
    let onde = document.getElementById("orientacao4").value;
    let estagioProgresso = document.getElementById("estagio").value;


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
        const modal_aprovado = document.getElementById('modal-aprovado');
        modal_aprovado.style.display = 'block';

        document.getElementById('close-aprovado').addEventListener('click', () => {
        modal_aprovado.style.display = 'none';
        });
      });
  });



const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
pictureImage.innerText = "Choose a image";


inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = "Choose a image";
  }
});