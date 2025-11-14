// Elementos da UI
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const setBtn = document.getElementById('setBtn');

// Inputs
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');

let countdown;
let totalSeconds = 25 * 60; // 25 minutos padrão
let isRunning = false;

// Endereço da API (Backend)
const API_URL = 'http://localhost:3000/sessions';

// Formata o tempo para HH:MM:SS
function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(totalSeconds);
}

// Salva sessão na API quando o tempo acaba
async function saveSession() {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                duration: 'Session Finished',
                date: new Date()
            })
        });
        if (res.ok) console.log('Sessão salva no backend!');
    } catch (error) {
        console.log('Backend indisponível ou offline', error);
    }
}

// Iniciar Timer
startBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            isRunning = false;
            alert('Tempo esgotado!');
            saveSession(); // Chama a API
            return;
        }
        totalSeconds--;
        updateDisplay();
    }, 1000);
});

// Pausar Timer
pauseBtn.addEventListener('click', () => {
    clearInterval(countdown);
    isRunning = false;
});

// Resetar Timer (Lê do LocalStorage)
resetBtn.addEventListener('click', () => {
    clearInterval(countdown);
    isRunning = false;
    const saved = JSON.parse(localStorage.getItem('focusTimerSettings')) || { h: 0, m: 25, s: 0 };
    totalSeconds = (saved.h * 3600) + (saved.m * 60) + saved.s;
    updateDisplay();
});

// Definir Novo Tempo
setBtn.addEventListener('click', () => {
    const h = parseInt(hoursInput.value) || 0;
    const m = parseInt(minutesInput.value) || 0;
    const s = parseInt(secondsInput.value) || 0;

    // Salva configuração no navegador
    localStorage.setItem('focusTimerSettings', JSON.stringify({ h, m, s }));

    totalSeconds = (h * 3600) + (m * 60) + s;
    updateDisplay();
    clearInterval(countdown);
    isRunning = false;
});

// Inicialização
updateDisplay();