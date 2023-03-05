import './WordsAndEmojis.css';
import penIcon from '../../assets/pen.png';
import starIcon from '../../assets/star.png';
import receivedIcon from '../../assets/receiver.png';
import thinkingIcon from '../../assets/thinking.png';
import { getSentAndReceived } from '../../utils/Api';
import { useState, useEffect } from 'react'
import { WordsGraph } from '../graphs/WordsGraph';
import { ReceivedEmojisGraph } from '../graphs/EmojisGraph';
import { SentEmojisGraph } from '../graphs/SentEmojisGraph';
import { ReceivedWordsGraph } from '../graphs/ReceivedWordsGraph';

export const WordsAndEmojis = () => {
    const [sent, setSent] = useState(null);
    const [received, setReceived] = useState(null);

    useEffect(() => {
        const getSent = async () => {
            const result = await getSentAndReceived();
            setSent(result[0].Sent)
        };
        const getReceived = async () => {
            const result = await getSentAndReceived();
            setReceived(result[0].Received);
        };
        getSent();
        getReceived();
    }, []);

    let sentAndReceived = parseInt(sent) + parseInt(received);
    if (sentAndReceived > 9999) {
        sentAndReceived = sentAndReceived.toString();
        sentAndReceived = sentAndReceived.slice(0,2) + "," + sentAndReceived.slice(2)
    }
    let newSent = sent;
    if (newSent > 9999) {
        newSent= newSent.toString();
        newSent = newSent.slice(0,2) + "," + newSent.slice(2)
    }

    let newReceived = received;
    if (newReceived > 9999) {
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
                                <span className="emoji">
                                <h1 className="title-1"> Words & Emojis</h1>😄</span>
                            </div>
                        </div>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={penIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Top Sent Words
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                            <WordsGraph />
                        </div>
                        <br></br>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={starIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Top Received Emojis
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                            <ReceivedEmojisGraph />
                        </div>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={receivedIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Top Received Words
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                            <ReceivedWordsGraph />
                        </div>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={thinkingIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Top Sent Emojis
                                    </h4>
                                    <p className="body-desc">
                                        excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                            <SentEmojisGraph />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}