import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import { useEffect, useState } from 'react';
import { getTopWord } from '../../utils/Api';

export const WordsGraph = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getWordData = async () => {
            const result = await getTopWord();
            let filteredResult = result.filter(item => item.word.length > 1);
            filteredResult = filteredResult.filter(item => item.word !== "loved an image");
            filteredResult = filteredResult.slice(0, 12);
            console.log(result[0].word.length);
            setData(filteredResult)
        };
        getWordData();
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
        <XAxis dataKey="word" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 225, backgroundColor: '#ccc' }}/>
        <Bar dataKey="frequency" fill="url(#colorUv)" name="Frequency" radius={[8, 8, 0, 0]}/>
        </BarChart>
        </div>
    );
}