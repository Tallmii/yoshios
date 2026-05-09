// --- 1. BOOT SEQUENCE ---
const biosStatus = document.getElementById('bios-status');

function runBoot() {
    setTimeout(() => { biosStatus.innerText = "SATA Master: OK | Booting Windows..."; }, 1500);
    setTimeout(() => {
        document.getElementById('bios-layer').classList.add('hidden');
        document.getElementById('boot-layer').classList.remove('hidden');
    }, 3000);
    setTimeout(() => {
        document.getElementById('boot-layer').classList.add('hidden');
        document.getElementById('desktop-layer').classList.remove('hidden');
    }, 7000);
}

// --- 2. WINDOW MANAGER ---
function openApp(id) {
    const win = document.getElementById(id);
    win.classList.remove('hidden');
    makeDraggable(win);
}

function closeApp(id) {
    document.getElementById(id).classList.add('hidden');
}

// --- 3. DRAG LOGIC ---
function makeDraggable(el) {
    const header = el.querySelector('.window-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    header.onmousedown = (e) => {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = () => { document.onmousemove = null; document.onmouseup = null; };
        document.onmousemove = (e) => {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        };
    };
}

// --- 4. START MENU & CLOCK ---
document.getElementById('start-btn').onclick = () => {
    document.getElementById('start-menu').classList.toggle('hidden');
};

document.querySelectorAll('.desktop-item').forEach(item => {
    item.ondblclick = () => openApp('window-explorer');
});

function updateClock() {
    const time = new Date();
    document.getElementById('clock-display').innerText = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

setInterval(updateClock, 1000);
window.onload = runBoot;
