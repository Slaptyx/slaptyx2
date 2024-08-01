// script.js

function enterSite() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const music = document.getElementById('background-music');
    
    overlay.classList.add('fade-out');
    setTimeout(() => {
        overlay.style.display = 'none';
        content.classList.add('show');
        music.volume = 0.3; // Set volume to 30%
        music.play();
    }, 500); // Match the duration of the fade-out animation
}

