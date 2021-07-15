import React from "react";
import NewsCard from "./Card";
import useHttp from "./use-http";
const Health = () => {
  const url = `https://newsapi.org/v2/everything?q=health&apiKey=${process.env.REACT_APP_API}`;

  const { value: data } = useHttp(url);

  return (
    <div>
      {/* Entertainment Fetched */}

      <div className="newsMapCard">
        {data.length !== 0 &&
          data.map((e, index) => {
            return <NewsCard {...e} key={index} />;
          })}
      </div>
    </div>
  );
};
export default Health;
