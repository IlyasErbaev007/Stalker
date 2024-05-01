<?php
header('Content-Type: application/json');

// Получаем данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Ваша логика обработки данных, например, отправка почты или сохранение в базе данных

// Пример обработки и отправки ответа
if (!empty($name) && !empty($email) && !empty($message)) {
    // Ваш код для отправки почты или сохранения в базе данных

    // Возвращаем JSON ответ
    echo json_encode(array('message' => 'Спасибо! Ваш отзыв отправлен.'));
} else {
    echo json_encode(array('message' => 'Пожалуйста, заполните все поля формы.'));
}
?>
