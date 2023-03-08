import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlidingComponent.css";
import { getRatings, getSentAndReceived, getNames, getTopWord, getTopEmoji, getMessages } from '../../utils/Api';
import { useState, useEffect } from 'react';

export const WrappedCarousel = () => {
    const [sent, setSent] = useState(null);
    const [received, setReceived] = useState(null);
    const [topFriend, setTopFriend] = useState(null);
    const [topWord, setTopWord] = useState(null);
    const [topEmoji, setTopEmoji] = useState(null);
    const [funnyMessage, setFunnyMessage] = useState(null);

    const settings = {
        infinite: true,
        speed: 2500,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0, // in milliseconds
    };

    useEffect(() => {
        const getSent = async () => {
            const result = await getSentAndReceived();
            setSent(result[0].Sent)
        };
        const getReceived = async () => {
            const result = await getSentAndReceived();
            setReceived(result[0].Received);
        };
        const getTopFriend = async () => {
            const result = await getRatings();
            const newResult = result[0].WithPhoneNumber.replace(/\+1/g,"");
            let topfriend = "";
            const names = await getNames();
            for (let i = 0; i < names.length; i++) {
                if (names[i].Number.includes(newResult)) {
                    topfriend = names[i].Name;
                    break;
                }
            }
            setTopFriend(topfriend);
        };
        const topWord = async () => {
            const result = await getTopWord();
            // ensuring the word is an actual word with letters
            for (let i = 0; i < result.length; i++) {
                if (/[a-zA-Z]/.test(result[i].word)) {
                    setTopWord(result[i].word);
                    break;
                }
            }
        };
        const emoji = async () => {
            const result = await getTopEmoji();
            let maxCount = 0;
            let maxEmoji = "";
            for (let emoji in result[0]) {
                if (result[0][emoji] > maxCount) {
                    maxCount = result[0][emoji];
                    maxEmoji = emoji;
                }
            }
            setTopEmoji(maxEmoji);
        };
        const fetchMessages = async () => {
            const result = await getMessages();
            const randomInteger = Math.floor(Math.random() * (100 - 24 + 1)) + 24;
            setFunnyMessage(result[randomInteger].MessageText)
        }
        getSent();
        getReceived();
        getTopFriend();
        topWord();
        emoji();
        fetchMessages();
    }, []);

    let sentAndReceived = parseInt(sent) + parseInt(received);

    // getRatings().then(ratings => console.log(ratings[0]))
    // .catch(error => console.error(error));
    return (
        <div className="slider">
            <Slider {...settings}>
                <div className="slider-content">
                    <h5>Total</h5>
                    <h2 className="total">{sentAndReceived}</h2>
                </div>
                <div className="slider-content">
                    <h5>Sent</h5>
                    <h2 className="sent">{sent}</h2>
                </div>
                <div className="slider-content">
                    <h5>Received</h5>
                    <h2 className="received">{received}</h2>
                </div>
                <div className="slider-content">
                    <h5>Top Emoji</h5>
                    <h2>{topEmoji}</h2>
                </div>
                <div className="slider-content">
                    <h5>Top Friend</h5>
                    <h2 className="topfriend">{topFriend}</h2>
                </div>
                <div className="slider-content">
                    <h5>Funniest Message</h5>
                    <h2 className="slider-value">{funnyMessage}</h2>
                </div>
                <div className="slider-content">
                    <h5>Favourite Word</h5>
                    <h2 className="fav-word">{topWord}</h2>
                </div>
            </Slider>
        </div>
    )
}