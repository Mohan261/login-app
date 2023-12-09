import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="user-card">
      <div className="id">{data.id}</div>
      <p>EMP ID : {data.id}</p>
      <p>Name : {data.name}</p>
      <p>
        DOB : <span className="dob">{data.dob}</span>
      </p>
      <p>
        Role : <span className="role">{data.role}</span>
      </p>
    </div>
  );
};

export default Card;
