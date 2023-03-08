import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ghostIcon from '../../assets/ghost.png'
import './NavBar.css';

export const NavBar = () => {
    return (
        <Container className="main-nav-container">
            <Navbar bg="white" expand="lg" >
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img
                        alt=""
                        src={ghostIcon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                        {/* <span className="website-name">iMESSAGE <span className="website-name-small">is</span> REVISITED</span> */}
                        <span className="website-name">GHOSTED</span>
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