import { useState, useEffect } from "react";

const useHttp = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.articles);
    };
    fetchNews();
  }, [url]);
  return {
    value: data,
  };
};
export default useHttp;
