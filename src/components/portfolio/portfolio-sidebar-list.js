import React from "react";

const PortfolioSideBarList = props => {
  const portfoliolist = props.data.map(portfolioItem => {
    return (
      <div>
        <div>
          <img src={portfolioItem.thumb_image_url} />
        </div>

        <h1>{portfolioItem.name}</h1>
        <h1>{portfolioItem.id}</h1>
      </div>
    );
  });
  return <div>{portfoliolist}</div>;
};

export default PortfolioSideBarList;
