const cards = document.getElementById("cards__missao");

axios
  .get("http://localhost:8080/listaMissao")
  .then((response) => {
    const datalistMissoes = response.data;
    console.log(datalistMissoes);
    let selecionada = 0;
    datalistMissoes
      .filter((missao) => !missao.rascunho)
      .forEach((missao) => {
        const ul = document.createElement("ul");
        cards.appendChild(ul);

        ul.id = missao.id;
        ul.classList.add("missaocardindividual");

        //criando div do overlay
        const div = document.createElement("div");
        ul.appendChild(div);

        //adicionando classe na div
        div.classList.add("overlay");

        //adicionando botões na div
        div.innerHTML += `<div class='btn-overlay'>
          <button id="btn-detalhes">Detalhes</button>
          <button id="btn-selecionar">Selecionar</button></div>
      `;

        ul.innerHTML += `<li>${missao.nome_missao}</li>`;
        ul.innerHTML += `<li>${missao.categoria}</li>`;
        ul.innerHTML += `<li>${missao.descricao}</li>`;
        ul.innerHTML += `<li>${missao.data_criacao}</li>`;

        ul.addEventListener("click", (event) => {
          const clicked = event.target;

          if (clicked.tagName === "BUTTON" && clicked.id === "btn-selecionar") {
            const ulPai = clicked.closest("ul");
            ulPai.classList.toggle("bordaAtivada");

            if (missao.selected) {
              missao.selected = false;
              selecionada -= 1;
            } else {
              missao.selected = true;
              selecionada += 1;
              console.log(selecionada);
            }
            const seleciona = document.querySelector(".selecionada");
            seleciona.innerHTML = ` ${selecionada}`;
          }
        });
      });
  })
  .catch((err) => {
    console.log(err);
  });
