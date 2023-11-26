const cards = document.getElementById('cards__missao');

axios.get('missoes.json')
.then(( response ) => {
    const datalistMissoes = response.data.missoes;
    datalistMissoes
      .filter((missao) => missao.rascunho === false)
      .forEach((missao => {
        const ul = document.createElement('ul');
        cards.appendChild(ul);
  
        ul.innerHTML+= `<li>${missao.titulo}</li>`;
        ul.innerHTML+= `<li>${missao.categoria}</li>`;
        ul.innerHTML+= `<li>${missao.descricao}</li>`;
        ul.innerHTML+= `<li>${missao.dataSubmissao}</li>`;
      }))
}).catch(( err ) => {
  console.log(err);
});