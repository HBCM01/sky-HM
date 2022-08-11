import { useState, useEffect } from "react";
import { useContext } from "react";

const apiStatus = {
  loading: "loading",
  success: "success",
  errored: "errored",
};

const useApiCall = (apiService) => {
  const [status, setStatus] = useState(apiStatus.loading);
  const [data, setData] = useState(null);

  useEffect(() => {
    apiService()
      .then((data) => {
        setData(data);
        setStatus(status.success);
      })
      .catch(() => {
        setStatus(status.errored);
      });
  }, []);

  return [status === apiStatus.loading, data, status === apiStatus.errored];
};

export default useApiCall;
