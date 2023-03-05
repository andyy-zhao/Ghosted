import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import octagon from '../../assets/octagon.svg'
import './NavBar.css';

export const NavBar = () => {
    return (
        <Container className="main-nav-container">
            <Navbar bg="white" expand="lg" >
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img
                        alt=""
                        src={octagon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                        <span className="website-name">NAME <span className="website-name-small">OF THE</span> WEBSITE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="nav-right-navs">About</Nav.Link>
                    <Nav.Link href="#link" className="nav-right-navs">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
      );
}