import { useEffect } from "react";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { templatePerson } from "../utils/data";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const IndexView = _ => {
    const [showMenu, setShowMenu] = useState(true)
    const [persons, setPersons] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(templatePerson)
    const [didLoadData, setDidLoadData] = useState(false)

    const closeMenu = () => setShowMenu(false)
    const closeModal = () => setShowModal(false)

    const openMenu = () => setShowMenu(true)
    const openModal = () => setShowModal(true)

    useEffect(() => {
        axios.get("http://localhost:8080/api/all")
            .then(res => {
                setPersons(res.data)
                setDidLoadData(true)
            })
    }, [])

    return (
        <div className="index-view">
            <div className="top">
                <h3>Welcome!</h3>

                <div className="actions">
                    <Button variant="primary" className="btn-custom" onClick={() => window.location.href = "/new"}>New person</Button>
                    <Button variant="primary" className="btn-custom">New diary</Button>
                    <Button variant="primary" className="btn-custom">Change address</Button>
                    <Button variant="danger" className="btn-custom">Delete person</Button>
                </div>
            </div>

            <div className="content">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((p, i) => (
                                <tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.username}</td>
                                    <td>{p.age}</td>

                                    <td>
                                        {p.cpf[0]}{p.cpf[1]}{p.cpf[2]}.
                                        {p.cpf[3]}{p.cpf[4]}{p.cpf[5]}.
                                        {p.cpf[6]}{p.cpf[7]}{p.cpf[8]}-
                                        {p.cpf[9]}{p.cpf[10]}
                                    </td>
                                    <td>{p.email}</td>
                                    <td >{p.Address.zip}</td>
                                    <td>
                                        <Button variant="outline-dark" onClick={() => { setShowModal(true); setModalData(persons[p.id - 1]) }}>Details</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                {
                    didLoadData &&
                    <Modal show={showModal} onHide={closeModal} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <small>#{modalData.id} </small>
                                <p>{modalData.username} </p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3" style={{ width: '100%' }}>
                                    CPF: {modalData.cpf}
                                </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3" style={{ width: '100%' }}>
                                    CPF doc: {modalData.cpf_doc}
                                </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3" style={{ width: '100%' }}>
                                    Birthdate: {modalData.birthdate}
                                </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3" style={{ width: '100%' }}>
                                    E-mail: {modalData.email}
                                </InputGroup.Text>
                            </InputGroup>

                            <OverlayTrigger overlay={<Tooltip id="tooltip">{modalData.Address.city}, {modalData.Address.neighborhood}, {modalData.Address.street}, {modalData.Address.nth}</Tooltip>}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon3" style={{ width: '100%' }}>
                                        Address: {modalData.Address.zip}
                                    </InputGroup.Text>
                                </InputGroup>
                            </OverlayTrigger>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={closeModal}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        </div>
    )
}

export { IndexView }


{/* <InputGroup.Text id="basic-addon3" style={{ width: '75%' }}>
{modalData.Address.city}, {modalData.Address.neighborhood}, {modalData.Address.street}, {modalData.Address.nth}
</InputGroup.Text> */}