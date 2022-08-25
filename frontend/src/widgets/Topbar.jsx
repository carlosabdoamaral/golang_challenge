import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const TopBar = () => {
    return (

    <div>
        <Navbar className="navbar-dark" bg="dark py-2">
        <Container>
          <Nav className="me-auto fw-light">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/repository">Repository infos</Nav.Link>
          </Nav>
        </Container>
        </Navbar>

            <h1 className='text-center m-5'>Avenue</h1>
    </div>
    )
}