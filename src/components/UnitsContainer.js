import React, { useState, useEffect } from "react";

import UnitsVew from "./UnitsView";
import JSON from "./../helpers/JSON";

import Button from "@material-ui/core/Button";

const UnitsContainer = () => {
  const [expanded, setExpanded] = useState([]);
  const [itemsTree, setItemsTree] = useState([]);
  const buttonText = expanded.length !== 0 ? "Collapse all" : "Expand all ";

  const toggleAll = () => {
    expanded.length !== 0 ? setExpanded([]) : setExpanded(itemsTree);
  };

  useEffect(() => {
    let arr = [];
    JSON.map(x => {
      arr.push(x.id);
      x.butters && arr.push(x.butters.id);
      x.toppings && arr.push(x.toppings.id);
    });
    setItemsTree(arr);
  }, []);

  return (
    <div className="units-container">
      <Button onClick={toggleAll} fullWidth>
        {buttonText}
      </Button>
      <UnitsVew expanded={expanded} setExpanded={setExpanded} JSON={JSON} />
    </div>
  );
};

export default UnitsContainer;
