import React from "react";

import UnitsVew from "./UnitsView";
import JSON from "./../helpers/JSON";

import Button from "@material-ui/core/Button";

const UnitsContainer = () => {
  const [expanded, setExpanded] = React.useState([]);
  const buttonText = expanded.length !== 0 ? "Collapse all" : "Expand all ";

  const toggleAll = () => {
    setExpanded([]);
  };

  return (
    <div className="units-container">
      <Button onClick={toggleAll} fullWidth>
        {buttonText}
      </Button>
      <UnitsVew expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
};

export default UnitsContainer;
