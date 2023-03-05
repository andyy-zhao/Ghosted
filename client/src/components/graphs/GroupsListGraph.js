import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import { useEffect, useState } from 'react';
import { getGroupChats, getNames } from '../../utils/Api';


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


export const GroupsListGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getGroupsListData = async () => {
            const result = await getGroupChats();
            const names = await getNames();
            for (let i = 0; i < result.length; i++) {
                result[i].participants = getName(result[i].participants.replace(/\+1/g,""), names)
            }
            setData(result)
        };
        getGroupsListData();
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
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="40%" stopColor="#4299e1" stopOpacity={1} />
                <stop offset="80%" stopColor="#9F7AEA" stopOpacity={1} />
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="participants"/>
        <YAxis />
        <Tooltip wrapperStyle={{ width: 225, backgroundColor: '#ccc' }}/>
        <Bar dataKey="message_count" fill="url(#colorUv)" name="Frequency" radius={[8, 8, 0, 0]}/>
        </BarChart>
        </div>
    );
}