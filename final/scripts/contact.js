export function setupForm() {
  const form = document.querySelector('#contact-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const errorContainer = document.querySelector('#form-errors');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenimos envío inmediato

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let errors = [];

    if (name.length < 2) {
      errors.push("Name must be at least 2 characters.");
    }

    if (!validateEmail(email)) {
      errors.push("Invalid email address.");
    }

    if (message.length < 10) {
      errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
      errorContainer.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
      errorContainer.style.display = 'block';
    } else {
      errorContainer.style.display = 'none';
      saveToLocalStorage(name, email, message);
      form.submit(); // Se envía al confirmation.html
    }
  });
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function saveToLocalStorage(name, email, message) {
  const formData = { name, email, message, date: new Date().toISOString() };
  localStorage.setItem('lastContact', JSON.stringify(formData));
}
