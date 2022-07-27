CREATE TABLE person (
	id_person SERIAL PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	age INT NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	cpf_doc VARCHAR(5) NOT NULL, -- 5 primeiros digitos (Otimizacao no tempo de resp)
	email VARCHAR(255) NOT NULL,
	birthdate DATE NOT NULL
);

CREATE TABLE address (
	id_address SERIAL PRIMARY KEY,
	id_person INT UNIQUE NOT NULL REFERENCES person(id_person),
	street VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	zip VARCHAR(8) NOT NULL,
	isMain BOOL,
	nth INT NOT NULL,
	observation VARCHAR(255)
);

CREATE TABLE diary (
	id_diary SERIAL PRIMARY KEY,
	id_person INT NOT NULL REFERENCES person(id_person),
	message_value VARCHAR(255) NOT NULL,
	diary_date timestamp
);
