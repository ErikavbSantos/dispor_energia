/* window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
} 

const file = document.querySelector('#img-icone');
const label = document.querySelector("label[for='img-icone']");

file.addEventListener('change', () =>{
    label.style.background = "#F3F3F3";
    label.style.color = "#111";
    label.style.fontSize = "14px";
    const fileName = file.files[0].name;
    label.textContent = fileName;
})

var enviar = document.getElementById('enviar')

 async function validar(){

 var usuario = 'teste@gmail.com'
 var senha = 'teste'

 var user = document.getElementById('username').value
 var password = document.getElementById('password').value
 var tipoUser = document.getElementById('role').value
 


 if (user == usuario && password == senha){
 window.location.href = 'index.html'

 }

 else{
    alert('Credenciais invalidas.');
    window.location.reload()
 }

 if (tipoUser == 'default'){
    alert('Por favor, selecione uma categoria de usuario.')

    window.location.reload()
 }
 
} */

//PÁGINA STATUS DE MISSÃO

const inputSearch = document.querySelector('#search-filter');

function searchEstilo() {
    const data = inputSearch.value.toLowerCase();
    const items = document.querySelector('table');
    const trs = items.querySelectorAll('tr');
  
    trs.forEach((tr, index) => {
      if (index > 0) {
        if (window.innerWidth < 600) {
          tr.style.display = 'flex';
        } else {
          tr.style.display = 'table-row';
        }
  
        if (window.innerWidth < 600 && tr.textContent.toLowerCase().includes(data)) {
          tr.style.display = 'flex';
        } else if (window.innerWidth >= 600 && tr.textContent.toLowerCase().includes(data)) {
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

fetch("missoes.json").then((response)=> {
    response.json().then((dados) => {
        const data = dados.missoes;
        data.map((missao) =>{ //ele se repete até acabar
            const tr = document.createElement('tr')
            tbody.appendChild(tr);
            tr.innerHTML+= `<td data-label="ID"> ${missao.id} </td>`;
            tr.innerHTML+= `<td data-label="TÍTULO"> ${missao.titulo} </td>`;
            tr.innerHTML+= `<td data-label="DATA DE SUBMISSÃO"> ${missao.dataSubmissao} </td>`;
            tr.innerHTML+= `<td data-label="STATUS"> <div> ${missao.status}</div> </td>`;
            
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
        
    })
})

// Função para desabilitar todos os checkbox, exceto um
function desabilitarCheckboxExcetoUm(nomeDoCampo) {
  // Obtém todos os checkbox do campo
  const checkboxs = document.querySelectorAll(`input[name="${nomeDoCampo}"]`);

  // Desabilita todos os checkbox
  checkboxs.forEach((checkbox) => {
    checkbox.disabled = true;
  });

  // Habilita o primeiro checkbox
  checkboxs[0].disabled = false;
}

// Ouvinte de evento para o click de um checkbox
document.addEventListener("click", (event) => {
  // Verifica se o evento foi causado por um checkbox
  if (event.target.type === "checkbox") {
    // Obtém o nome do campo do checkbox
    const nomeDoCampo = event.target.name;

    // Chama a função para desabilitar todos os checkbox, exceto um
    desabilitarCheckboxExcetoUm(nomeDoCampo);
  }
});
