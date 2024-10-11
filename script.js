let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.innerHTML = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    // Convert milliseconds into hours, minutes, seconds
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format time to 2 digits
    const formattedHours = (hours < 10 ? "0" : "") + hours;
    const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
    const formattedSeconds = (seconds < 10 ? "0" : "") + seconds;

    // Display the time
    display.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
