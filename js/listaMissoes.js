const cards = document.getElementById("cards__missao");

axios
  .get("http://localhost:8080/listaMissao")
  .then((response) => {
    const datalistMissoes = response.data;
    let selecionada = 0;
    datalistMissoes
      .filter((missao) => !missao.rascunho)
      .forEach((missao) => {
        const ul = document.createElement("ul");
        cards.appendChild(ul);

        //ul.id = missao.id;
        ul.classList.add("missaocardindividual");

        //criando div do overlay
        const div = document.createElement("div");
        ul.appendChild(div);

        //adicionando classe na div
        div.classList.add("overlay");

        //adicionando botões na div
        div.innerHTML += `<div class='btn-overlay'>
          <a><button id="btn-detalhes">Detalhes</button></a>
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
          } else if (
            clicked.tagName === "BUTTON" &&
            clicked.id === "btn-detalhes"
          ) {
            console.log("clicou");

            //const linkDetalhes = document.getElementById("btn-a");

            const urlDetalhes = `avaliacaoMissao.html?nome=${encodeURIComponent(
              missao.nome_missao
            )}&categoria=${encodeURIComponent(
              missao.categoria
            )}&descricao=${encodeURIComponent(
              missao.descricao
            )}&pontuacao=${encodeURIComponent(
              missao.pontuacao
            )}&tempo=${encodeURIComponent(
              missao.tempo_execucao
            )}&dado=${encodeURIComponent(
              missao.dado
            )}&frequencia=${encodeURIComponent(
              missao.frequencia_reativacao
            )}&orientacao1=${encodeURIComponent(
              missao.orientacao1
            )}&orientacao2=${encodeURIComponent(
              missao.orientacao2
            )}&orientacao3=${encodeURIComponent(
              missao.orientacao3
            )}&orientacao4=${encodeURIComponent(
              missao.orientacao4
            )}&estagio=${encodeURIComponent(
              missao.progresso
            )}&img=${encodeURIComponent(missao.img)}&id=${encodeURIComponent(
              missao.id
            )}`;

            window.location.href = urlDetalhes;
          }
        });
        
      });
  })
  .catch((err) => {
    console.log(err);
  });
