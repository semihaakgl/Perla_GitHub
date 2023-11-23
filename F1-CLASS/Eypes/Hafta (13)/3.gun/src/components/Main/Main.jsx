import React from "react";
import "./Main.scss";
import Card from "./Card";
import { data } from "../../helpers/data";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
