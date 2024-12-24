import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBarMovies() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to='/'> Home </Nav.Link>
            <Nav.Link as={Link} to='/movies' > Movies</Nav.Link> 
            <Nav.Link as={Link} to='/contact'>Contact us</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBarMovies;