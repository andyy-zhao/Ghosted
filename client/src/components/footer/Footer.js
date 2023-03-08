import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ghostIcon from '../../assets/ghost.png'
import locationIcon from '../../assets/location.png'
import productIcon from '../../assets/product.png'
import githubIcon from '../../assets/github.png';
import userIcon from '../../assets/user.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-container">
                <Row>
                    <Col className="first-col">
                        <Row className="title-row">
                            <span className="website-name-1"><img
                            alt=""
                            src={ghostIcon}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"/> GHOSTED</span>
                        </Row>
                        <Row className="first-col-2nd-row">
                            <span>
                                <img src={locationIcon} alt="location-drop" className="footer-location-img"/> Toronto, CAN
                            </span>
                        </Row>
                        <Row className="first-col-2nd-row">
                            <span>
                            © Name of Website 2023
                            </span>
                        </Row>
                    </Col>
                    <Col className="second-col" sm={2}>
                        <Row className="second-col-first">
                            <span>
                                <img src={productIcon} alt="product-img" className="product-icon"/> Product
                            </span>
                        </Row>
                        <Row className="second-col-rest">
                            <span>
                                Download
                            </span>
                        </Row>
                        <Row className="second-col-rest">
                            <span>
                                Privacy Policy
                            </span>
                        </Row>
                        <Row className="second-col-rest">
                            <span>
                                Terms & Conditions
                            </span>
                        </Row>
                        <Row className="second-col-rest">
                            <div className="github-button">
                                <img src={githubIcon} alt="GitHub Icon" className="github-icon" />
                                <span className="github-text">GitHub</span>
                            </div>   
                        </Row>
                    </Col>
                    <Col className="third-col">
                        <Row className="third-col-first">
                            <span>
                                <img src={userIcon} alt="user-img" className="product-icon"/> Contact
                            </span>
                        </Row>
                        <Row className="third-col-rest">
                            <span>
                                Support
                            </span>
                        </Row>
                        <Row className="third-col-rest">
                            <span>
                                Github
                            </span>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}