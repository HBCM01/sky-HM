import axios from "axios";

const getTimeData = async () => {
  return await axios.get(
    "https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data"
  );
};

export default getTimeData;
