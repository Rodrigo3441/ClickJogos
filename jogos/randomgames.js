function abrirSiteAleatorio() {
      // Array com URLs aleatórios
      var sites = [
        "epicrail.html",
        "minitrain.html",
        "10seconds.html",
      ];

      // Gera um índice aleatório
      var indiceAleatorio = Math.floor(Math.random() * sites.length);

      // Obtém a URL aleatória
      var urlAleatoria = sites[indiceAleatorio];

      // Redireciona para a URL aleatória
      window.location.href = urlAleatoria;
    }