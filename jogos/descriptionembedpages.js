function toggleDescricao() {
      var descricao = document.getElementById("descricao");
      var botao = document.getElementById("botaoDescricao");
      var imagemBotao = document.getElementById("imagemBotao");

      if (descricao.style.display === "none") {
        descricao.style.display = "block";
        botao.classList.add("ativo");
        imagemBotao.src = "embedpagegame/sobre3.png";
      } else {
        descricao.style.display = "none";
        botao.classList.remove("ativo");
        imagemBotao.src = "embedpagegame/sobre1.png";
      }
    }