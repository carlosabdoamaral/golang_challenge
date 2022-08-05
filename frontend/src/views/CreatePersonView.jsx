import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PostPersonObject } from '../utils/PostPersonObject';

export const CreatePersonView = () => {
    
    return (
        <div className='create-person'>
            <Form className='form-create-person'>
                <h1 className='mb-5'>Create account</h1>

                <Row>
                    <Col sm={8}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" id='name' placeholder="Nome" />
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" id='age' placeholder="Idade" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" id='street' placeholder="Rua" />
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Neighborhood</Form.Label>
                            <Form.Control type="text" id='neighborhood' placeholder="Bairo" />
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" id='city' placeholder="Cidade" />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="outline-dark" className="mt-5 w-100" onClick={() => {PostPersonObject()}}>Create account</Button>
            </Form>
        </div>
    )
}