import './RectangleRow.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getReceivedHours } from '../../utils/Api';
import { useEffect, useState } from 'react';

export const ReceivedRow = () => {
    const [receivedTimes, setReceivedTimes] = useState(null);

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
        let messages = info.TotalReceivedMessages + " messages";
        let res = time + " - " + messages;
        return res; 
    }

    useEffect(() => {
        const getReceivedTimes = async () => {
            const result = await getReceivedHours();
            setReceivedTimes(result);
        }
        getReceivedTimes();
    }, []);

    return (
        <>
            <div className="container-received">
                <span className="rec-desc-received">Received</span>
                {receivedTimes && receivedTimes.map((hourObj, index) => (
                    <OverlayTrigger key={index} placement="top" overlay={tooltip(getToolTipInfo(hourObj))}>
                        <div className="rectangle" style={{ backgroundColor: getColor(parseInt(hourObj.TotalReceivedMessages)), opacity: 0.8 }}></div>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
}