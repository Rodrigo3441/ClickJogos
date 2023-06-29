var script = document.createElement('script');
script.src = 'https://unpkg.com/@ruffle-rs/ruffle';
document.head.appendChild(script);

window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
"forceScale": true,
};


