<?php
session_start();

require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('templates');
$twig = new \Twig\Environment($loader);

$randomPayment = rand(100, 100000);

$params = array(
    $amount = 10, // цена
    $payment = $randomPayment, // ид номера заказа (не трогай!)
    $shop = 999, // id магазина
    $currency = 'RUB',
    $desc = 'StandOFF 2',
    $secret = '' // секретный код
);

$sign = md5( implode ( '|', $params ) );

$paramsUrl = array(
    'amount' => $params[0],
    'payment' => $params[1],
    'shop' => $params[2],
    'currency' => $params[3],
    'desc' => $params[4],
    'sign' => $sign
);

$url = 'https://payok.io/pay?' . http_build_query($paramsUrl);

echo $twig->render('index.html', [
    'url'=>$url,
    'price'=>$params[0]
]);