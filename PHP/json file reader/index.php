<?php

$file_path = 'data.json';

if (!file_exists($file_path)) {
  file_put_contents($file_path, '{}');
}

$file_content = file_get_contents($file_path);
$data = json_decode($file_content, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $request_body = file_get_contents('php://input');
  $new_data = json_decode($request_body, true);
  $data = array_merge($data, $new_data);
  $json_data = json_encode($data, JSON_PRETTY_PRINT);

  file_put_contents($file_path, $json_data);

  header('Content-Type: application/json');
  echo json_encode(array('message' => 'Data updated successfully.'));
} else {
  header('Content-Type: application/json');
  echo $file_content;
}