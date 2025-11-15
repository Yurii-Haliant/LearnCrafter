/* =========================================
   1. Кнопки переходів (універсально)
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById('startBtn1'); // Перейти до уроків
    const btn2 = document.getElementById('startBtn2'); // Повернутись назад

    if (btn1) {
        btn1.addEventListener('click', () => {
            window.location.href = "index1.html";
        });
    }

    if (btn2) {
        btn2.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }
});


/* =========================================
   2. Плавний скролл (тільки якщо є елементи)
========================================= */

const scrollBtn1 = document.querySelector('.b1-1');
if (scrollBtn1 && document.querySelector('.hero')) {
    scrollBtn1.addEventListener('click', () => {
        document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
    });
}

const heroBtn = document.querySelector('.hero button');
if (heroBtn && document.querySelector('.advantages')) {
    heroBtn.addEventListener('click', () => {
        document.querySelector('.advantages').scrollIntoView({ behavior: 'smooth' });
    });
}


/* =========================================
   3. Перемикач теми (Light/Dark Mode)
========================================= */

const themeBtn = document.getElementById('themeToggle');

if (themeBtn) {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeBtn.textContent = '☀ Світла тема';
    }

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
}
