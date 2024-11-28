<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta = [];
switch ($metodo) {
  case 'GET':
    $respuesta = [
      'mensaje' => 'Metodo Get Correcto',
      'data' => $_GET
    ];
    break;
  case 'POST':
    $data_entrate = json_decode(file_get_contents("php://input"), true);
    $respuesta = [
      'mensaje' => 'Metodo Post de retorno',
      'data' => $data_entrate,
    ];
    break;
  case 'PUT':
    $data_entrate = json_decode(file_get_contents("php://input"), false);
    $respuesta = [
      'mensaje' => 'Metodo Put de retorno',
      'data' => $data_entrate,
    ];
    break;
  case 'DELETE':
    $data_entrate = json_decode(file_get_contents("php://input"), true);
    $respuesta = [
      'mensaje' => 'Metodo Delete de retorno',
      'data' => $data_entrate,
    ];
    break;
  default:
    $respuesta = [
      'mensaje' => 'Metodo no soportado',
    ];
    break;
}
echo json_encode($respuesta);
?>

