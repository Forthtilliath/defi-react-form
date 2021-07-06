import React from "react";

const Title = ({ value, style }) => {
  return (
    <div className="row" style={style}>
      <div className="col-md-12">
        <h3 className="h3">{value} :</h3>
      </div>
    </div>
  );
};

export default Title;
