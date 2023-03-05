import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import './RatingGraph.css';
import { getRatings, getNames } from '../../utils/Api';
import { useEffect, useState } from 'react';

function getName(phoneNumber, names) {
    let result = ""
    for (let i = 0; i < names.length; i++) {
        if (names[i].Number === phoneNumber) {
            result = names[i].Name;
            break;
        }
    }
    return result;
}

export const RatingGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getRatingData = async () => {
            const result = await getRatings();
            const names = await getNames();
            for (let i = 0; i < result.length; i++) {
                result[i].WithPhoneNumber = getName(result[i].WithPhoneNumber.replace(/\+1/g,""), names)
            }
            setData(result)
        };
        getRatingData();
    }, []);
    return (
        <div className="graph">
        <BarChart
        width={1222}
        height={400}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="WithPhoneNumber" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 225, backgroundColor: '#ccc' }}/>
        <Legend />
        <Bar dataKey="MessagesSent" fill="#59bfff" name="Sent Messages" radius={[8, 8, 0, 0]}/>
        <Bar dataKey="MessagesReceived" fill="#989898" name="Received Messages" radius={[8, 8, 0, 0]}/>
        </BarChart>
        </div>
    );
}