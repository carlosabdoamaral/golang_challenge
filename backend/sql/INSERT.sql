-- PERSON --
INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate) VALUES('Template user', 18, '12345678910', '12345', 'user.template@gmail.com', '2004-03-02');


-- ADDRESS --
INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) VALUES (1, 'Rua', 'Bairro', 'Cidade', 'CEP', true, 1, '');


-- DIARY --
INSERT INTO diary(id_person, message_value, diary_date) VALUES (1, 'Bem vindo! Via postgres', NOW());