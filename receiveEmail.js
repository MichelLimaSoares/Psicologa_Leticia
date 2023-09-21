document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obtém os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("yourMessage").value;
  
    // Aqui você pode adicionar a lógica para enviar esses dados para o servidor ou fazer outras ações, como enviar um email usando uma API de email.
  
    // Exemplo de exibição dos valores no console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  
    // Limpa os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("yourMessage").value = "";
});
  
document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault(); // Evita o envio padrão do formulário

// Obtém os valores dos campos do formulário
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("yourMessage").value;

// Cria um objeto FormData para enviar os dados
var formData = new FormData();
formData.append("name", name);
formData.append("email", email);
formData.append("subject", subject);
formData.append("message", message);

// Cria uma instância do objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configura a requisição AJAX
xhr.open("POST", "/url-do-seu-servidor-de-back-end", true);

// Define o cabeçalho da requisição
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// Manipula a resposta da requisição
xhr.onload = function() {
    if (xhr.status === 200) {
    // Requisição bem-sucedida, faça algo com a resposta, se necessário
    console.log(xhr.responseText);
    // Exemplo: exibir uma mensagem de sucesso para o usuário
    alert("Formulário enviado com sucesso!");
    } else {
    // A requisição falhou, faça algo para lidar com o erro, se necessário
    console.error(xhr.statusText);
    // Exemplo: exibir uma mensagem de erro para o usuário
    alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    }
};

// Envia a requisição AJAX com os dados do formulário
xhr.send(formData);
});
  
var imageLinks = document.getElementsByClassName('image-link');

for (var i = 0; i < imageLinks.length; i++) {
  var imageLink = imageLinks[i];
  var closeButton = imageLink.getElementsByClassName('close-button')[0];

  imageLink.addEventListener('click', function(event) {
    event.preventDefault();
    closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    closeButton.style.display = 'none';
  });
}
