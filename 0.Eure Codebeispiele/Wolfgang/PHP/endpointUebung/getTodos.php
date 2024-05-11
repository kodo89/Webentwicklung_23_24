<?php
require_once('backend.php');

// SQL-Abfrage zum Abrufen aller Daten aus der Tabelle "todos"
$query = "SELECT * FROM todos";

// Ausführen der SQL-Abfrage
$result = mysqli_query($link, $query);

// Überprüfen, ob ein Fehler aufgetreten ist
if (!$result) {
    http_response_code(500);
    echo json_encode(array("message" => "Interner Serverfehler"));
    exit();
}

// Konvertieren der Abfrageergebnisse in ein assoziatives Array
$tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Rückgabe der Aufgaben als JSON
echo json_encode($tasks);

// Datenbankverbindung schließen
mysqli_close($link);
?>
