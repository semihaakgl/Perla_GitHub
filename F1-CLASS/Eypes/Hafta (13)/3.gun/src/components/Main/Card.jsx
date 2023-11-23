import React from "react";

const Card = (data) => {
  // {title,date,desc,image}
  return (
    <div className="cards">
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="date">{data.date}</div>
      <div>
        <img src={data.image} alt="card" />
      </div>
      <div className="card-over">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
