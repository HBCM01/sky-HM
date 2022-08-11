import React from "react";
import { getDatesFromTimestamp } from "../utils/dates/getDatesFromTimestamp";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const createChartData = (data) => {
  return data.map((datum) => {
    return {
      name: datum?.hour,
      "Watch time(mins)": datum?.value,
    };
  });
};

const ViewingHoursByDate = ({ dateData }) => {
  const hourlyViews = getDatesFromTimestamp(dateData);
  const data = createChartData(hourlyViews);
  return (
    <>
      <div className=" u-vertical-align-parent">
        <h3 className="c-heading-Charlie" style={{ textAlign: "center" }}>
          {`Watch time for ${hourlyViews[0].date}`}{" "}
        </h3>
        <hr className="c-divider" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Watch time(mins)"
            fill="#B9D3ED"
            stroke="#4159EF"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default ViewingHoursByDate;
