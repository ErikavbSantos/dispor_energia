const divRascunho = document.getElementById("rascunho");

axios
  .get("http://localhost:8080/listaMissao")
  .then((response) => {
    const dataRascunho = response.data;

    dataRascunho
      .filter((rascunho) => rascunho.rascunho)
      .forEach((rascunho, index) => {
        const ul = document.createElement("ul");
        divRascunho.appendChild(ul);

        ul.id = rascunho.id;
        ul.classList.add ("rascunhoCard");

        const div = document.createElement('div');
        ul.appendChild(div);
        div.classList.add("ul-img");

        //criando img do icone deletar
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "/assets/img/icone_deletar.svg";
        deleteIcon.classList.add("delete-icon");

        //eventos do modal
        ul.addEventListener("click", (event) => {
          const clickedElement = event.target;

          if (clickedElement.classList.contains("delete-icon")) {
            console.log("Clicou no ícone");
            const modal = document.getElementById("modal");
            modal.style.display = "block";

            //adicionar a lógica

            document
              .getElementById("cancelDelete")
              .addEventListener("click", () => {
                console.log("clicou em cancelar");
                modal.style.display = "none";
              });

            document
              .getElementById("confirmDelete")
              .addEventListener("click", () => {
                console.log("clicou em deletar");

                const rascunhoId = event.target.closest("ul").id;
                deleteRascunho(rascunhoId);
                modal.style.display = "none"; // Fecha o modal após a confirmação
              });
          }
        });

        const editarIcon = document.createElement("a");
        editarIcon.classList.add("icone-editar");
        editarIcon.id = "btn-editar";
        editarIcon.innerHTML = `<img src='/assets/img/icone editar.svg'>`;

        editarIcon.href = `form_rascunho.html?nome=${encodeURIComponent(
          rascunho.nome_missao
        )}&categoria=${encodeURIComponent(
          rascunho.categoria
        )}&descricao=${encodeURIComponent(
          rascunho.descricao
        )}&pontuacao=${encodeURIComponent(
          rascunho.pontuacao
        )}&tempo=${encodeURIComponent(
          rascunho.tempo_execucao
        )}&dado=${encodeURIComponent(
          rascunho.dado
        )}&frequencia=${encodeURIComponent(
          rascunho.frequencia_reativacao
        )}&orientacao1=${encodeURIComponent(
          rascunho.orientacao1
        )}&orientacao2=${encodeURIComponent(
          rascunho.orientacao2
        )}&orientacao3=${encodeURIComponent(
          rascunho.orientacao3
        )}&orientacao4=${encodeURIComponent(
          rascunho.orientacao4
        )}&estagio=${encodeURIComponent(
          rascunho.progresso
        )}&img-icone=${encodeURIComponent(rascunho.img)}`;

        

        /* editarIcon.addEventListener("click", () => {

          

          axios
            .put(`http://localhost:8080/missao/${rascunho.id}`, rascunho)
            .then((response) => console.log(response));
        });
 */

        // Corrigi o caminho da imagem

        div.appendChild(editarIcon);
        div.appendChild(deleteIcon);

        ul.innerHTML += `<li>Data: <span>${rascunho.data_criacao}</span></li>`;
        ul.innerHTML += `<li>Título: <span>${rascunho.nome_missao}</span></li>`;
        ul.innerHTML += `<li>Categoria: <span>${rascunho.categoria}</span></li>`;
        ul.innerHTML += `<li>Descrição: <span>${rascunho.descricao}</span></li>`;
      });
  })
  .catch((err) => {
    console.log(err);
  });

/*function deleteRascunho() { //MUITO redundante
  const apiUrl = `http://localhost:8080/missao/${rascunhoId}`; //muito redundante
  
  axios.delete(apiUrl)
    .then((response) => {
      console.log("Rascunho deletado com sucesso!");
      })
    .catch((error) => {
      console.error("Erro ao deletar rascunho:", error);
    });
  }*/

//pesquisa

const inputSearchRascunho = document.querySelector("#filter-rascunho");

function searchRascunho() {
  const data = inputSearchRascunho.value.toLowerCase();
  const rascunhoPesquisa = document.querySelector(".rascunho");
  const uls = rascunhoPesquisa.querySelectorAll("ul");

  uls.forEach((ul, index) => {
    if (ul.textContent.toLowerCase().includes(data)) {
      ul.style.display = "grid";
    } else {
      ul.style.display = "none";
    }
  });
}
inputSearchRascunho.addEventListener("input", searchRascunho);
