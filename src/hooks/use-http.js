import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendResponse = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    sendResponse
  };
};

export default useHttp;
