
import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const EventGenre = ({ events }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => { 
    setData(() => getData()); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length
      return { name: genre, value }
    });
    data = data.filter(data => data.value)
    return data;
  };

  const colors = ['#E2D36B', '#96D7C6', '#5AA7A7', '#99A348', '#BAC94A', '#F7EC75']


  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          innerRadius={8}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name} />
        ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

};

export default EventGenre;

