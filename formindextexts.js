document.getElementById("contact_name").oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Digite seu nome");
  }
};
document.getElementById("contact_subject").oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Coloque um assunto");
  }
};
document.getElementById("contact_message").oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Coloque sua mensagem");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("Nova_mensagem");
  const enviarBotao = document.getElementById("enviarBotao");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Aqui você pode adicionar código para enviar os dados do formulário para o servidor, se necessário

    // Redireciona para a página desejada
    window.location.href = "index.html";
  });
});