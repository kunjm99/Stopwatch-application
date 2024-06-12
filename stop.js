window.onload = function() {
    let startStopBtn = document.getElementById('startStopBtn');
    let resetBtn = document.getElementById('resetBtn');
    let lapBtn = document.getElementById('lapBtn');
    let display = document.getElementById('display');
    let laps = document.getElementById('laps');

    let timer;
    let running = false;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    startStopBtn.addEventListener('click', function() {
        if (running) {
            clearInterval(timer);
            startStopBtn.textContent = 'Start';
        } else {
            timer = setInterval(updateTime, 1000);
            startStopBtn.textContent = 'Pause';
        }
        running = !running;
    });

    resetBtn.addEventListener('click', function() {
        clearInterval(timer);
        running = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        display.textContent = '00:00:00';
        startStopBtn.textContent = 'Start';
        laps.innerHTML = '';
    });

    lapBtn.addEventListener('click', function() {
        if (running) {
            let lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            let lapDiv = document.createElement('div');
            lapDiv.className = 'lap';
            lapDiv.textContent = lapTime;
            laps.appendChild(lapDiv);
        }
    });

    function updateTime() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
};
