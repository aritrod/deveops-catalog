import React from "react";
import {
  ListItem,
  RootRef,
  ListItemText,
  withStyles,
  IconButton,
  Collapse
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import HelpIcon from "@material-ui/icons/Help";
import classnames from "classnames";

import styles from "./DraggableItem.styles";

class DraggableItem extends React.Component {
  state = {
    open: false
  };
  handleToggling = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
  let {classes,
    index,
    item,
    type,
    bucketName,
    onDeleteClick,
    showDeleteButton} = this.props;
  return (
    <Draggable draggableId={`${type}-${bucketName}-${item.Name}`} index={index}>
      {(provided, snapshot) => (
        <RootRef rootRef={provided.innerRef}>
        <div className={classnames(
              classes.listWrapper,
              showDeleteButton && classes.selectedItem
            )}>
          <ListItem
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            classes={{
              root: snapshot.isDragging ? classes.listItemDragged : undefined
            }}
          >
            <ListItemText
              primary={item.Name}
              classes={{
                primary: snapshot.isDragging
                  ? classes.listItemTextDragged
                  : classes.noDragging
              }}
            />

            <IconButton 
                color="primary"
                className={classes.iconButton}
                onClick={this.handleToggling}>
                  {this.state.open ? <RemoveIcon /> : <AddIcon /> }
            </IconButton>
            <IconButton 
              color="primary"
              className={classes.iconButton}
              href={item.GithubRepo}
              title="Click to read the help document of this component"
              target="_blank"
              rel="noopener noreferrer">
                <HelpIcon/>
            </IconButton>

            {showDeleteButton ? (
              <div>
              <IconButton
                color="primary"
                className={classes.iconButton}
                onClick={onDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
              </div>
            ) : null}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {<ul className={classes.imageList}>
          {item.Description ? <li>Description - {item.Description}<br/><br/></li>: null}
          {item.imageList ? <li>Container(s)used -</li> : null}
          {(item.imageList) ? (item.imageList.map((data, index) => (
                  <li className={classes.solType} key={index} >{data}</li>
                ))) : null}
              </ul>}
        </Collapse>
        </div>
        </RootRef>
      )}
    </Draggable>
  );
}}

export default withStyles(styles)(DraggableItem);
