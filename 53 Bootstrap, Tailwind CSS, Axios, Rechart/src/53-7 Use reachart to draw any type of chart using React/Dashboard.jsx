import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        {
          id: 1,
          name: 'John',
          phy: 75,
          chem: 85,
          math: 90
        },
        {
          id: 2,
          name: 'Alice',
          phy: 80,
          chem: 70,
          math: 95
        },
        {
          id: 3,
          name: 'Bob',
          phy: 60,
          chem: 65,
          math: 75
        },
        {
          id: 4,
          name: 'Mary',
          phy: 90,
          chem: 85,
          math: 80
        },
        {
          id: 5,
          name: 'Peter',
          phy: 70,
          chem: 75,
          math: 65
        },
        {
          id: 6,
          name: 'Sarah',
          phy: 85,
          chem: 80,
          math: 90
        },
        {
          id: 7,
          name: 'David',
          phy: 95,
          chem: 75,
          math: 80
        },
        {
          id: 8,
          name: 'Jessica',
          phy: 80,
          chem: 90,
          math: 85
        },
        {
          id: 9,
          name: 'Kevin',
          phy: 70,
          chem: 80,
          math: 75
        },
        {
          id: 10,
          name: 'Julia',
          phy: 90,
          chem: 95,
          math: 85
        },
        {
          id: 11,
          name: 'Mark',
          phy: 85,
          chem: 75,
          math: 90
        },
        {
          id: 12,
          name: 'Maggie',
          phy: 70,
          chem: 80,
          math: 75
        }
      ];
      
    return (
        <div>
            <LineChart 
                width={1000}
                height={450}
                data={students}
                >
                    <Line dataKey="phy" stroke="#8884d8"></Line>
                    <Line dataKey="math"></Line>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;