const dateTimeInput = document.querySelector('#application-date');
const submitBtn = document.querySelector('#success-form input[type="submit"]');

submitBtn.addEventListener('click', () => {
  const now = new Date();
  dateTimeInput.value = now;
  console.log(dateTimeInput);
  console.log(submitBtn);
});