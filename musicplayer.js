document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  var playIcon = document.getElementById("playIcon");
  var playText = document.getElementById("playText");

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      playText.textContent = "Parar";
    } else {
      audio.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
      playText.textContent = "Tocar";
    }
  }

  function changeVolume(volume) {
    audio.volume = volume;
  }

  window.togglePlay = togglePlay;
  window.changeVolume = changeVolume;
});
