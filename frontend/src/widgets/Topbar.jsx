import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';

export const TopBar = () => {
  return (

    <div>
      <Navbar className="navbar-dark" bg="dark py-2">
        <Container>
          <Navbar.Brand>Avenue</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/repository">Repos</Nav.Link>
              <Nav.Link href="/challenge">Challenge</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className='text-center m-5'>Avenue</h1>
    </div>
  )
}