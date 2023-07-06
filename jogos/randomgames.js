function abrirSiteAleatorio() {
      // Array com URLs aleatórios
      var sites = [
        "epicrail.html",
        "minitrain.html",
        "10seconds.html",
	"3pandas.html",
	"8ballpool.html",
	"bulletbill3.html",
	"coloraze.html",
	"colorphysics.html",
	"crashbandicoot.html",
	"cuboyquest2.html",
	"cuttherope.html",
	"deepsleep.html",
	"discobowling.html",
	"ducklife4.html",
	"gogotrain.html",
	"hardestgameever.html",
	"hungryshapes.html",
	"supermarioflash.html",
	"pixcity.html",
	"sonicflash.html",
	"supermario63.html",
	"theiofit.html",
      ];

      // Gera um índice aleatório
      var indiceAleatorio = Math.floor(Math.random() * sites.length);

      // Obtém a URL aleatória
      var urlAleatoria = sites[indiceAleatorio];

      // Redireciona para a URL aleatória
      window.location.href = urlAleatoria;
    }