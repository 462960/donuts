import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function UnitsView({ expanded, setExpanded, JSON }) {
  const classes = useStyles();

  const handleChange = (e, nodes) => {
    setExpanded(nodes);
  };

  const mapTreeItem = arr => {
    return arr.map(x => (
      <TreeItem key={x.id} nodeId={x.id} label={x.type}>
        {x.butters ? (
          <TreeItem
            key={x.butters.id}
            nodeId={x.butters.id}
            label={x.butters.type}
          >
            {x.butters.butter.map(y => (
              <TreeItem key={y.id} nodeId={y.id} label={y.type}></TreeItem>
            ))}
          </TreeItem>
        ) : (
          <div />
        )}
        {x.toppings ? (
          <TreeItem
            key={x.toppings.id}
            nodeId={x.toppings.id}
            label={x.toppings.type}
          >
            {x.toppings.topping.map(y => (
              <TreeItem key={y.id} nodeId={y.id} label={y.type}></TreeItem>
            ))}
          </TreeItem>
        ) : (
          <div />
        )}
      </TreeItem>
    ));
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
    >
      {mapTreeItem(JSON)}
    </TreeView>
  );
}
