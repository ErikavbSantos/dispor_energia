const cards = document.getElementById('cards__missao');

axios.get('missoes.json')
.then(( response ) => {
    const datalistMissoes = response.data.missoes;
    datalistMissoes.map((missao) => {
              
      const ul = document.createElement('ul');
      cards.appendChild(ul);

      //const div = document.createElement('div');
      //ul.appendChild(div);
      //div.classList.add('ul-img');

      ul.innerHTML+= `<li>${missao.titulo}</li>`;
      ul.innerHTML+= `<li>${missao.categoria}</li>`;
      ul.innerHTML+= `<li>${missao.descricao}</li>`;
      ul.innerHTML+= `<li>${missao.dataSubmissao}</li>`;

    });
}).catch(( err ) => {
  console.log(err);
});