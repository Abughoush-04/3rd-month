document.addEventListener("DOMContentLoaded", function() {

    // HEARTS
    const numHearts = 15; 
    const heartContainer = document.createElement('div');
    heartContainer.id = 'heart-container';
    document.body.appendChild(heartContainer);

    for (let i = 0; i < numHearts; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.opacity = 0.5 + Math.random() * 0.5;
        heartContainer.appendChild(heart);
    }

    // MUSIC
    const song = document.getElementById('lovesong');
    const btn = document.getElementById('play-pause');

    btn.addEventListener('click', function() {
        if (song.paused) {
            song.play();
            btn.textContent = '⏸ Pause Music';
        } else {
            song.pause();
            btn.textContent = '▶ Play Music';
        }
    });

    // SCRAPBOOK FLIPPING
    const pages = document.querySelectorAll('.scrapbook .page');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((p, i) => p.classList.toggle('active', i === index));
    }

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < pages.length - 1) currentPage++;
        showPage(currentPage);
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 0) currentPage--;
        showPage(currentPage);
    });

    // show first page on load
    showPage(currentPage);

});
