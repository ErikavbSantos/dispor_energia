const cards = document.getElementById('cards__missao');

axios.get('missoes.json')
.then(( response ) => {
    const datalistMissoes = response.data.missoes;
    datalistMissoes
      .filter((missao) => missao.rascunho === false)
      .forEach((missao => {
        const ul = document.createElement('ul');
        cards.appendChild(ul);
        ul.id = missao.id;
        ul.classList.add ("missaocardindividual");
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
        
        ul.innerHTML+= `<li>${missao.id}</li>`;
        ul.innerHTML+= `<li>${missao.titulo}</li>`;
        ul.innerHTML+= `<li>${missao.categoria}</li>`;
        ul.innerHTML+= `<li>${missao.descricao}</li>`;
        ul.innerHTML+= `<li>${missao.dataSubmissao}</li>`;
        
        const button = document.getElementById("btn-selecionar")
        console.log(button)
        button.addEventListener("click", ()=>{
          console.log("oi");
          var minhaDiv = document.getElementById(missao.id);
          console.log(minhaDiv)
          /*minhaDiv.forEach((div) => {
            div.classList.add("bordaAtivada");
          })*/
          
          /*minhaDiv.style.border="2px solid red";*/
          
        } );
      }))

}).catch(( err ) => {
  console.log(err);
});


