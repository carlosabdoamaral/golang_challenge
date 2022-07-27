-- PERSON --
INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate)
VALUES('Carlos Alberto Barcelos do Amaral', 18, '09378828957', '09378', 'carlosabdoamaral@gmail.com', '2004-06-03');

INSERT INTO person(username, age, cpf, cpf_doc, email, birthdate)
VALUES('Joao Pedro Alves', 24, '01234567891', '01234', 'j.pedro@gmail.com', '1998-04-27');


-- ADDRESS --
INSERT INTO address(id_person, street, neighborhood, city, zip, ismain, nth, observation) 
VALUES (1, 'Rua Professor Bento Aguido ', 'Trindade', 'Florianopolis', '88036410', true, 197, '');


-- DIARY --
INSERT INTO diary(id_person, message_value, diary_date)
VALUES (1, 'Mensagem vinda do postgres 1', NOW());