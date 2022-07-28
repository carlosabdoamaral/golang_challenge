import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const IndexView = _ => {
    const [showMenu, setShowMenu] = useState(true)

    const closeMenu = () => setShowMenu(false)
    const openMenu = () => setShowMenu(true)
    const username = "Carlos Amaral"


    return (
        <div className="index-view">
            <div className="top">
                <h3>Hello {username}!</h3>

                <div className="actions">
                    <Button variant="primary" className="btn-custom">New person</Button>
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
                            <th>E-mail</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th >Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>E-mail</td>
                            <td>CPF</td>
                            <td>E-mail</td>
                            <td >Address</td>
                            <td>Actions</td>
                        </tr>
                        {/* <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export { IndexView }