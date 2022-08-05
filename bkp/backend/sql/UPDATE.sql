UPDATE address
SET
	street = 'Rua do update',
	neighborhood = 'Bairo do update',
	city = 'Cidade do update',
	zip = '00000000',
	ismain = true,
	nth = 123,
	observation = ''
WHERE
	id_person = 1;