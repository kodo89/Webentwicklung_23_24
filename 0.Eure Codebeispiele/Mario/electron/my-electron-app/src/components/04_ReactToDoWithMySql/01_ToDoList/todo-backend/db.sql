CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
);



INSERT INTO todos (text, done) VALUES ('Buy groceries', false);
INSERT INTO todos (text, done) VALUES ('Finish homework', true);
INSERT INTO todos (text, done) VALUES ('Call mom', false);
INSERT INTO todos (text, done) VALUES ('Go for a run', true);