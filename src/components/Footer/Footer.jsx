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
        <div className="row col-md-12" style={{ margin: "1%" }}>
          <img
          className="col-md-1"
            src="./static/images/cloud_infra.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/pipeline.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/cd.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/monitor.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/cm.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/bigdata.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/microservices.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
          <img
          className="col-md-1"
            src="./static/images/container.png"
            alt="Cloud and infrastructure"
            height="80" width="80"
          />
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
