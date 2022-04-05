<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    return 0;
}

$data = json_decode(file_get_contents("php://input"), true);

$servername = 'localhost';
$username = 'tfd';
$password = '123';
$db_name = 'tfd';

$firstname = $data['firstname'];
$lastname = $data['lastname'];
$tsusername = $data['tsusername'];
$gamertag = $data['gamertag'];
$birthday = $data['birthday'];
$introduction = $data['introduction'];

$db = new mysqli($servername, $username, $password, $db_name);

if ($db->connect_error) {
    die("Connection failed: "
        . $db->connect_error);
}

mysqli_report(MYSQLI_REPORT_ALL);

$stmt = $db->prepare("INSERT INTO members (firstname, lastname, tsusername, gamertag, birthday, introduction) VALUES (?,?,?,?,?,?)");

if (!$stmt) {
    $response = array(
        'success' => 'false',
        'error' => 'true'
    );
    echo json_encode($response);
    return;
}

$stmt->bind_param("ssssss", $firstname, $lastname, $tsusername, $gamertag, $birthday, $introduction);
$stmt->execute();

$stmt->close();
$db->close();


$response = array(
    'success' => 'true',
    'error' => 'false'
);

echo json_encode($response);
?>
