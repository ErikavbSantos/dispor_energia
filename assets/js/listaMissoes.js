const cards = document.getElementById('cards__missao');

axios.get('missoes.json')
.then(( response ) => {
    const datalistMissoes = response.data.missoes;
    datalistMissoes
      .filter((missao) => missao.rascunho === false)
      .forEach((missao => {
        const ul = document.createElement('ul');
        cards.appendChild(ul);

        //criando div do overlay
        const div = document.createElement('div');
        ul.appendChild(div);
        //adicionando classe na div
        div.classList.add('overlay');

        //adicionando botões na div
        div.innerHTML += `<div class='btn-overlay'>
          <button id="btn-detalhes">Detalhes</button>
          <button id="btn-selecionar">Selecionar</button></div>
      `;
  
        ul.innerHTML+= `<li>${missao.titulo}</li>`;
        ul.innerHTML+= `<li>${missao.categoria}</li>`;
        ul.innerHTML+= `<li>${missao.descricao}</li>`;
        ul.innerHTML+= `<li>${missao.dataSubmissao}</li>`;
      }))

}).catch(( err ) => {
  console.log(err);
});