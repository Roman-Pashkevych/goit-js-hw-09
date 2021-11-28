const btnDataStart = document.querySelector('button[data-start]');
const btnDataStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;
btnDataStart.addEventListener('click', onStart);
btnDataStop.addEventListener('click', onStop);

function onStart(event) {
    event.currentTarget.setAttribute('disabled', 'true');
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStop(event) {
    clearInterval(intervalId);
    btnDataStart.removeAttribute('disabled');
}
