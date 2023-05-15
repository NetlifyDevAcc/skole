
  const btn = document.getElementById('submit-btn');
  const displayLabel = document.getElementById('display-label');

  btn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const displayText = `Name: ${name}, Password: ${password}`;
    displayLabel.innerText = displayText;
  });
