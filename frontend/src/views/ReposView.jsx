import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { TopBar } from '../widgets/Topbar';
import { reposData } from '../static/data/reposData';
import { useEffect } from 'react';

export const ReposView = _ => {

    useEffect( () => {
        window.document.title = "Avenue | Repository"
    })

    return (
        <div className='index-view'>
            <TopBar />

            <InputGroup className="w-50 mx-auto my-5">
                <Form.Control
                    placeholder="Search..."
                    aria-label="Search..."
                />
                <InputGroup.Text>Enviar</InputGroup.Text>
            </InputGroup>

            <Accordion className="mx-5">
                {
                    reposData.map((r, index) => (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                <p>
                                    {
                                        r.observations.isEmpty &&
                                        <Badge bg="danger" className='mb-3 mx-1' pill>!</Badge>
                                    }

                                    {
                                        r.observations.readmeIsUpdated &&
                                        <Badge bg="warning" className='mb-3 mx-1' pill>!</Badge>
                                    }

                                    {
                                        r.observations.branchMainIsUpdated &&
                                        <Badge bg="warning" className='mb-3 mx-1' pill>!</Badge>
                                    }

                                    <br />

                                    <b>{r.name}</b>
                                    <br />
                                    <small className="text-muted">{r.subtitle}</small>
                                </p>
                            </Accordion.Header>

                            <Accordion.Body className="py-4">
                                {
                                    r.observations.isEmpty &&
                                    <Alert variant='danger'>
                                        <b>Importante!</b> <br /> Repositorio esta vazio
                                    </Alert>
                                }

                                {
                                    r.observations.branchMainIsUpdated &&
                                    <Alert variant='warning'>
                                        <b>Alerta!</b> <br /> A branch main nao esta atualizada
                                    </Alert>
                                }

                                {
                                    r.observations.readmeIsUpdated &&
                                    <Alert variant='warning'>
                                        <b>Alerta!</b> <br /> README nao esta atualizado
                                    </Alert>
                                }


                                <div className='mt-1'>
                                    <h5>Notes</h5>
                                    <hr />
                                    <Card className='my-2'>
                                        {
                                            r.observations.suggestionsList.length > 0 ?
                                                r.observations.suggestionsList.map((obs, k) => (
                                                    <Card.Body>{obs}</Card.Body>
                                                ))
                                                :
                                                <Card.Body>It's fine!</Card.Body>
                                        }
                                    </Card>
                                </div>


                                {/* <div className='mt-5'>
                                    <h5>Technology</h5>
                                    <hr />
                                    <Card className="my-1">
                                        {
                                            r.technologies.list.length > 0 ?

                                                r.technologies.list.map((tech, k) => (
                                                    <Card.Body>
                                                        <p>{tech.title}</p>
                                                    </Card.Body>
                                                ))

                                                :

                                                <Card.Body>
                                                    Not found
                                                </Card.Body>
                                        }
                                    </Card>
                                </div> */}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    )
}