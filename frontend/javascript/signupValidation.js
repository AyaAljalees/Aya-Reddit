const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

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
const isValidEmail = (Email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(Email).toLowerCase());
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  if (usernameValue === '') {
    setError(username, 'Username is required ');
  } else if (usernameValue.length < 3) {
    setError(username, 'Username must be at least 3 character.');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  const isValid = passwordPattern.test(passwordValue);
  if (passwordValue === '') {
    setError(password, 'Password is required ');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.');
  } else if (isValid === false) {
    setError(password, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*)');
  } else {
    setSuccess(password);
  }
};

email.addEventListener('input', validateInputs);
username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);
const loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('mouseup', (e) => {
  e.preventDefault();

  validateInputs();
});
