import React from "react";

export const DashboardItem = ({ item, index }) => {
  return (
    <div key={index + Math.random()} className="col-md-6 col-lg-4">
      <a href="" className="admindashboard-item">
        <div className={`item-img ${item.bgcolor || " bg-blue"}`}>
          <img src={item.imgSrc} alt="" />
        </div>
        <div className="item-title">
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  );
};
