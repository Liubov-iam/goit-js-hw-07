const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', updateNameOutput);

function updateNameOutput() {
    const trimmedValue = nameInput.value.trim();
    const name = trimmedValue !== '' ? trimmedValue : 'Anonymous'
    nameOutput.textContent = name;
}