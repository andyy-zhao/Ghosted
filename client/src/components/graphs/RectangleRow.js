import './RectangleRow.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getSentHours } from '../../utils/Api';
import { useEffect, useState } from 'react';

export const RectangleRow = () => {
    const [sentTimes, setSentTimes] = useState(null);

    const getColor = (value) => {
        const minColor = [173, 216, 230]; // light blue
        const maxColor = [0, 115, 186]; // navy
        const range = maxColor.map((max, i) => max - minColor[i]);
        const ratio = (value - 50) / (2200 - 50);
        const color = minColor.map((min, i) => Math.floor(min + range[i] * ratio));
        return `rgb(${color.join(",")})`;
    }

    const tooltip = (value) => (
        <Tooltip id="tooltip">{value}</Tooltip>
    );

    const getToolTipInfo = (info) => {
        let time = info.HourOfDay + ":00";
        let messages = info.TotalSentMessages + " messages";
        let res = time + " - " + messages;
        return res; 
    }

    useEffect(() => {
        const getSentTimes = async () => {
            const result = await getSentHours();
            setSentTimes(result);
        }
        getSentTimes();
    }, []);

    return (
        <>  
            <div className="labels">
                <span className="label-1">12:00am</span>
                <span className="label-2">12:00pm</span>
                <span className="label-3">11:59pm</span>
            </div>
            <div className="container-sent">
                <span className="rec-desc">Sent</span>
                
                {sentTimes && sentTimes.map((hourObj, index) => (
                    <OverlayTrigger key={index} placement="top" overlay={tooltip(getToolTipInfo(hourObj))}>
                        <div className="rectangle" style={{ backgroundColor: getColor(parseInt(hourObj.TotalSentMessages)), opacity: 0.8 }}></div>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
}