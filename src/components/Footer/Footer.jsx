import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./Footer.styles";

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.footerPos}>
      <div style={{ borderTop: "1px solid lightgrey", margin: "1%" }}>
      
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
