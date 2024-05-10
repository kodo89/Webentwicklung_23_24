<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do-Liste</title>
</head>
<body>
    <div class="task-list">
        <?php
        // Abrufen der Daten aus dem Datenbank-Endpunkt
        $data = file_get_contents('http://localhost/getTodos.php');
        $tasks = json_decode($data, true);

        // Ausgabe der Aufgaben im HTML-Format
        foreach ($tasks as $task) {
            echo '<div class="task-card ' . $task['priority'] . '">';
            echo '<input type="checkbox" id="task' . $task['id'] . '" name="task' . $task['id'] . '"';
            if ($task['completed']) {
                echo ' checked';
            }
            echo '>';
            echo '<label for="task' . $task['id'] . '" class="task-name">' . $task['task'] . '</label>';
            echo '<span class="priority ' . $task['priority'] . '">Priorität: ' . $task['priority'] . '</span>';
            if ($task['due_date']) {
                echo '<p class="due-date">Fälligkeitsdatum: ' . $task['due_date'] . '</p>';
            }
            echo '<form id="formDeleteButton" action="/deleteTask" method="post">';
            echo '<input type="hidden" name="taskName" value="' . $task['task'] . '">';
            echo '<button type="submit" class="deleteButton">Löschen</button>';
            echo '</form>';
            echo '</div>';
        }
        ?>
    </div>
</body>
</html>
