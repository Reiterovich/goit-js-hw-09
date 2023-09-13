const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

console.log(buttonStart);
console.log(buttonStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const color = getRandomHexColor();
// console.log(color);

let timerId = null;
// -----------------------------------------------------------------

buttonStart.addEventListener('click', colorChange);

function colorChange(elm) {
  timerId = setInterval(callback, 1000);
  buttonStart.disabled = true;
  if (buttonStop.disabled) {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  }
}

const callback = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
};

// ---------------------------------------------------------------------

buttonStop.addEventListener('click', colorChangeStop);

function colorChangeStop(elm) {
  if (buttonStart.disabled) {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);
  }
}
