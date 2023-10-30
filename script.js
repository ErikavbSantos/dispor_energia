window.onclick = function(event) {
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
 }

 if (tipoUser == 'default'){
    alert('Por favor, selecione uma categoria de usuario.')

    window.location.reload()
 }
 
}