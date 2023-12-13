import React from "react";

interface Props {
  image: string;
  title: string;
  text: string;
}
const OtherCard = ({ image, title, text }: Props) => {
  return (
    <div>
      <div
        className="card shadow"
        style={{ width: "20rem", margin: "10px", boxShadow: "20px" }}
      >
        <img
          src={image}
          className="card-img-top"
          style={{ height: "20rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtherCard;
