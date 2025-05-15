document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById(
    'passwordConfirmation',
  ).value;
  console.log(email, password); // Log the values to the console for debugging purposes
});
