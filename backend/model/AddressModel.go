package model

type AddressModel struct {
	Id_address   int    `json:"id_address"`
	Id_person    int    `json:"id_person"`
	Street       string `json:"street"`
	Neighborhood string `json:"neighborhood"`
	City         string `json:"city"`
	Zip          string `json:"zip"`
	Ismain       bool   `json:"ismain"`
	Nth          int    `json:"nth"`
	Observation  string `json:"observation"`
}
