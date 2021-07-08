import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = ({ value, style, icon }) => {
  return (
    <div className="row" style={style}>
      <div className="col-md-12">
        <h3 className="h3">
          <FontAwesomeIcon icon={["fas", "home"]} />
          {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />}
          {value} :
        </h3>
      </div>
    </div>
  );
};

export default Title;
