package utils

import (
	"root/model"
)

func ConvertSelectToPersonDTO(p model.PersonModel, a model.AddressModel) (model.PersonModelDTO, error) {

	//TODO: Prever se vier empty
	obj := model.PersonModelDTO{
		PersonModel: p,
		Address:     a,
	}

	return obj, nil
}
