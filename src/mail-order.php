<?php

// Переменные
$str_json = file_get_contents('php://input');
$data = json_decode($str_json, true);

$name = $data['name'];
$phone = $data['phone'];
$comment = $data['comment'];
$totalPrice = $data['price'];
$items = json_decode($data['items'], true);

$itemTitle = array();
$itemPrice = array();
$itemCount = array();

foreach ($items as $value) {
    array_push($itemTitle, $value["title"]);
    array_push($itemPrice, $value["count"]);
    array_push($itemCount, $value["price"]);
}

$result = "Имя: " . $name .
    '<br>Номер телефона: <a href="tel:' . $phone . '">' . $phone . '</a>' .
    "<br> Коментарий к заказу: " . $comment . "<br><br>";

function CreateCartOrder()
{
    global $cart;
    global $itemTitle;
    global $itemPrice;
    global $itemCount;

    $combined = array_map(null, $itemTitle, $itemPrice, $itemCount);
    foreach ($combined as $value) {
        $cart .= "Название: " . $value[0] . "<br> Количество: " . $value[1] . "<br> Цена: " . $value[2] . "<hr>";
    }
}

CreateCartOrder();

require_once 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'maski24.store@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('maski24.store@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('maski24.stone@mail.ru'); // Кому будет уходить письмо
$mail->addAttachment($_FILES['user_file']['tmp_name'], $_FILES['user_file']['name']); // Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Был совершен заказ на сайте';
$mail->Body = $result . $cart;
$mail->AltBody = '';

if (!$mail->send()) {
    echo 'Error';
}
