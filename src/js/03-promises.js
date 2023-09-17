import Notiflix from 'notiflix';
// import throttle from 'lodash.throttle';

const formForm = document.querySelector('form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const submitButton = document.querySelector('button');

submitButton.disabled = true;

formForm.addEventListener('input', event => {
  localStorage.setItem('position', inputDelay.value);
  localStorage.setItem('delay', inputStep.value);
  localStorage.setItem('amount', inputAmount.value);
  if (
    inputStep.value === '' ||
    inputStep.value == '' ||
    inputAmount.value == ''
  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      );
    } else {
      reject(
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    }
  });
}

submitButton.addEventListener('click', subEvent);

function subEvent(event) {
  event.preventDefault();

  let position = localStorage.getItem('position');
  let delay = localStorage.getItem('delay');
  let amount = localStorage.getItem('amount');

  let a = 0;
  setTimeout(() => {
    setInterval(() => {
      a += 1;

      if (a <= amount) {
        createPromise(position, delay)
          .then((position, delay) => {})
          .catch((position, delay) => {});
      }
    }, delay);
  }, position);
  submitButton.disabled = true;
  localStorage.clear();
  formForm.reset();
}
