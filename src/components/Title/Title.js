import React from "react";
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Title = ({ value, style, icon }) => {
  return (
    <div className="row" style={style}>
      <div className="col-md-12">
        <h3 className="h3">
          {icon && <MDBIcon icon={icon} style={{ marginRight: 10 }} />}
          {value} :
        </h3>
      </div>
    </div>
  );
};

export default Title;
