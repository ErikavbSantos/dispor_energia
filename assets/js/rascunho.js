const divRascunho = document.getElementById('rascunho');

fetch("missoes.json").then((response)=> {
    response.json().then((dados) => {
        const dataRascunho = dados.missoes;
        dataRascunho.map((rascunho) => {
            

          const ul = document.createElement('ul');
          divRascunho.appendChild(ul);

          const div = document.createElement('div');
          ul.appendChild(div);
          div.classList.add('ul-img');

          div.innerHTML+= `<a href="teste.html"><img src='/assets/img/icone editar.svg'></a>`;
          div.innerHTML+= `<img src='/assets/img/icone deletar.svg'>`;

          ul.innerHTML+= `<li>Data: <span>${rascunho.dataSubmissao}</span></li>`;
          ul.innerHTML+= `<li>Título: <span>${rascunho.titulo}</span></li>`;
          ul.innerHTML+= `<li>Categoria: <span>${rascunho.categoria}</span></li>`;
          ul.innerHTML+= `<li>Descrição: <span>${rascunho.descricao}</span></li>`;

        }
    )})
})

//pesquisa 

const inputSearchRascunho = document.querySelector('#filter-rascunho');

function searchRascunho() {
      const data = inputSearchRascunho.value.toLowerCase();
      const rascunhoPesquisa = document.querySelector('.rascunho');
      const uls = rascunhoPesquisa.querySelectorAll('ul');

      uls.forEach((ul, index) => {
          
        if ( ul.textContent.toLowerCase().includes(data)) {
          ul.style.display = 'grid';
        } else {
          ul.style.display = 'none';
        }
      });
};
inputSearchRascunho.addEventListener('input', searchRascunho);