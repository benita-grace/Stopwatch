window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let interval;
    let laps = [];

    const appendMinutes = document.querySelector('#minutes');
    const appendTens = document.querySelector('#tens');
    const appendSeconds = document.querySelector('#seconds');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');
    const lapBtn = document.querySelector('#lap');
    const lapList = document.querySelector('#laps');

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '00';
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '00';
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    };

    startBtn.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(interval);
    };

    resetBtn.onclick = () => {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
        laps = [];
        lapList.innerHTML = '';
    };

    lapBtn.onclick = () => {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(tens)}`;
        laps.push(lapTime);
        displayLaps();
    };

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const displayLaps = () => {
        lapList.innerHTML = '';
        laps.forEach((lap, index) => {
            const li = document.createElement('li');
            li.innerText = `Lap ${index + 1}: ${lap}`;
            lapList.appendChild(li);
        });
    };
};
