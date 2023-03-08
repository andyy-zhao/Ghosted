import './Rediscover.css';
import chatbubble from "../../assets/speech-bubble.png";
import friendsIcon from '../../assets/friends.png'
import clockIcon from '../../assets/clock.png'
import calendarIcon from '../../assets/calendar.png'
import { Container, Row, Col } from 'react-bootstrap';
import { getSentAndReceived, getMessages } from '../../utils/Api';
import { useState, useEffect } from 'react'
import { RatingGraph } from '../graphs/RatingGraph';
import { RectangleRow } from '../graphs/RectangleRow';
import { ReceivedRow } from '../graphs/ReceivedRow';
import { DaysGraph } from '../graphs/DaysGraph';

export const Rediscover = () => {
    const [sent, setSent] = useState(null);
    const [received, setReceived] = useState(null);
    const [earliestDate, setEarliestDate] = useState(null);
    const [latestDate, setLatestDate] = useState(null);

    useEffect(() => {
        const getSent = async () => {
            const result = await getSentAndReceived();
            setSent(result[0].Sent)
        };
        const getReceived = async () => {
            const result = await getSentAndReceived();
            setReceived(result[0].Received);
        };
        const getEarliestDate = async () => {
            const result = await getMessages();
            setEarliestDate(result[result.length - 1].TextDate.substring(0, result[result.length - 1].TextDate.indexOf(' ')));
        };
        const getLatestDate = async () => {
            const result = await getMessages();
            setLatestDate(result[0].TextDate.substring(0, result[0].TextDate.indexOf(' ')));
        };
        getSent();
        getReceived();
        getEarliestDate();
        getLatestDate();
    }, []);

    let sentAndReceived = parseInt(sent) + parseInt(received);
    if (sentAndReceived > 99999) {
        sentAndReceived = sentAndReceived.toString();
        sentAndReceived = sentAndReceived.slice(0,3) + "," + sentAndReceived.slice(3)
    } else if (sentAndReceived > 9999) {
        sentAndReceived = sentAndReceived.toString();
        sentAndReceived = sentAndReceived.slice(0,2) + "," + sentAndReceived.slice(2)
    }

    let newSent = sent;
    if (newSent > 99999) {
        newSent= newSent.toString();
        newSent = newSent.slice(0,3) + "," + newSent.slice(3)
    } else if (newSent > 9999) {
        newSent= newSent.toString();
        newSent = newSent.slice(0,2) + "," + newSent.slice(2)
    }

    let newReceived = received;
    if (newReceived > 99999) {
        newReceived= newReceived.toString();
        newReceived = newReceived.slice(0,3) + "," + newReceived.slice(3)
    } else if (newReceived > 9999) {
        newReceived= newReceived.toString();
        newReceived = newReceived.slice(0,2) + "," + newReceived.slice(2)
    }

    return (
        <>
            <div className="rediscover-container">
                <div className="background">
                    <div className="main-div">
                        <div className="rediscover">
                            <div>
                            <div>
                                <span className="emoji">
                                <h1 className="title-1">Rediscover Relationships </h1>✨</span>
                            </div>
                            </div>
                            <div className="icon-img">
                                <img src={chatbubble} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Total Sent vs Received
                                    </h4>
                                    <p className="body-desc">
                                        between {earliestDate} and {latestDate}, excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div className="main-container">
                            <Container>
                                <Row>
                                    <Col className="what">
                                        <p className="column-header">Total</p>
                                        <h2 className="sent-received-body">{sentAndReceived}</h2>
                                    </Col>
                                    <Col>
                                        <p className="column-header">Sent</p>
                                        <h2 className="sent-body">{newSent}</h2>
                                    </Col>
                                    <Col>
                                        <p className="column-header">Received</p>
                                        <h2 className="received-body">{newReceived}</h2>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={friendsIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Top Messaged Friends
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                        <RatingGraph />
                        </div>
                        <br></br>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={clockIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Messages by Time of Day
                                    </h4>
                                    <p className="body-desc">
                                        represented in your local time zone, excludes group chats
                                    </p>
                            </div>
                        </div>
                        <RectangleRow />
                        <ReceivedRow />
                        <br></br><br></br>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={calendarIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Number of Messages Per Day
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                        <DaysGraph />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}