document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  var searchTerm = document.getElementById('search-input').value.toLowerCase(); // Obtém o valor digitado na barra de pesquisa em letras minúsculas

  // Verifica se o valor da pesquisa é válido
  if (searchTerm && searchTerm.trim() !== '') {
    // Define as páginas disponíveis com seus respectivos nomes
    var pages = {
      'nome1': 'subpagina1.html',
      'nome2': 'subpagina1.html',
      'nome3': 'subpagina2.html',
      'nome4': 'subpagina3.html'
    };

    // Verifica se o nome pesquisado corresponde a uma página existente
    if (searchTerm in pages) {
      var pageURL = pages[searchTerm];
      window.location.href = pageURL; // Redireciona o usuário para a página correspondente
    } else {
      alert('Página não encontrada.'); // Exibe um alerta se a página não for encontrada
    }
  }
});