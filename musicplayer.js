document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  var playIcon = document.getElementById("playIcon");
  var playText = document.getElementById("playText");
  var currentIndex = 0;
  var isPlaying = false; // Variável para controlar o estado de reprodução
  var progressBarFilled = document.querySelector(".progress-bar-filled");
  var currentTimeDisplay = document.getElementById("currentTime");
var durationDisplay = document.getElementById("duration");
    

  var tracks = [
    "yel-rose.mp3",
    "wildwood.mp3",
	"jambali.mp3",
    "window_of_the_soul.mp3",
	"113.mp3",
	"catmidi.mp3",
	"3am.mp3",
	"gambler2.mp3",
	"desprado.mp3",
	"dont-let.mp3",
	
    // Adicione mais músicas à lista
  ];

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      playText.textContent = "Pausado";
    } else {
      audio.play();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
      playText.textContent = "Tocando";
    }
    isPlaying = !isPlaying; // Inverte o estado de reprodução
  }

  function changeVolume(volume) {
    audio.volume = volume;
  }

  function loadTrack(trackIndex) {
    currentIndex = parseInt(trackIndex);
    audio.src = tracks[currentIndex];
    audio.load();

    // Atualizar o nome da música no elemento marquee
    var currentTrackName = document.getElementById("currentTrackName");
    currentTrackName.textContent = "Atualmente tocando: " + tracks[currentIndex];
    
    if (isPlaying) {
      audio.play(); // Retoma a reprodução se o áudio estava tocando antes de mudar de faixa
    }
  }

  function prevTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentIndex);
  }

  function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
  }

  // Adicionar um evento para reiniciar a reprodução quando a música terminar
  audio.addEventListener("ended", function() {
    nextTrack();
  });

  // Carregar a primeira música
  loadTrack(currentIndex);

  window.togglePlay = togglePlay;
  window.changeVolume = changeVolume;
  window.prevTrack = prevTrack;
  window.nextTrack = nextTrack;
  
audio.addEventListener("timeupdate", function() {
  var currentTime = audio.currentTime;
  var duration = audio.duration;
  var progressPercentage = (currentTime / duration) * 100;
  progressBarFilled.style.width = progressPercentage + "%";

  // Formatando o tempo atual e a duração em minutos e segundos
  var formattedCurrentTime = formatTime(currentTime);
  var formattedDuration = formatTime(duration);

  // Atualizando os elementos de texto
  currentTimeDisplay.textContent = formattedCurrentTime;
  durationDisplay.textContent = formattedDuration;
});

// Função para formatar o tempo em minutos e segundos
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
});



