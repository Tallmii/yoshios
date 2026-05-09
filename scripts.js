// script.js

// 1. The Boot Sequence Logic
document.addEventListener('DOMContentLoaded', () => {
    const biosScreen = document.getElementById('bios-screen');
    const desktopScreen = document.getElementById('desktop-screen');
    const bootText = document.getElementById('boot-text');

    // Simulate lines of BIOS loading
    setTimeout(() => {
        bootText.innerText = "Auto-Detecting SATA Port 1... Found Drive";
        bootText.classList.remove('blinking');
    }, 2000);

    setTimeout(() => {
        const p = document.createElement('p');
        p.innerText = "Booting from Hard Disk...";
        biosScreen.appendChild(p);
    }, 3000);

    // Transition to Desktop after 5 seconds
    setTimeout(() => {
        biosScreen.classList.add('hidden');
        desktopScreen.classList.remove('hidden');
        startClock();
    }, 5000);
});

// 2. Start Menu Toggle
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

// 3. Real-time Clock
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
