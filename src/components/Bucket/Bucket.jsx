import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { List, Paper, Typography, withStyles } from "@material-ui/core";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./Bucket.styles";
import DraggableItem from "../DraggableItem";

function Bucket({
  classes,
  bucketName,
  items,
  type,
  droppableBucket,
  onDeleteClick
}) {
  const isDefaultBucket = bucketName === "Default";
  return (
    <Paper className={classes.root} elevation={1}>
      {!isDefaultBucket ? (
        <Typography variant="h6" className={classes.subHeading}>{bucketName}</Typography>
      ) : null}
      <Droppable
        droppableId={`${type}-${bucketName}-Droppable`}
        isDropDisabled={!(isDefaultBucket || bucketName === droppableBucket)}
      >
        {(provided, snapshot) => (
          <div
            className={classnames(
              classes.list,
              snapshot.isDraggingOver && classes.listDragged
            )}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <List dense={true}>
              {items && items.length ? (
                items.map((item, index) => (
                  <DraggableItem
                    key={item.Name}
                    index={index}
                    item={item}
                    type={type}
                    bucketName={bucketName}
                    onDeleteClick={() =>
                      onDeleteClick && onDeleteClick(bucketName, index)
                    }
                    showDeleteButton={!!onDeleteClick}
                  />
                ))
              ) : (
                <Typography align="center">
                  {isDefaultBucket ? "Drag few items here" : ""}
                </Typography>
              )}
              {provided.placeholder}
            </List>
          </div>
        )}
      </Droppable>
    </Paper>
  );
}

Bucket.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bucket);
