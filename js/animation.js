document.addEventListener('DOMContentLoaded', () => {
    const welcomeOneText = document.querySelector('.welcome-one-text');
    const welcomeTwoText = document.querySelector('.welcome-two-text');

    // Задержка для появления первого текста
    setTimeout(() => {
        welcomeOneText.style.opacity = 1;
    }, 1800); // Задержка 1.8 секунды перед появлением первого текста

    // Задержка для появления второго текста
    setTimeout(() => {
        welcomeTwoText.style.opacity = 1;
    }, 2000); // Задержка 2 секунды перед появлением второго текста
});
// Добавляем класс после завершения анимации
document.getElementById('circle2').addEventListener('animationend', function() {
    this.classList.add('show-content');
});

document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementVisible(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для добавления класса animate при видимости элемента
    function checkAnimation() {
        var imgElement = document.querySelector('.content-background > img');
        var textElement = document.querySelector('.content-background > p');
        
        if (isElementVisible(imgElement)) {
            imgElement.classList.add('animate');
        }
        if (isElementVisible(textElement)) {
            textElement.classList.add('animate');
        }
    }

    // Вызов функции при прокрутке страницы
    window.addEventListener('scroll', function() {
        checkAnimation();
    });

    // Вызов функции при загрузке страницы
    checkAnimation();
});
// Функция для обработки колбэка Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.typing-text').classList.add('animate');
            observer.unobserve(entry.target); // прекращаем наблюдение после анимации
        }
    });
}

// Создаем экземпляр Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // viewport
    threshold: 0.5 // срабатываем при видимости 50% блока .content-background
});

// Выбираем элемент для наблюдения
const contentBackground = document.querySelector('.content-background');

if (contentBackground) {
    observer.observe(contentBackground);
}
