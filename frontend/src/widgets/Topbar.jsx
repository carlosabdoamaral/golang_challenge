import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';

export const TopBar = () => {
    return (

    <div>
        <Navbar className="navbar-dark" bg="dark py-2">
        <Container>
          <Nav className="me-auto fw-light">
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" className="mx-2">
                Avenue
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">About</Dropdown.Item>
                <Dropdown.Item href="/avenue/repository">Repository infos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-light" className="mx-2">
                Challenge
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/challenge/pannel">Pannel</Dropdown.Item>
                <Dropdown.Item href="/challenge/about">About</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Container>
        </Navbar>

            <h1 className='text-center m-5'>Avenue</h1>
    </div>
    )
}