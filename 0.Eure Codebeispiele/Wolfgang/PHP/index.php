<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO IN PHP</title>
</head>
<body>
    
<h1>Today</h1>

<?php


$myTodo = ["Wäsche waschen", "Sport", "Lernen", "Einkaufen", "jodeln"];
$myNumber = 0;

foreach ($myTodo as $element) {
    echo "<div>
    $element
    </div>";
    $myNumber++;
}


?>

</body>
</html>