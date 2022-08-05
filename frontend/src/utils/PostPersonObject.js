import axios from "axios"

export const PostPersonObject = _ => {
    let person = {
        name : document.getElementById(`name`).value,
        age : document.getElementById(`age`).value,
        address : {
            street : document.getElementById(`street`).value,
            neighborhood : document.getElementById(`neighborhood`).value,
            city : document.getElementById(`city`).value
        },
        diary : []
    }

    axios.post('http://localhost:8080/api/person/new', person)
}