let playpause = document.getElementById("playpausebtn");
let audio = document.getElementById("myaudio");
let isPlaying = false;
let barra = document.getElementById("audioprogress")
let tempoatual = document.getElementById("timeduration");
let tempototal = document.getElementById("timetotal");
let forward = document.getElementById("nextbtn");
let before = document.getElementById("backbtn");
let volumecontrol = document.getElementById("vlmcontrol");
let volumebar = document.getElementById("vlmbar");
let stopbtn = document.getElementById("stop");
let loopbtn = document.getElementById("loop");

// Lista de músicas
let playlist = [
    "songs/3am.mp3",
    "songs/113.mp3",
    "songs/banjo_nice_1.mp3",
	"songs/banjo_nice_2.mp3",
	"songs/banjo_nice_3.mp3",
	"songs/banjo_nice_4.mp3",
	"songs/banjo_nice_5.mp3",
	"songs/banjo_nice_6.mp3",
	"songs/banjo_nice_7.mp3",
	"songs/banjo_nice_8.mp3",
	"songs/banjo_nice_8_r1.mp3",
	"songs/banjo_nice_8_r2.mp3",
	"songs/banjo_nice_9.mp3",
	"songs/banjo_nice_10.mp3",
	"songs/banjo_nice_11.mp3",
    "songs/fifties_dance_party_2.mp3",
    "songs/fifties_dance_party_4.mp3",
    "songs/fifties_dance_party_6.mp3",
    "songs/dance_1.mp3",
    "songs/Dos1.mp3",
    "songs/Dos2.mp3",
    "songs/i_found_a_Great_Friend.mp3",
    "songs/Comptine_D'un_Autre_ete.mp3",
    "songs/catmidi.mp3",
    "songs/desprado.mp3",
    "songs/dont-let.mp3",
    "songs/gambler2.mp3",
    "songs/jambali.mp3",
    "songs/wildwood.mp3",
    "songs/window_of_the_soul.mp3",
    "songs/windows_xp.mp3",
    "songs/yel-rose.mp3",
    "songs/yel-rose-2.mp3",
    "songs/1959_Prom.mp3",
	"songs/Dreams.mp3",
	"songs/Hip_Hop.mp3",
	"songs/Huey_Dewey.mp3",
	"songs/New_Age.mp3",
	"songs/Ragtime.mp3",
	"songs/Techno_Rave.mp3",
	"songs/Tuna_Loaf.mp3",
	"songs/Unplugged.mp3",
    "songs/120_battle!.mp3",
    "songs/deal_em_out_yellow.mp3",
    "songs/decibat_yellow.mp3",
    "songs/dunes_cave.mp3",
    "songs/genobattle_yellow.mp3",
    "songs/quietstray.mp3",
    "songs/trial_by_fury.mp3",
    "songs/battle_gym_leader_pkmn_journeys.mp3",
    "songs/best_song_2.mp3",
    "songs/pkmn_journeys_end_battle.mp3"
    
]; 


let currentTrackIndex = 0; // Índice da faixa atual

audio.src = playlist[currentTrackIndex];

//precisam ser carregadas no incio
changefowardbtn();
updatebuttonloop();
changebackbtn();
changevlmbutton();
changemusicname();
updatePlaylistDisplay();



//mudar entre play e pause
playpause.addEventListener("click", toggleplaypause);
function toggleplaypause(){
    if (isPlaying) {
        audio.pause()        
        setupButtonEvents(playpause, {
            normal: "images/play.png",
            hover: "images/playover.png",
            pressed: "images/playpressed.png"
        });
        playpause.src = "images/play.png";
    } else {
        audio.play()
        changemusicname();
        updatePlaylistDisplay();
        setupButtonEvents(playpause, {
            normal: "images/pause.png",
            hover: "images/pauseover.png",
            pressed: "images/pausepressed.png"
        });
        playpause.src = "images/pause.png";        
            }
    isPlaying = !isPlaying;
}

//mudancas relacionadas ao tempo do audio
audio.addEventListener("timeupdate", function(){
    let duration = audio.duration;
    let currenttime = audio.currentTime;
    const progress = (currenttime / duration) * 100;
    barra.value = progress;

    //formatar tempo

    let formattedcurrenttime = formattime(currenttime);
    let formattedduration = formattime(duration);

    timeduration.textContent = formattedcurrenttime;
    timetotal.textContent = formattedduration;

})

function formattime(time){
    let minute = Math.floor(time / 60);
    minute = minute < 10 ? "0" + minute : minute;
    let second = Math.floor(time % 60);
    second = second < 10 ? "0" + second : second;
    return minute + ":" + second;
}

//avançar para próxima (controle automatico)
audio.addEventListener("ended", function(){
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    audio.src = playlist[currentTrackIndex];
    changemusicname();
    updatePlaylistDisplay();
    audio.play();
    isPlaying = true;
    
})

