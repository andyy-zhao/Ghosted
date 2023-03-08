import './NavButtons.css';
import { useState } from 'react';
import { Rediscover } from '../rediscover/Rediscover';
import { WordsAndEmojis } from '../words/WordsAndEmojis';
import { GroupChats } from '../groupChats/GroupChats';
import { Sentiment } from '../sentiment/Sentiment';

export const NavButtons = () => {
    const [selected, setSelected] = useState("btn1");
  
    const handleClick = (prop) => {
      setSelected(prop);
    };
  
    return (
        <>
            <div className="button-container">
                <button className={selected === "btn1" ? "nav-btn-selected" : "nav-btn"} onClick={() => handleClick("btn1")}>
                🧘 Rediscover Relationships
                </button>
                <button className={selected === "btn2" ? "nav-btn-selected" : "nav-btn"} onClick={() => handleClick("btn2")}>
                😄 Words & Emojis
                </button>
                <button className={selected === "btn3" ? "nav-btn-selected" : "nav-btn"} onClick={() => handleClick("btn3")}>
                👨‍👩‍👧‍👦 Groups
                </button>
                <button className={selected === "btn4" ? "nav-btn-selected" : "nav-btn"} onClick={() => handleClick("btn4")}>
                ❤️ Sentiment
                </button>
            </div>
            <div style={selected === "btn1" ? {} : { display: "none" }}>
                <Rediscover />
            </div>
            <div style={selected === "btn2" ? {} : { display: "none" }}>
                <WordsAndEmojis />
            </div>
            <div style={selected === "btn3" ? {} : { display: "none" }}>
                <GroupChats />
            </div>
            <div style={selected === "btn4" ? {} : { display: "none" }}>
                <Sentiment />
            </div>
            
        </>
    );
};
  