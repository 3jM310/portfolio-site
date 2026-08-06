const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');


form.addEventListener('submit', function (event) {
  event.preventDefault(); // stops the page from reloading


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();


  // Basic validation
  if (name === '')  {
    status.textContent = 'Please enter your name.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    status.textContent = 'Please enter a valid email.';
    return;
  }

  if (message === '') {
    status.textContent = 'Please write a message.';
    return;
  }

  // If we get here, everything's valid
  status.textContent = `Thanks, ${name}! Your message has been noted.`;
  form.reset();
});