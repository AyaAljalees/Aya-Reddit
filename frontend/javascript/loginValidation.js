const username = document.getElementById('username');
const password = document.getElementById('password');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setError(username, 'Username is required ----------------');
  } else if (usernameValue.length < 3) {
    setError(username, 'Username must be at least 3 character.');
  } else {
    setSuccess(username);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required ----------------');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.');
  } else {
    setSuccess(password);
  }
};
username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);
const loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('mouseup', (e) => {
  e.preventDefault();

  validateInputs();
});
