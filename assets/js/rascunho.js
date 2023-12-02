const divRascunho = document.getElementById('rascunho');


axios.get('missoes.json')
  .then((response) => {
    const dataRascunho = response.data.missoes;

    dataRascunho
      .filter((rascunho) => rascunho.rascunho === true)
      .forEach((rascunho) => {
        const ul = document.createElement('ul');
        divRascunho.appendChild(ul);

        const div = document.createElement('div');
        ul.appendChild(div);
        div.classList.add('ul-img');

        //criando img do icone deletar
        const deleteIcon = document.createElement('img');
        deleteIcon.src = '/assets/img/icone_deletar.svg';
        deleteIcon.classList.add('delete-icon');
        

        //eventos do modal
        ul.addEventListener('click', (event) => {
          const clickedElement = event.target;
        
          if (clickedElement.classList.contains('delete-icon')) {
              console.log('Clicou no ícone');
              const modal = document.getElementById('modal');
              modal.style.display = 'block';


            //adicionar a lógica

            document.getElementById('cancelDelete').addEventListener('click', () => {
                console.log('clicou em cancelar')
                modal.style.display = 'none';
            });

            document.getElementById('confirmDelete').addEventListener('click', () => {
                console.log('clicou em deletar')
              
              //deleteRascunho(rascunho); // Supondo que exista uma função deleteRascunho
                modal.style.display = 'none'; // Fecha o modal após a confirmação
            });
          }
        });
       


        const editarIcon = document.createElement('a');
        editarIcon.href = 'form_rascunho.html';
        editarIcon.innerHTML = `<img src='/assets/img/icone editar.svg'>`; // Corrigi o caminho da imagem

        div.appendChild(editarIcon);
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