function exibirImagem(elemento) {
  var imagemSelecionada = document.getElementById("imagemSelecionada");
  imagemSelecionada.innerHTML = ''; // Limpa o conteúdo atual da div
  
  var carregamento = document.createElement("img");
  carregamento.src = "images/loading.gif";
  imagemSelecionada.appendChild(carregamento);
  
  setTimeout(function() {
    var imagem = document.createElement("img");
    imagem.src = elemento.src;
    imagemSelecionada.innerHTML = '';
    imagemSelecionada.appendChild(imagem);
  }, 3000); // Aguarda 3 segundos (3000 milissegundos) antes de exibir a imagem real
}

//mostrar link quebrado
function exibirTexto() {
    var linhaDeTexto = document.getElementById("linhaDeTexto");
    linhaDeTexto.style.display = "block";
    linhaDeTexto.addEventListener("click", alterarTexto);
}

function alterarTexto() {
    this.innerHTML = "Obrigado!";
}

