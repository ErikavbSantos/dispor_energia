const inputSearch = document.querySelector('#search-filter');

function searchEstilo() {
    const data = inputSearch.value.toLowerCase();
    const items = document.querySelector('table');
    const trs = items.querySelectorAll('tr');
    
    trs.forEach((tr, index) => {
          
    if (index > 0) {

        const valueSearch = tr.textContent.toLowerCase().includes(data);
        const isMobile = window.innerWidth < 600;

        if (isMobile) {
            tr.style.display = 'flex';
        } else {
            tr.style.display = 'table-row';
        }

        if (isMobile && valueSearch) {
            tr.style.display = 'flex';
        } else if (window.innerWidth >= 600 && valueSearch) {
            tr.style.display = 'table-row';
        } else {
            tr.style.display = 'none';
        }
    }
    });
} 


inputSearch.addEventListener('input', searchEstilo);
window.addEventListener('resize', searchEstilo);

searchEstilo(); 

const tbody = document.querySelector('tbody');

axios.get('missoes.json')
.then((response) =>{
    const dados = response.data.missoes;
    dados
        .filter((missao) => missao.rascunho === true)
        .forEach((missao) => {
            const tr = document.createElement('tr')
            tbody.appendChild(tr);
            tr.innerHTML+= `<td data-label="ID"> ${missao.id} </td>`;
            tr.innerHTML+= `<td data-label="TÍTULO"> ${missao.titulo} </td>`;
            tr.innerHTML+= `<td data-label="DATA DE SUBMISSÃO"> ${missao.dataSubmissao} </td>`;
            tr.innerHTML+= `<td data-label="STATUS"> <div> ${missao.status}</div> </td>`;

            //quando clicar na linha da tabela vai abrir um modal
            tr.addEventListener('click', () => {
                console.log('clicou na linha')
                //abre o modal que estiver com status aprovado
                if (missao.status === "Aprovado"){
                    console.log('clicou em aprovado')
                    const modal_aprovado = document.getElementById('modal-aprovado');
                    modal_aprovado.style.display = 'block';


                    //fechar modal quando clicar em fechar
                    document.getElementById('close-aprovado').addEventListener('click', () => {
                        console.log('clicou em cancelar')
                        modal_aprovado.style.display = 'none';
                        modal_rejeitado.style.display = 'none';
                        modal_aprovadoR.style.display = 'none';
                    });
                }
                //abre o modal que estiver com status rejeitado
                else if(missao.status === "Rejeitado"){
                    const modal_rejeitado = document.getElementById('modal-rejeitado');
                    modal_rejeitado.style.display = 'block';

                    //fechar modal quando clicar em fechar
                    document.getElementById('close-rejeitado').addEventListener('click', () => {
                        modal_rejeitado.style.display = 'none';
                    });
                }
                //abre o modal que estiver com status aprovado com ressalvas
                else if(missao.status === "Aprovado com ressalvas"){
                    const modal_aprovadoR = document.getElementById('modal-aprovadoR');
                    modal_aprovadoR.style.display = 'block';

                    //fechar modal quando clicar em fechar
                    document.getElementById('close-aprovadoR').addEventListener('click', () => {
                        modal_aprovadoR.style.display = 'none';
                    });
                }
                
            })
            
            const div = tr.querySelector('td div');
            if (missao.status === "Aprovado"){
            div.style.backgroundColor = "#84C382";
            }
            else if(missao.status === "Aprovado com ressalvas"){
                div.style.backgroundColor = "#DBC86C";
            }
            else if(missao.status === "Rejeitado"){
                div.style.backgroundColor = "#DD3F3F";
            }
            else{
                div.style.backgroundColor = "#04473A";
          }
    })      
}).catch((err) =>{
    console.log(err);
})