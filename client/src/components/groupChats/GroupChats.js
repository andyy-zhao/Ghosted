import './GroupChats.css';
import chatIcon from '../../assets/chat.png';
import { GroupsListGraph } from '../graphs/GroupsListGraph';

export const GroupChats = () => {

    return (
        <>
            <div className="rediscover-container">
                <div className="background">
                    <div className="main-div">
                        <div className="rediscover">
                            <div>
                                <span className="emoji">
                                <h1 className="title-1">Group Chats</h1>👨‍👩‍👧‍👦</span>
                            </div>
                        </div>
                        <div className="rediscover">
                            <div className="icon-img">
                                <img src={chatIcon} alt="chat-img" className="chatbubble"/>
                            </div>
                            <div className="body">
                                    <h4 className="body-title">
                                    Most active group chats
                                    </h4>
                            </div>
                        </div>
                        <div style={{paddingLeft: "40px"}}>
                            <GroupsListGraph />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}