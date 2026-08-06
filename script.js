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

const projects = [
  { name: "Diseño de interiores", description: "Coming soon", status: "In Progress" },
  { name: "Cielos falsos", description: "Coming soon", status: "Completed" },
  { name: "Steel Framing", description: "Coming soon", status: "Planned" },
  { name: "Pintura", description: "Coming soon", status: "Completed" }
];

const projectsList = document.getElementById('projects-list');
const filterButtons = document.querySelectorAll('#filter-buttons button');

function renderProjects(filter) {
  projectsList.innerHTML = ''; // clear current list

  const filtered = filter === 'all'
    ? projects
    : projects.filter(function (project) {
        return project.status.toLowerCase() === filter;
      });

  filtered.forEach(function (project) {
    const li = document.createElement('li');
    const badge = document.createElement('span');
    badge.textContent = project.status;
    badge.className = 'status-badge status-' + project.status.toLowerCase().replace(' ', '-');
    li.textContent = `${project.name} — ${project.description} `;
    li.appendChild(badge);
    projectsList.appendChild(li);
  });
}

if (projectsList) {
  renderProjects('all');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      renderProjects(button.dataset.status);
    });
  });
}