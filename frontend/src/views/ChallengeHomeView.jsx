import { useEffect, useState } from 'react';
import { TopBar } from '../widgets/Topbar';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import { env } from "../static/data/env"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Toast from "react-bootstrap/Toast"

export const ChallengeHomeView = _ => {
    const [dataKey, setDatakey] = useState([])


    //CREATE USER MODAL
    const [showingNewUserModal, setShowingNewUserModal] = useState(false)
    const openNewUseModal = () => { setShowingNewUserModal(true) }
    const closeNewUseModal = () => { setShowingNewUserModal(false) }
    const [createUserModalError, setCreateUserModalError] = useState("")

    //TOAST
    const [showToast, setShowToast] = useState(false)
    const [toastTitle, setToastTitle] = useState("")
    const [toastSubtitle, setToastSubtitle] = useState("")
    const [toastMessage, setToastMessage] = useState("")

    useEffect(_ => { window.document.title = "Avenue | Challenge" })
    useEffect(_ => {
        getUsers(true)
    }, [])

    const [uf, setUF] = useState("State")
    const [city, setCity] = useState("City")
    const [address, setAddress] = useState("Address")
    const handleNewUserRequest = _ => {
        const firstname = document.getElementById("firstname").value
        const lastname = document.getElementById("lastname").value
        const age = document.getElementById("age").value
        const cpf = document.getElementById("cpf").value
        const cep = document.getElementById("cep").value
        const addressNumber = document.getElementById("addressNth").value
        const complement = document.getElementById("complement").value

        if (firstname === "") { setCreateUserModalError("You must provide a first name") }
        else if (lastname === "") { setCreateUserModalError("You must provide a last name") }
        else if (cpf.length < 11) { setCreateUserModalError("You must provide a CPF") }
        else if (age === "") { setCreateUserModalError("You must provide a Age") }
        else if (cep.length < 8) { setCreateUserModalError("You must provide a CEP") }
        else if (addressNumber === "") { setCreateUserModalError("You must provide a number") }
        else {
            setCreateUserModalError("")
            const body = {
                user: {
                    fullname: `${firstname} ${lastname}`,
                    cpf: cpf,
                    age: age,
                },

                address: {
                    user: cpf,
                    street: address,
                    state: uf,
                    city: city,
                    number : addressNumber,
                    complement : complement
                },
                diary: []
            }

            axios.post(env.local.createUser, body)
                .then((res) => {
                    if (res.data.toUpperCase() === "CREATED!") {
                        let date = new Date()
                        setToastTitle("Create user status")
                        setToastSubtitle(`${date.getHours()}:${date.getMinutes()}`)
                        setToastMessage(`User ${body.user.fullname} created successfully`)
                        setShowToast(true)
                        
                        getUsers(false)

                        closeNewUseModal()
                    }
                })
        }
    }

    const getCEP = () => {
        // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
        const cep = document.getElementById(`cep`).value
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => {
                    setCity(res.data.localidade)
                    setAddress(res.data.logradouro)
                    setUF(res.data.uf)
                    console.log(res.data)
                })
        }
    }

    const getUsers = mockmode => {
        if (mockmode) {
            setDatakey(
                [
                    {
                        "cpf": "00000000000",
                        "fullname": "Exemplo mock",
                        "age": 20
                    }
                ]
            )
        } else {
            axios.get(env.local.allUsers)
            .then((res) => {
                if (res.data.length > 0) {
                    setDatakey(res.data)
                }
            })
        }
    }

    return (
        <div>
            <TopBar />

            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} position="top-end" className="ms-auto m-5" autohide>
                <Toast.Header>
                    <strong className="me-auto">{toastTitle}</strong>
                    <small>{toastSubtitle}</small>
                </Toast.Header>
                <Toast.Body> {toastMessage} </Toast.Body>
            </Toast>


            <div className='w-100 d-flex justify-content-between px-5'>
                <h3>All accounts</h3>
                <Button variant="outline-success" onClick={openNewUseModal}>Create Account</Button>
            </div>

            <hr className='mx-5'/>

            <div className="list mx-5">
                {
                    dataKey.map((user, i) => (
                        <Card className="mt-2">
                            <Card.Body className='d-flex justify-content-between'>
                                <div>
                                    <Card.Title>{user.fullname}</Card.Title>
                                    <p>{user.cpf} | {user.age} years</p>
                                </div>

                                <div>
                                    <Button variant="outline-dark" className='mx-1'>New note</Button>
                                    <Button variant="outline-dark" className='mx-1'>All notes</Button>
                                    <Button variant="outline-dark" className='mx-1'>Update address</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>



            <Modal
                show={showingNewUserModal}
                onHide={closeNewUseModal}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        createUserModalError !== "" &&
                        <Alert variant='danger'>
                            <b>Important!</b> <br /> {createUserModalError}
                        </Alert>
                    }

                    <Form onSubmit={handleNewUserRequest}>
                        <div className="border rounded px-3 my-3">
                            <h4 className="mt-3 text-center">User</h4>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="First name..." id="firstname" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Last name..." id="lastname" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>CPF</Form.Label>
                                        <Form.Control type="text" placeholder="CPF..." id="cpf" />
                                        <Form.Text className="text-muted"> You use just the numbers </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="number" placeholder="Age..." id='age' />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

                        <div className="border rounded px-3 my-3">
                            <h4 className="mt-3 text-center">Address</h4>

                            <Form.Group className="mb-3 w-50 mx-auto">
                                <Form.Control type="text" placeholder="CEP" onChange={getCEP} id="cep" />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>UF</Form.Label>
                                        <Form.Control type="text" placeholder={uf} disabled />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder={city} disabled />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder={address} disabled />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Number</Form.Label>
                                        <Form.Control type="number" placeholder="number" id="addressNth" required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Complement</Form.Label>
                                <Form.Control type="text" placeholder='Complement' id="complement" />
                            </Form.Group>
                        </div>

                    </Form>

                    <Button onClick={handleNewUserRequest} variant='outline-success' className="w-100 mt-5">Create!</Button>
                </Modal.Body>
            </Modal>
        </div >
    )
}