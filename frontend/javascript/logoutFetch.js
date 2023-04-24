const logutBtn = document.querySelector('#logout');

logutBtn.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    credentials: 'include',
  })
    .then((response) => {
      if (response.ok) {
        localStorage.removeItem('token');
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch((error) => {
      console.error(error);
      return false; // Return error status
    });
});
