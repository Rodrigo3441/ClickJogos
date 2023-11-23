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

document.getElementById("email").oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Coloque seu E-Mail");
  }
};

//validar email

 function validarEmail() {
            var emailInput = document.getElementById("email");
            var email = emailInput.value;
            var regex = /@(gmail\.com|hotmail\.com|outlook\.com)$/;

            if (!regex.test(email)) {
                alert("Por favor, insira um e-mail válido do tipo: @gmail.com, @hotmail.com ou @outlook.com.");
                // Limpar o campo de e-mail se for inválido
                emailInput.value = "";
                return false; // Impede o envio do formulário
            }

            return true; // Permite o envio do formulário se o e-mail for válido
        }