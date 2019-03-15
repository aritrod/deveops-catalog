import React from "react";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";

import Bucket from "../Bucket";
import { withStyles } from "@material-ui/core";
import styles from "./OptionsSelector.styles";

function OptionsSelector({
  className,
  classes,
  items,
  title,
  type,
  droppableBucket,
  stages,
  onDeleteClick
}) {
  return (
    <div className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.heading}>
        {title}
      </Typography>
      <div className={classes.optionWrapper}>
      {stages && stages.length ? (
        stages.map(bucket => {
          return items[bucket] ? (
            <Bucket
              key={bucket}
              bucketName={bucket}
              items={items[bucket]}
              type={type}
              droppableBucket={droppableBucket}
            />
          ) : null;
        })
      ) : (
        <Bucket
          bucketName="Default"
          items={items["Default"]}
          type={type}
          droppableBucket={droppableBucket}
          onDeleteClick={onDeleteClick}
        />
      )}
      </div>
    </div>
  );
}

export default withStyles(styles)(OptionsSelector);
