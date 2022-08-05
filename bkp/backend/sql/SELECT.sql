SELECT * FROM person;

SELECT * FROM person WHERE id_person = 2;

SELECT * FROM person FULL OUTER JOIN address a  ON a.id_person = person.id_person FULL OUTER JOIN diary d ON d.id_person = person.id_person WHERE person.id_person = 1

SELECT * FROM address;
SELECT * FROM diary;