import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl
} from "@material-ui/core";

import styles from "./Header.styles";

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            className={classes.logo}
            src="./static/images/lloyds_personal_banking_logo.png"
            alt="Lloyds Personal Banking"
          />
          <p className={classes.headerTitle}>DevOps Catalog</p>
          {props.mode ==="practitioner" && <FormControl className={classes.formControl}>
          <Select
            value={props.selectedHelpOption}
            onChange={props.onClickHandler.bind(this)}
            name="help"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              Select
            </MenuItem>
            <MenuItem value={"techRadar"}>
              Tech Radar
            </MenuItem>
            <MenuItem value={"jiraIssue"}>Raise an issue</MenuItem>
          </Select>
          <FormHelperText className={classes.helperText}>Help & Support</FormHelperText>
        </FormControl>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
