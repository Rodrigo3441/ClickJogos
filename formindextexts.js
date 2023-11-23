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
    e.target.setCustomValidity("Coloque seu E-Mail terminado em @gmail.com, @hotmail.com ou @outlook.com");
  }
};

