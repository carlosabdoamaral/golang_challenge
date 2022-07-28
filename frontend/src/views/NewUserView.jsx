import Button from 'react-bootstrap/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export const NewUserView = _ => {

    const [containErrors, setContainErrors] = useState(false)

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const postData = _ => {

        let first_name = document.querySelector(`#first_name`).value.toUpperCase()
        let last_name = document.querySelector(`#last_name`).value.toUpperCase()
        let full_name = `${first_name} ${last_name}`

        let cpf = document.querySelector(`#cpf`).value
        let email = document.querySelector(`#email`).value
        let birthdate = document.querySelector(`#birthdate`).value
        let city = document.querySelector(`#city`).value
        let neighborhood = document.querySelector(`#neighborhood`).value
        let street = document.querySelector(`#street`).value
        let zip = document.querySelector(`#zip`).value
        let nth = document.querySelector(`#house_number`).value
        let observations = document.querySelector(`#observations`).value
        let is_main = document.querySelector(`#is_main`).value

        if (observations === "") {
            observations = " ";
        }

        let person_object = {
            username : full_name,
            age : getAge(birthdate),
            cpf : cpf,
            cpf_doc : `${cpf[0]}${cpf[1]}${cpf[2]}${cpf[3]}${cpf[4]}`,
            email : email,
            birthdate : birthdate,
            Address : {
                street : street,
                neighborhood : neighborhood,
                city : city,
                zip : zip,
                ismain : is_main,
                nth : nth,
                observations : observations
            }
        }
    }

    return (
        <div className="new-user">
            <div className="top">
                <div>
                    <h3>
                        <ChevronLeftIcon className='return-button' onClick={() => { window.location.href = "/" }} />
                        New user!
                    </h3>
                </div>
            </div>

            <div className="content">
                {
                    containErrors &&
                <Alert key='danger' variant='danger'>
                    This is a danger alert—check it out!
                </Alert>
                }
                <Form>
                    <Row className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Col>
                            <Form.Control placeholder="First name" required id="first_name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" required id="last_name" />
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Your cpf" required id="cpf" />
                        <Form.Text className="text-muted">
                            Only the numbers, for example 12345678910
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control type="date" required id="birthdate" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" required id="email" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Label>Address</Form.Label>

                        <Col>
                            <Form.Control placeholder="City" required id="city" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="Neighborhood" required id="neighborhood" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="Street" required id="street" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="Zip" required id="zip" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="Number" required id="house_number" />
                        </Col>

                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Blue house, 4th floor, ..." id="observations" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Main address" defaultChecked={true} id="is_main" />
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="button" onClick={postData} className="mt-5 w-100">Submit</Button>
                </Form>
            </div>
        </div>
    )
}