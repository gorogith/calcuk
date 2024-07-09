let score = 0;
let tapPoints = 100;
let isRefilling = false;
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const tapPointsDisplay = document.getElementById('tapPoints');

gameArea.addEventListener('click', () => {
    if (tapPoints > 0) {
        score += 1;
        tapPoints -= 1;
        updateDisplays();
    }
    
    if (tapPoints === 0 && !isRefilling) {
        startRefill();
    }
});

function updateDisplays() {
    scoreDisplay.textContent = `Score: ${score}`;
    tapPointsDisplay.textContent = `Tap Points: ${tapPoints}`;
}

function startRefill() {
    isRefilling = true;
    gameArea.style.backgroundColor = '#ccc';
    
    const refillInterval = setInterval(() => {
        tapPoints += 1;
        updateDisplays();
        
        if (tapPoints >= 100) {
            clearInterval(refillInterval);
            isRefilling = false;
            gameArea.style.backgroundColor = '#4CAF50';
        }
    }, 600); // 600ms * 100 = 60 seconds untuk pengisian penuh
}

// Inisialisasi Telegram WebApp
window.Telegram.WebApp.ready();