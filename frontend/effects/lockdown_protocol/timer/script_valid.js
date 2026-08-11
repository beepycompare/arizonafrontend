// Elements
const countdownElement = document.getElementById('countdown');
const roleElement = document.getElementById('role');
const timestampElement = document.getElementById('timestamp');

// Update timestamp like CCTV
function updateTimestamp() {
    const now = new Date();
    const date = now.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const time = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    timestampElement.textContent = `${date} ${time}`;
}

setInterval(updateTimestamp, 1000);
updateTimestamp();

// Randomly choose impostor or crewmate
const isImpostor = Math.random() < 0.2; // 20% chance to be impostor

function showRole() {
    roleElement.textContent = 'Рабочий';
    roleElement.classList.add('crewmate');
    roleElement.classList.add('show');

    // Start countdown after role appears
    setTimeout(startCountdown, 1000);
}

let count = 10;

function startCountdown() {
    countdownElement.style.display = 'block';
    updateCountdown();
}

function updateCountdown() {
    countdownElement.textContent = count;

    // Remove previous classes
    countdownElement.classList.remove('final', 'zero');

    // Add special effects for low numbers
    if (count <= 3 && count > 0) {
        countdownElement.classList.add('final');
    }

    if (count === 0) {
        // Hide everything
        setTimeout(hideAll, 500);
        return;
    }

    count--;
    setTimeout(updateCountdown, 1000);
}

function hideAll() {
    roleElement.classList.remove('show');
    roleElement.classList.add('hide');
    countdownElement.classList.add('hide');
}

// Start by showing role
showRole();