
document.querySelector('.b1-1').addEventListener('click', () => {
    document.querySelector('.hero').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.hero button').addEventListener('click', () => {
    document.querySelector('.advantages').scrollIntoView({
        behavior: 'smooth'
    });
});

/* =========================================
   3. Перемикач теми (Light/Dark Mode)
========================================= */

// Кнопка перемикання теми
const themeBtn = document.getElementById('themeToggle');

// Перевіряємо, чи є збережена тема у localStorage
let currentTheme = localStorage.getItem('theme');

// Якщо тема була темна — застосовуємо її
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀ Світла тема';
}

// Перемикаємо тему при кліку
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀ Світла тема';
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙 Темна тема';
    }
});


document.getElementById('startBtn2').addEventListener('click', () => {
    window.location.href = "index.html";
});
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('startBtn2').addEventListener('click', () => {
        window.location.href = "index.html";
    });
});