CREATE TABLE person(
	id_person SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	age INT
);

CREATE TABLE address (
	id_address SERIAL PRIMARY KEY,
	id_person INT NOT NULL UNIQUE REFERENCES person(id_person),
	street VARCHAR(255) NOT NULL,
	neighborhood VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL
);

CREATE TABLE diary (
	id_diary SERIAL PRIMARY KEY,
	id_person INT NOT NULL REFERENCES person(id_person),
	message VARCHAR(200) NOT NULL
);

SELECT id_person FROM person WHERE name='name_user';
SELECT * FROM person p INNER JOIN address a ON p.id_person = a.id_person;

INSERT INTO person(name, age) VALUES ('Carlos Alberto Barcelos do Amaral', 18);
INSERT INTO address(id_person, street, neighborhood, city) VALUES(1, 'Professor Bento Aguido Vieira', 'Trindade', 'Floripa');