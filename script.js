// Добавляем скрипт для плавного скролла наверх при клике на кнопку "Наверх"
const scrollBtn = document.querySelector(".scroll-to-top");

scrollBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Добавляем скрипт для анимации заголовка, описания и кнопок в шапке
const headerTitle = document.querySelector(".header-content h1");
const headerDesc = document.querySelector(".header-content p");
const navLinks = document.querySelectorAll(".main-nav ul li a");
const playBtn = document.querySelector(".play-btn");

headerTitle.style.animation = "fadeInLeft 1s ease";
headerDesc.style.animation = "fadeInLeft 1s ease";
navLinks.forEach(link => {
    link.style.animation = "fadeInLeft 1s ease";
});
playBtn.style.animation = "fadeInUp 1s ease";

// JavaScript для отправки отзыва

const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Простая валидация формы
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Пожалуйста, заполните все поля формы.");
        return;
    }

    // Формируем данные для отправки
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Отправка данных на сервер
    fetch("submit_review.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Показываем сообщение об успешной отправке или ошибке
            reviewForm.reset(); // Очищаем форму после успешной отправки
        })
        .catch(error => {
            console.error("Ошибка при отправке данных:", error);
            alert("Произошла ошибка при отправке данных.");
        });
});