//avançar button

forward.addEventListener("click", function(){
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    playpause.src = "images/pause.png"
    changefowardbtn();
    audio.src = playlist[currentTrackIndex];
    changemusicname();
    updatePlaylistDisplay();
    audio.play();
    isPlaying = true;
    setupButtonEvents(playpause, {
        normal: "images/pause.png",
        hover: "images/pauseover.png",
        pressed: "images/pausepressed.png"
    });
})

function changefowardbtn(){
    setupButtonEvents(forward, {
        normal: "images/avancar.png",
        hover: "images/avancarover.png",
        pressed: "images/avancarpressed.png"
    });
}



//voltar button
before.addEventListener("click", function(){
    currentTrackIndex--;
    if (currentTrackIndex < 0){
        currentTrackIndex = playlist.length - 1;
    }
    playpause.src = "images/pause.png"
    audio.src = playlist[currentTrackIndex];
    changemusicname();
    updatePlaylistDisplay();
    audio.play();
    isPlaying = true;
    setupButtonEvents(playpause, {
        normal: "images/pause.png",
        hover: "images/pauseover.png",
        pressed: "images/pausepressed.png"
    });
})

function changebackbtn(){
    setupButtonEvents(before, {
        normal: "images/voltar.png",
        hover: "images/voltarover.png",
        pressed: "images/voltarpressed.png"
    });
}

//mute button
volumecontrol.addEventListener("click", function(){
    if (audio.muted){
        audio.muted = false;
        changevlmbutton();        
    } else {
        audio.muted = true;
        changevlmbutton();        
    }
    }
)

function changevlmbutton(){
    if (audio.muted){
        setupButtonEvents(volumecontrol, {
            normal: "images/muteon.png",
            hover: "images/muteonover.png",
            pressed: "images/muteonpressed.png"
        });
    } else {
        setupButtonEvents(volumecontrol, {
            normal: "images/muteoff.png",
            hover: "images/muteoffover.png",
            pressed: "images/muteoffpressed.png"
        });
    }
}



//volume bar
audio.volume = volumebar.value / 100;

volumebar.addEventListener("input", function(){
    let volume = volumebar.value / 100;
    audio.volume = volume;
})

//stop button
stopbtn.addEventListener("click", function(){
    audio.pause();
    audio.currentTime = 0;
    playpause.src = "images/play.png";
    isPlaying = false;
    setupButtonEvents(playpause, {
        normal: "images/play.png",
        hover: "images/playover.png",
        pressed: "images/playpressed.png"
    });
})

//loop button

loopbtn.addEventListener("click", function(){
    audio.loop = !audio.loop;
    updatebuttonloop();
})
function updatebuttonloop(){
if (audio.loop === true){
    setupButtonEvents(loopbtn, {
        normal: "images/loopon.png",
        hover: "images/looponover.png",
        pressed: "images/looponpressed.png"
    });
} else {
    setupButtonEvents(loopbtn, {
        normal: "images/loopoff.png",
        hover: "images/loopoffover.png",
        pressed: "images/loopoffpressed.png"
    });
}
}
//random button



//modifica os botões
function setupButtonEvents(button, images) {
    button.addEventListener("mouseover", function() {
        button.src = images.hover;
    });

    button.addEventListener("mouseout", function() {
        button.src = images.normal;
    });

    button.addEventListener("mousedown", function() {
        button.src = images.pressed;
    });

    button.addEventListener("mouseup", function() {
        button.src = images.normal;
    });
}
setupButtonEvents(stopbtn, {
    normal: "images/stop.png",
    hover: "images/stopover.png",
    pressed: "images/stoppressed.png"
});

setupButtonEvents(playpause, {
    normal: "images/play.png",
    hover: "images/playover.png",
    pressed: "images/playpressed.png"
});

//colocar o nome no marquee

function changemusicname(){
    const currentTrackDisplay = document.getElementById("musictitle");
    const currentTrackName = playlist[currentTrackIndex];

    currentTrackDisplay.textContent = `Now's playing: ${currentTrackName}`;
}

//parte do nome da playlist

function updatePlaylistDisplay() {
    const playlistList = document.getElementById("playlistList");

    // Limpa a lista para evitar duplicações
    playlistList.innerHTML = "";

    // Itera sobre o array de músicas
    playlist.forEach((track, index) => {
        // Cria o elemento <li> para cada música
        const li = document.createElement("li");
        li.setAttribute("role", "option");

        // Define o nome da música (removendo extensões e underscores, se necessário)
        const trackName = track;
        li.textContent = trackName;

        // Adiciona aria-selected="true" para a música atual
        if (index === currentTrackIndex) {
            li.setAttribute("aria-selected", "true");
        }

        // Adiciona o <li> à <ul>
        playlistList.appendChild(li);
    });
}


