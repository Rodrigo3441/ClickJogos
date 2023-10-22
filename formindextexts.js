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

function mostrarAlerta(){
	window.alert("Mensagem enviada com sucesso!");
}

document.getElementById("Nova_mensagem").addEventListener("submit", function(event) {
       
            event.preventDefault();

           
            if (document.getElementById("Nova_mensagem").checkValidity()) {
                mostrarAlerta();
				document.getElementById("Nova_mensagem").style.display = "none";
				document.getElementById("completed").style.display = "block";
            } else {
                window.alert("Preencha todos os campos corretamente antes de enviar.");
            }
        });