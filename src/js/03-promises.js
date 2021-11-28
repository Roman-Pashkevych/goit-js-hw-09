import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount:  document.querySelector('[name="amount"]'),
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};

 
 function makePromises () {
  let amountNumber = Number(refs.inputAmount.value);
  let delayNumber = Number(refs.inputDelay.value);
  let stepNumber = Number(refs.inputStep.value);
   
  for (let i = 1; i <= amountNumber; i++) {
    createPromise(i, delayNumber)
      .then(({ position, delay }) => {
       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      delayNumber += stepNumber;
  }
  
}
 
const onFormsabmit = (evt) => {
  evt.preventDefault();
  makePromises()
}

refs.form.addEventListener('submit', onFormsabmit)