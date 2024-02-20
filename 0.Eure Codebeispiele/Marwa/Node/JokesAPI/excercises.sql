-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Jan 2024 um 23:03
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `excercises`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `jokes`
--

CREATE TABLE `jokes` (
  `id` int(11) NOT NULL,
  `jokeText` varchar(100) DEFAULT NULL,
  `jokeType` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `jokes`
--

INSERT INTO `jokes` (`id`, `jokeText`, `jokeType`) VALUES
(1, 'Why don\'t scientists trust atoms? Because they make up everything.', 'Science'),
(2, 'Why did the scarecrow win an award? Because he was outstanding in his field.', 'Puns'),
(3, 'I told my wife she was drawing her eyebrows too high. She looked surprised.', 'Puns'),
(4, 'What did one ocean say to the other ocean? Nothing, they just waved.', 'Wordplay'),
(5, 'Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.', 'Wordplay'),
(10, 'new text..', 'new type of a joke..'),
(100, 'adjkl', 'sdfjh'),
(190, 'asjkdh', 'asdjkh'),
(192, 'asjkdh', 'asdjkh');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `jokes`
--
ALTER TABLE `jokes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
