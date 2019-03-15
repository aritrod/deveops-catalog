import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";
import { withStyles } from "@material-ui/core";
import styles from "./SelectedOptions.styles";

function SelectedOptions({
  classes,
  selectedItems,
  droppableBucket,
  stages,
  onDeleteClick
}) {
  return (
    <div className={classes.selectedOptionWrapper}>
    <OptionsSelector
      className={classes}
      items={selectedItems}
      title="Selected Options"
      type="selected"
      droppableBucket={droppableBucket}
      onDeleteClick={onDeleteClick}
    />
    </div>
  );
}

export default withStyles(styles)(SelectedOptions);
