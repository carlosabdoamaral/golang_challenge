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

export const ChallengeView = _ => {
    const [dataKey, setDatakey] = useState([])
    const [userToUpdateCPF, setUserToUpdateCPF] = useState("")

    //CREATE USER MODAL
    const [showingNewUserModal, setShowingNewUserModal] = useState(false)
    const openNewUseModal = () => { setShowingNewUserModal(true) }
    const closeNewUserModal = () => { setShowingNewUserModal(false) }
    const [createUserModalError, setCreateUserModalError] = useState("")

    //UPDATE USER MODAL
    const [showingUpdateUserModal, setShowingUpdateUserModal] = useState(false)
    const [updateUserModalError, setUpdateUserModalError] = useState("")
    const openUpdateUserModal = cpf => { setUserToUpdateCPF(cpf); setShowingUpdateUserModal(true) }
    const closeUpdateUserModal = () => { setShowingUpdateUserModal(false) }

    //ADD NOTE USER MODAL
    const [showingNewNoteUserModal, setShowingNewNoteUserModal] = useState(false)
    const [newNoteUserModalError, setNewNoteModalError] = useState("")
    const [userToCreateNote, setUserToCreateNote] = useState("")
    const openNewNoteUserModal = cpf => { setUserToCreateNote(cpf); setShowingNewNoteUserModal(true) }
    const closeNewNoteUserModal = () => { setShowingNewNoteUserModal(false) }

    //TOAST
    const [showToast, setShowToast] = useState(false)
    const [toastTitle, setToastTitle] = useState("")
    const [toastSubtitle, setToastSubtitle] = useState("")
    const [toastMessage, setToastMessage] = useState("")

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

        if (firstname === "") { setCreateUserModalError("You must provide a first name"); return }
        else if (lastname === "") { setCreateUserModalError("You must provide a last name"); return }
        else if (cpf.length < 11) { setCreateUserModalError("You must provide a CPF"); return }
        else if (age === "") { setCreateUserModalError("You must provide a Age"); return }
        else if (cep.length < 8) { setCreateUserModalError("You must provide a CEP"); return }
        else if (addressNumber === "") { setCreateUserModalError("You must provide a number"); return }
        else {
            setCreateUserModalError("")

            const body = {
                user: {
                    fullname: `${firstname} ${lastname}`,
                    cpf: `${cpf}`,
                    age: `${age}`,
                },

                address: {
                    user: cpf,
                    street: address,
                    state: uf,
                    city: city,
                    number: addressNumber,
                    complement: complement
                },
                diary: []
            }

            axios.post(env.local.createUser, body)
                .then((res) => {
                    console.log(res)
                    if (res.data.toUpperCase() === "CREATED!") {
                        let date = new Date()
                        setToastTitle("Create user status")
                        setToastSubtitle(`${date.getHours()}:${date.getMinutes()}`)
                        setToastMessage(`User ${body.user.fullname} created successfully`)
                        setShowToast(true)

                        getUsers(false)

                        closeNewUserModal()
                    }
                })
        }
    }

    const getCEP = () => {
        // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
        let cep = document.getElementById(`cep`).value
        cep = cep.replace("-", "")

        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => {
                    setCity(res.data.localidade)
                    setAddress(res.data.logradouro)
                    setUF(res.data.uf)
                })
        }
    }

    const getUsers = mockmode => {
        if (mockmode) {
            setDatakey([{ "cpf": "00000000000", "fullname": "Exemplo mock", "age": 20 }])
        } else {
            axios.get(env.local.allUsers)
                .then((res) => {
                    if (res.data.length > 0) {
                        setDatakey(res.data)
                    }
                })
        }
    }

    const handleUpdateAddressRequest = _ => {
        const cep = document.getElementById("cep").value
        const addressNumber = document.getElementById("addressNth").value
        const complement = document.getElementById("complement").value

        if (cep.length <= 8 && addressNumber !== null) {
            const data = {
                user: `${userToUpdateCPF}`,
                street: address,
                state: uf,
                city: city,
                number: addressNumber,
                complement: complement
            }

            axios.put(env.local.updateAddress, data)
                .then((res) => {
                    if (res.status === 200) {
                        getUsers()
                        closeUpdateUserModal()
                    }
                })
        }
    }

    const handleNewNoteRequest = _ => {
        const noteContent = document.getElementById("new-note").value

        axios.post(env.local.newNote, {
            author: userToCreateNote,
            message: noteContent,
        })
            .then((res) => {
                if (res.status === 201) {
                    getUsers()
                    closeNewNoteUserModal()
                }
            })
    }

    useEffect(_ => { window.document.title = "Avenue | Challenge" })
    useEffect(_ => { getUsers(false) }, [])

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

            <hr className='mx-5' />

            <div className="list mx-5">
                {
                    dataKey.map((user, i) => (
                        <Card className="mt-2">
                            <Card.Body className='d-flex justify-content-between'>
                                <div>
                                    <Card.Title>{user.user.fullname}</Card.Title>
                                    <p>{user.address.state}, {user.address.city}, {user.address.street}, {user.address.number}</p>
                                </div>

                                <div>
                                    <Button variant="outline-dark" className='mx-1' onClick={() => { openNewNoteUserModal(user.user.cpf) }}>New note</Button>
                                    <Button variant="outline-dark" className='mx-1' onClick={() => { openUpdateUserModal(user.user.cpf) }}>Update address</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>


            <Modal
                show={showingNewUserModal}
                onHide={closeNewUserModal}
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

                    <Form>
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

            <Modal
                show={showingUpdateUserModal}
                onHide={closeUpdateUserModal}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        createUserModalError !== "" &&
                        <Alert variant='danger'>
                            <b>Important!</b> <br /> {updateUserModalError}
                        </Alert>
                    }

                    <Form>
                        <div className="rounded px-3 my-3">
                            <h4 className="mt-3 text-center">Address</h4>

                            <Form.Group className="mb-3 w-50 mx-auto">
                                <Form.Control type="text" placeholder="CEP" onChange={getCEP} id="cep" />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>UF</Form.Label>
                                        <Form.Control type="text" placeholder={uf} disabled id="uf" />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder={city} disabled id="city" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder={address} disabled id="address" />
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

                    <Button onClick={handleUpdateAddressRequest} variant='outline-success' className="w-100 mt-5">Update!</Button>
                </Modal.Body>
            </Modal>

            <Modal
                show={showingNewNoteUserModal}
                onHide={closeNewNoteUserModal}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>New note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="rounded my-3">

                        <Form.Control type="text" placeholder="Your note..." id='new-note' />
                        {
                            newNoteUserModalError !== "" &&
                            <Form.Text className="text-danger">
                                <b>Important!</b> <br /> {newNoteUserModalError}
                            </Form.Text>
                        }
                    </div>

                    <div className="d-flex justify-content-end">
                        <Button onClick={handleNewNoteRequest} variant='outline-success' className="w-25 mt-2">Post!</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}