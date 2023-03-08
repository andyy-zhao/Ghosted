import './Sentiment.css';
import chatbubble from "../../assets/speech-bubble.png";
import { CardSlider } from './CardSlider';

export const Sentiment = () => {

    return (
        <>
            <div className="rediscover-container">
                <div className="background">
                    <div className="main-div">
                        <div className="rediscover">
                            <div>
                                <span className="emoji">
                                <h1 className="title-1">Sentiment </h1>❤️</span>
                            </div>
                            <div className="icon-img">
                                <img src={chatbubble} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Random Facts
                                    </h4>
                                    <p className="body-desc">
                                        Measures how "good" of a texter you are, excludes group chats
                                    </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px", clear:"both"}}>
                            <CardSlider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}