







CREATE TABLE objectUser (
    ID integer AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30),
    Password VARCHAR(20)
);



CREATE TABLE object (
    ID integer AUTO_INCREMENT PRIMARY KEY,
    IDuser INT,
    itemList VARCHAR(30),
    ItemlistDone VARCHAR(30),
    FOREIGN KEY (IDuser) REFERENCES objectUser(ID)
);






INSERT
INTO objectUser (ID, Name, Password)
VALUES 
('Mario', '123'),
('Bernd', '1234'),
('Kathi', '1235');



INSERT
INTO object (IDuser, itemList, itemListDone)
VALUES 
(1, 'Einkaufen', 'false'),
(1, 'Essen', 'false'),
(1, 'Schlafen', 'false'),
(2, 'Laufen', 'false'),
(2, 'Essen', 'false'),
(2, 'Shoppen', 'false');















