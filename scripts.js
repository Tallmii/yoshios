// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Start the clock immediately upon load
    startClock();
});

// Start Menu Toggle Logic
const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

startButton.addEventListener('click', () => {
    startMenu.classList.toggle('hidden');
});

// Hide start menu if clicking outside of it
document.addEventListener('click', (event) => {
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.classList.add('hidden');
    }
});

// Real-time Clock Logic
function startClock() {
    const clockElement = document.getElementById('clock');
    
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        clockElement.innerText = `${hours}:${minutes} ${ampm}`;
    }
    
    updateTime(); // Run immediately
    setInterval(updateTime, 1000); // Update every second
}
