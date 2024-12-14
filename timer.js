


let timerInterval;

document.getElementById('setTimerBtn').addEventListener('click', function() {
    const timeInput = document.getElementById('timerInput').value;
    let timeRemaining = parseInt(timeInput, 10);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    clearInterval(timerInterval);
    updateTimerDisplay(timeRemaining);

    timerInterval = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
});

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timerDisplay').innerText = `Timer: ${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default class Timer{

    constructor(root){
        root.innerHTML=Timer.getHTML();
    }
    static getHTML(){
        return `
         <div class="clock">
            <div class="outer"><div class="inner"><span style="color:rgb(0, 255, 0);font-weight: 500;font-size:1.3rem;">56%</span></div></div>
        </div>
        <div class="timerInNumber"></div>`;
    }
}