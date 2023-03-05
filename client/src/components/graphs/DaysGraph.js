import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
import { getDaysMessages } from '../../utils/Api';
import { useEffect, useState } from 'react';
  
export const DaysGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getDaysData = async () => {
            const result = await getDaysMessages();
            // for (let i = 0; i < result.length; i++) {
            //     result[i].DateRange = result[i].DateRange.substring(0, result[i].DateRange.indexOf(' '));
            // }
            setData(result)
        };
        getDaysData();
    }, []);
    return (
        <div className="graph">
            <LineChart width={1200} height={400} data={data} margin={{ top: 5, right: 30, bottom: 40, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="DateRange" 
                    padding={{ left: 30, right: 30 }} 
                    angle={-30} // set the angle to -45 degrees
                    textAnchor="end" // align the text to the end of the tick
                    // show all x-axis labels
                    interval={0} 
                    tick={{fontSize: 12}}
                    tickFormatter={(tick) => tick.substring(0, tick.indexOf(' '))} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top"/>
                <Line type="monotone" dataKey="SentMessages" stroke="#8884d8" activeDot={{ r: 8 }} name="Sent Messages" />
                <Line type="monotone" dataKey="ReceivedMessages" stroke="#82ca9d" name="Received Messages" />
            </LineChart>
        </div>
    );
}