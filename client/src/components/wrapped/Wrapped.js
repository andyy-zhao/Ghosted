import './Wrapped.css';
import { WrappedCarousel } from './WrappedCarousel';
export const Wrapped = () => {
    return (
        <div id="wrapped" className="wrapped">
            <div className="wrapped-div">
                <p className="iMessage-wrapped">
                    iMessage Wrapped
                </p>
                <p className='wrapped-desc'>
                    Your all-time iMessage wrapped is here! Revisit your funniest messages, group chats, and words!
                </p>
                <WrappedCarousel />
            </div>
        </div>
    )
}