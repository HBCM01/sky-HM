import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalViewsByService = () => {
  return (
    <>
      <div>
        <h3 className="c-heading-Charlie" style={{ textAlign: "center" }}>
          Total views by service
        </h3>
        <hr className="c-divider" />
      </div>
      <ResponsiveContainer>
        <PieChart width={1} height={1}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].name} ({value})
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default TotalViewsByService;
