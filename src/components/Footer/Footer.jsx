import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./Footer.styles";
import { Button } from "@material-ui/core";

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.footerPos}>
      <p className={classes.footerText}>View what's available on</p>
      <button className={classes.footerButton}>
      Lloyds Tech Radar
      </button>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
