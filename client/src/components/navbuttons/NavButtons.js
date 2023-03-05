import './NavButtons.css';
import { useState } from 'react';
import { Rediscover } from '../rediscover/Rediscover';
import { WordsAndEmojis } from '../words/WordsAndEmojis';
import { GroupChats } from '../groupChats/GroupChats';

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
                <button className={selected === "btn5" ? "nav-btn-selected" : "nav-btn"} onClick={() => handleClick("btn5")}>
                🥰 S/O
                </button>
            </div>
            {selected === "btn1" && <Rediscover />}
            {selected === "btn2" && <WordsAndEmojis />}
            {selected === "btn3" && <GroupChats />}
        </>
    );
};
  