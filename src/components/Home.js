import React from "react";
import NewsCard from "./Card";
import useHttp from "./use-http";
import "./Card.css";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API}`;
console.log(url);
const Home = () => {
  const { value: data } = useHttp(url);

  return (
    <React.Fragment>
      {/* News Fetched */}
      <div className="newsMapCard">
        {data.length !== 0 &&
          data.map((n, index) => {
            return <NewsCard {...n} key={index} />;
          })}
      </div>
    </React.Fragment>
  );
};
export default Home;
