import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Dialog.styles";

import {
  withStyles,
  DialogTitle,
  Dialog,
  TextField,
  Button
} from "@material-ui/core";

class DialogBox extends React.Component {
  state = {
    properties : [""]
  };
  handleClose = () => {
    this.setState({ 
      properties: [""]
    });
    this.props.onClose();
  };
  handleDone = () => {
    this.props.onDone(this.state.properties, this.props.sectiontype);
  };
  handleChange = index => event => {
    let existingProps = this.state.properties.slice();
    existingProps[index] = event.target.value;
    this.setState({ 
      properties: existingProps
    });
  };
  addProp = () => {
    let existingProps = this.state.properties.slice();
    existingProps.push("");
    this.setState({ 
      properties: existingProps
    });
  }
  render() {
    const { classes, onClose, title, ...other} = this.props;

    return (
      <Dialog disableBackdropClick={true} disableEscapeKeyDown ={true} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <div className= {classes.dialogWraper}>
        {this.state.properties.map((property, index)=>{
          return (<TextField
                  key = {index}
                  label={`Enter PropertyName`}
                  className={classes.textField}
                  value={property}
                  onChange={this.handleChange(index)}
                  margin="normal"
                  />)  
        })}
        <div className={classes.buttonArea}>
        <Button variant="contained" 
                color="primary" 
                className={classes.btnAdd}
                onClick={() => {
                    this.addProp()
                }}>
                Add More Prop
        </Button>
        <Button variant="contained" 
                color="primary" 
                className={classes.btnAdd}
                onClick={() => {
                    this.handleDone()
                }}>
                Done
        </Button>
        <Button variant="contained" 
                color="primary" 
                className={classes.btnAdd}
                onClick={() => {
                    this.handleClose()
                }}>
                close
        </Button>
        </div>
        </div>
      </Dialog>
    );
  }
}

Dialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(styles)(DialogBox);