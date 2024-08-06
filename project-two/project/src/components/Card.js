import React from "react";
import logo from "../assets/logo.webp";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="container col-md-12 d-flex bg-dark">
      {data.map((Element, i) => (
        <div className="row col-md-4 m-3">
          <div className="card" style={{ width: "20rem" }}>
            <div key={i}>
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{Element.prodName}</h5>
                <p className="card-text">{Element.prodDescription}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;