// script.js

document.addEventListener('DOMContentLoaded', () => {
    startLinuxClock();
});

function startLinuxClock() {
    const clockElement = document.getElementById('clock');
    
    function updateTime() {
        const now = new Date();
        const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        // Format: "May 8 21:16"
        clockElement.innerText = now.toLocaleString('en-US', options).replace(',', '');
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

function openTerminal() {
    alert("Terminal: user@web-linux:~$ _");
}
