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
 
}  */

          



  async function preencherFormulario(dados) {
    for (let campo in dados) {
      if (dados.hasOwnProperty(campo)) {
        const elemento = document.getElementById(campo);

        if (elemento) {
          if (dados[campo].campo === 'inputtext') {
            elemento.value = dados[campo].valor;
          } else if (dados[campo].campo === 'inputimage') {
            elemento.src = dados[campo].valor;
          } else if (dados[campo].campo === 'radio') {
            // Aqui, verificamos se o valor do campo é igual ao valor do radio button
            if (elemento.value === dados[campo].valor) {
              elemento.checked = true;

              // Adicionamos uma classe ao elemento com base no valor do status
              if (dados[campo].valor === 'Aprovado') {
                elemento.classList.add('aprovado');
              } else if (dados[campo].valor === 'Rejeitado') {
                elemento.classList.add('rejeitado');
              } else if (dados[campo].valor === 'Aprovado com ressalvas') {
                elemento.classList.add('ressalvas');
              }
            }
          }
        }
      }
    }

    const form = document.getElementById('avaliacaoForm');

    if (form) {
      // Adicionar evento para enviar o formulário quando houver uma mudança
      form.addEventListener('change', function () {
        window.location.href = `/${form.getAttribute('action')}?${new URLSearchParams(new FormData(form)).toString()}`;
      });
    }
  }


  //Recebendo dados mocados e enviando para formulario do avaliador

  document.addEventListener("DOMContentLoaded", function () {
    fetch('dadosMissoes.json')
        .then(response => response.json())
        .then(data => preencherFormulario(data))
        .catch(error => console.error('Erro ao carregar dados:', error));
  });
  //axios.get('dadosMissoes.json').then((response) => preencherFormulario(response.data)).cath((error) => console.error('Erro ao carregar dados:', error))

  async function preencherFormulario(dados) {
    for (let campo in dados) {
        if (dados.hasOwnProperty(campo)) {
            const elemento = document.querySelector(`[name="${campo}"]`);

            if (elemento) {
                if (campo !== 'pontuacao') {
                    elemento.value = dados[campo];
                } else {
                    // Se for o campo 'pontuacao' (icone), você pode precisar ajustar isso
                    elemento.src = dados[campo];
                }
            }
        }
    }

    const form = document.getElementById('avaliacaoForm');
    
    if (form) {
        // Adicionar evento para enviar o formulário quando houver uma mudança
        form.addEventListener('change', function() {
            window.location.href = `/${form.getAttribute('action')}?${new URLSearchParams(new FormData(form)).toString()}`;
        });
    }
  }

  
  
