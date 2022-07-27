package model

type AddressModel struct {
	Id_address   uint   `json:"id_address"`
	Id_person    uint   `json:"id_person"`
	Street       string `json:"street"`
	Neighborhood string `json:"neighborhood"`
	City         string `json:"city"`
	Zip          string `json:"zip"`
	Ismain       bool   `json:"ismain"`
	Nth          int    `json:"nth"`
	Observation  string `json:"observation"`
}
