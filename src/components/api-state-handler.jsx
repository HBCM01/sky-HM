import Spinner from "../atoms/spinner";

const ApiStateHandler = ({ loading, error, children }) => {
  if (error) {
    return "oops it appears that something has gone wrong. Please try again later";
  }
  return loading ? <Spinner text={"Loading"} /> : children;
};

export default ApiStateHandler;
