package model

type AddressModel struct {
	Id           uint   `json:"id"`
	Street       string `json:"street"`
	Neighborhood string `json:"neighborhood"`
	City         string `json:"City"`
	IdPerson     uint   `json:"idPerson"`
}
