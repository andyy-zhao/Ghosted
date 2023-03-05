import { Container, Row, Col } from 'react-bootstrap';
import './Landing.css';
import testImage from '../../assets/test.png';
import { CgArrowRightO } from "react-icons/cg";
import { Link } from 'react-scroll';

export const Landing = () => {
    return (
        <Container className="container-landing">
            <Row className="landing-page-center-row">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="landing-page-title">
                            What will you learn from your texts?
                        </h2>
                        <p className="landing-page-desc">
                            Meet your new favourite personal website
                        </p>
                    </div>
                    <div><Link activeClass="active" to="wrapped" spy={true} smooth={true}>
                        <button className="get-started-btn">
                            Get Started <span className="icon-spacing"><CgArrowRightO /></span>
                        </button>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} md={6} className="image-column">
                    <div>
                        <h2>
                            <img src={testImage} style={{width: '720px', height:'auto'}} alt="ds"/>
                        </h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}