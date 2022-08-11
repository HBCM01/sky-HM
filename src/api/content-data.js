import axios from "axios";

const getContentData = async () => {
  return await axios.get(
    "https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data"
  );
};

export default getContentData;
