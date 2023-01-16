import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector("input[name='email']");
const msgInputEl = formEl.querySelector("textarea[name='message']");
const formValue = { email: '', message: '' };

const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storageData) {
  emailInputEl.value = storageData.email;
  formValue.email = storageData.email;

  msgInputEl.value = storageData.message;
  formValue.message = storageData.message;
}

formEl.addEventListener(
  'input',
  throttle(event => {
    formValue.email =
      event.target.name === 'email' ? event.target.value : formValue.email;

    formValue.message =
      event.target.name === 'message' ? event.target.value : formValue.message;

    localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
  }, 500)
);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const submitFormValue = {
    email: emailInputEl.value,
    message: msgInputEl.value,
  };

  if (!submitFormValue.email || !submitFormValue.message) {
    alert('Заповніть всі дані!');
    return;
  }

  localStorage.clear();

  formEl.reset();

  console.log(submitFormValue);
  return submitFormValue;
}
