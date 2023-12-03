const divRascunho = document.getElementById("rascunho");

axios
  .get("missoes.json")
  .then((response) => {
    const dataRascunho = response.data.missoes;

    dataRascunho
      .filter((rascunho) => rascunho.rascunho === true)
      .forEach((rascunho) => {
        const ul = document.createElement("ul");
        divRascunho.appendChild(ul);

        const div = document.createElement("div");
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

                //deleteRascunho(rascunho); // Supondo que exista uma função deleteRascunho
                modal.style.display = "none"; // Fecha o modal após a confirmação
              });
          }
        });

        const editarIcon = document.createElement("a");
        editarIcon.classList.add("icone-editar");
        editarIcon.href = `form_rascunho.html?nome=${encodeURIComponent(
          rascunho.titulo
        )}&categoria=${encodeURIComponent(
          rascunho.categoria
        )}&descricao=${encodeURIComponent(
          rascunho.descricao
        )}&pontuacao=${encodeURIComponent(
          rascunho.pontuacao
        )}&tempoLimite=${encodeURIComponent(
          rascunho.tempoLimite
        )}&dado=${encodeURIComponent(
          rascunho.dado
        )}&frequencia=${encodeURIComponent(
          rascunho.frequencia
        )}&oque=${encodeURIComponent(rascunho.oque)}&como=${encodeURIComponent(
          rascunho.como
        )}&quando=${encodeURIComponent(
          rascunho.quando
        )}&onde=${encodeURIComponent(
          rascunho.onde
        )}&estagio=${encodeURIComponent(rascunho.estagio)}`;

        editarIcon.innerHTML = `<img src='/assets/img/icone editar.svg'>`; // Corrigi o caminho da imagem
        /* editarIcon.setAttribute("data-nome", rascunho.titulo);
        editarIcon.setAttribute("data-categoria", rascunho.categoria);
        editarIcon.setAttribute("data-descricao", rascunho.descricao); */

        div.appendChild(editarIcon);

        /* ul.addEventListener("click", (event) => {
          const clickedLink = event.target.closest("a");

          if (clickedLink && clickedLink.classList.contains("icone-editar")) {
            const elementoPai = clickedLink.closest("ul");
            elementoPai.id = rascunho.id;
            const nome = clickedLink.getAttribute("data-nome");
            const categoria = clickedLink.getAttribute("data-categoria");
            const descricao = clickedLink.getAttribute("data-descricao");
            console.log(nome, categoria, descricao);
            window.location.href = `form_rascunho.html?nome=${nome}&categoria=${categoria}&descricao=${descricao}`;
          }
        }); */

        div.appendChild(deleteIcon);

        ul.innerHTML += `<li>Data: <span>${rascunho.dataSubmissao}</span></li>`;
        ul.innerHTML += `<li>Título: <span>${rascunho.titulo}</span></li>`;
        ul.innerHTML += `<li>Categoria: <span>${rascunho.categoria}</span></li>`;
        ul.innerHTML += `<li>Descrição: <span>${rascunho.descricao}</span></li>`;
      });
  })
  .catch((err) => {
    console.log(err);
  });

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
