function abrirSiteAleatorio() {
      // Array com URLs aleatórios
      var sites = [
        "jogos/epicrail.html",
        "jogos/minitrain.html",
        "jogos/10seconds.html",
	"jogos/3pandas.html",
	"jogos/8ballpool.html",
	"jogos/bulletbill3.html",
	"jogos/coloraze.html",
	"jogos/colorphysics.html",
	"jogos/crashbandicoot.html",
	"jogos/cuboyquest2.html",
	"jogos/cutthehope.html",
	"jogos/deepsleep.html",
	"jogos/discobowling.html",
	"jogos/ducklife4.html",
	"jogos/gogotrain.html",
	"jogos/hardestgameever.html",
	"jogos/hungryshapes.html",
	"jogos/supermarioflash.html",
	"jogos/pixcity.html",
	"jogos/sonicflash.html",
	"jogos/supermario63.html",
	"jogos/theiofit.html",
      ];

      // Gera um índice aleatório
      var indiceAleatorio = Math.floor(Math.random() * sites.length);

      // Obtém a URL aleatória
      var urlAleatoria = sites[indiceAleatorio];

      // Redireciona para a URL aleatória
      window.location.href = urlAleatoria;
    }