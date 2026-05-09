// script.js
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);

    const startBtn = document.getElementById('start-btn');
    const startMenu = document.getElementById('start-menu');

    // Toggle Start Menu
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('win-hidden');
    });

    // Close menu when clicking desktop
    document.addEventListener('click', () => {
        startMenu.classList.add('win-hidden');
    });

    startMenu.addEventListener('click', (e) => e.stopPropagation());
});

function updateClock() {
    const now = new Date();
    
    // Time format: 9:18 PM
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    document.getElementById('time').innerText = now.toLocaleTimeString([], timeOptions);

    // Date format: 5/8/2026
    const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString([], dateOptions);
}
