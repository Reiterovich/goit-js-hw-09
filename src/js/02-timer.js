import Notiflix from 'notiflix';
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputDateTimeEl = document.querySelector('input[type="text"]');
const inputBtn = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

// -------------------------------------------------------------------
inputBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Report.failure(
        'Please choose a date in the future',
        '',
        'Ok :('
      );

      inputBtn.disabled = true;
    } else {
      inputBtn.disabled = false;
      Notiflix.Notify.success('Press the "Start" button');
    }
  },
};

const fp = flatpickr(inputDateTimeEl, options);

function addLeadingZero(string) {
  return String(string).padStart(2, '0');
}

// ----------------------------------------------------------------------
const nowDate = new Date();

function funcBtn(event) {
  inputBtn.disabled = true;
  const timeA = fp.selectedDates[0];
  Notiflix.Notify.success('You are amazing!');
  const timerId = setInterval(() => {
    const timeCur = new Date();
    const difference = timeA - timeCur;
    if (difference < 1000) {
      clearInterval(timerId);
      inputBtn.disabled = false;
    }

    dataSeconds.textContent = addLeadingZero(convertMs(difference).seconds);
    dataMinutes.textContent = addLeadingZero(convertMs(difference).minutes);
    dataHours.textContent = addLeadingZero(convertMs(difference).hours);
    dataDays.textContent = addLeadingZero(convertMs(difference).days);
  }, 1000);
}

inputBtn.addEventListener('click', funcBtn);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
