import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const totalViewingData = (movieData) => {
  const { totalViews, prevTotalViews } = movieData;
  return [
    {
      name: "Sky-go",
      "total views": totalViews["sky-go"],
      "previous total views": prevTotalViews["sky-go"],
    },
    {
      name: "Now-tv",
      "total views": totalViews["now-tv"],
      "previous total views": prevTotalViews["now-tv"],
    },
    {
      name: "Peacock",
      "total views": totalViews.peacock,
      "previous total views": prevTotalViews.peacock,
    },
  ];
};

const FilmViewBarChart = ({ movie }) => {
  const data = totalViewingData(movie);
  return (
    <>
      <div className=" u-vertical-align-parent">
        <h3 className="c-heading-Charlie" style={{ textAlign: "center" }}>
          Total views Vs Previous total views
        </h3>
        <hr className="c-divider" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total views" fill="#523AF1" />
          <Bar dataKey="previous total views" fill="#FF6A06" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default FilmViewBarChart;
