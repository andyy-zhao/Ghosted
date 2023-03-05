import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import { useEffect, useState } from 'react';
import { getSentEmojis } from '../../utils/Api';


export const SentEmojisGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getEmojisData = async () => {
            const result = await getSentEmojis();
            // Extract the first object from the array
            const emojiCount = result[0];
            // Convert object into an array of key-value pairs
            const emojiArr = Object.entries(emojiCount);

            // Sort the array in descending order based on the value
            emojiArr.sort((a, b) => b[1] - a[1]);

            // Convert the sorted array back into an object
            const sortedEmojiCount = Object.fromEntries(emojiArr);
            // Convert the object into an array of key-value pairs
            const dataArray = Object.entries(sortedEmojiCount).map(([key, value]) => ({
                name: key,
                value: value,
            })).slice(0, 12);
            setData(dataArray)
        };
        getEmojisData();
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 225, backgroundColor: '#ccc' }}/>
        <Bar dataKey="value" fill="url(#colorUv)" name="Frequency" radius={[8, 8, 0, 0]}/>
        </BarChart>
        </div>
    );
}