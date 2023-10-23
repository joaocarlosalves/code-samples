<?php

$file_path = 'users.json';

if (!file_exists($file_path)) {
  file_put_contents($file_path, '{}');
}

$file_content = file_get_contents($file_path);
$users = json_decode($file_content, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $newUser = json_decode(file_get_contents('php://input'), true);
  array_push($users['users'], $newUser);
  $updatedUsersJson = json_encode($users);
  file_put_contents($file_path, $updatedUsersJson);
  header('Content-Type: application/json');
  echo json_encode(array('New User Added!' => true));
} else {
  header('Content-Type: application/json');
  echo $file_content;
}

