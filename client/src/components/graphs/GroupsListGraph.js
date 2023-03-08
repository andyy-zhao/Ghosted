import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell
  } from "recharts";
import { useEffect, useState } from 'react';
import { getGroupChats, getNames } from '../../utils/Api';


function getName(phoneNumber, names) {
    let phoneNumbers = phoneNumber.split(',');
    for (let j = 0; j < phoneNumbers.length; j++) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].Number.includes(phoneNumbers[j])) {
                phoneNumbers[j] = names[i].Name;
                break;
            }
        }
    }
    phoneNumbers = phoneNumbers.join(',');
    
    return phoneNumbers;
}

const pastelColors = [
    "#ff9d9a",
    "#ffe0a3",
    "#ffffb3",
    "#aaffc7",
    "#bae1ff",
    "#fcbaff",
    "#d1baff",
    "#ffaaaa",
    "#ffd8aa",
    "#ffffaa"
];

export const GroupsListGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getGroupsListData = async () => {
            const result = await getGroupChats();
            const names = await getNames();
            for (let i = 0; i < result.length; i++) {
                result[i].participants = getName(result[i].participants.replace(/\+1/g,""), names)
                // console.log(result[i].participants); 
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="participants" tickFormatter={(value, index) => `👨‍👩‍👧‍👦 ${index + 1}`} />
        <YAxis />
        <Tooltip wrapStyle={{ maxWidth: '200px', whiteSpace: 'pre-wrap' }} />
        <Bar dataKey="message_count" name="Frequency" radius={[8, 8, 0, 0]}> 
            {data && data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pastelColors[index % pastelColors.length]} />
          ))}
        </Bar>
        </BarChart>
        </div>
    );
}