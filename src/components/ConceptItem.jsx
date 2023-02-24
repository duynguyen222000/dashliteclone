import React from "react";

export const ConceptItem = ({ item, index }) => {
  return (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="conceptual-item">
        <a href="" className="conceptual-item-img">
          <img src={item.imgSrc} alt="" />
        </a>
        <a className="conceptual-item-desc">
          <p className="conceptual-item-desc-subtitle">{item.subtitle}</p>
          <h4 className="conceptual-item-desc-title">
            {item.title}
            {item.tag && (
              <span className={`${item.highlight && "highlight"}`}>
                {item.tag}
              </span>
            )}
          </h4>
        </a>
        <p className="conceptual-item-screen">{item.screen}</p>
      </div>
    </div>
  );
};
