const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
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

    status.textContent = `Thanks, ${name}! Your message has been noted.`;
    form.reset();
  });
}

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}



