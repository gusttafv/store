// Функция для переключения меню
function toggleMenu(button) {
    const menu = document.getElementById('dropdownMenu');
    
    // Переключаем классы для меню
    menu.classList.toggle('show');
    
    // Переключаем класс для кнопки (опционально - для стилизации активной кнопки)
    button.classList.toggle('active');
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.btn-menu');
    const dropdown = document.querySelector('.dropdown');
    
    if (!dropdown.contains(event.target) && menu.classList.contains('show')) {
        menu.classList.remove('show');
        button.classList.remove('active');
    }
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const menu = document.getElementById('dropdownMenu');
        const button = document.querySelector('.btn-menu');
        menu.classList.remove('show');
        button.classList.remove('active');
    }
});

// Закрытие меню при переходе по ссылке
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('dropdownMenu');
        const button = document.querySelector('.btn-menu');
        menu.classList.remove('show');
        button.classList.remove('active');
    });
});