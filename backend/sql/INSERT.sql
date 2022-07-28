-- PERSON --
INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES('Template user', 18, '12345678910', '12345', 'user.template@gmail.com', '2004-03-02');
INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES('Template user', 18, '12345678910', '12345', 'user.template@gmail.com', '2004-03-02') RETURNING id_person;


-- ADDRESS --
INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES (1, 'Rua', 'Bairro', 'Cidade', 'CEP', true, 1, '');


-- PERSON + ADDRESS --
DO $$
DECLARE lastid bigint;
BEGIN

	-- INSERINDO O USUARIO NA TABELA E RETORNANDO O ID GERADO
	INSERT INTO 
  		person(username, age, cpf, cpf_doc, email, birthdate)
	VALUES
		('Template user', 18, '12345678910', '12345', 'user.template@gmail.com', '2004-03-02')
	RETURNING id_person INTO lastid;

	-- INSERINDO O ADDRESS COM BASE NO ID GERADO ANTERIORMENTE
	INSERT INTO 
		address(id_person, street, neighborhood, city, zip, ismain, nth, observation) 
	VALUES 
		(lastid, 'Rua', 'Bairro', 'Cidade', 'CEP', true, 1, '');
END $$;


-- DIARY --
INSERT INTO diary(id_person, message_value, diary_date) VALUES (1, 'Bem vindo! Via postgres', NOW());