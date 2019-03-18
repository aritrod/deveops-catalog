import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Header.styles";
import classnames from "classnames";
import { Link } from 'react-router-dom';

function HeaderCommon(props) {
    const { classes } = props;
    return (
        <div className={classnames('row', 'col-sm-12', classes.headerCommon)}>
            <div className={classnames('col-sm-2')}>
                <img
                    className={classes.headerCommonImage}
                    src="./static/images/lloyds_banking_header_logo.png"
                    alt="Lloyds Personal Banking"
                />
            </div>
            <div className={classnames('col-sm-2', classes.headerCommonWrapper)}>
                <p className={classes.headerCommonTitle}>DevOps Commons</p>
                <div className={classes.headerDivider}></div>
            </div>
            <div class="col-sm-4"></div>
            <div className={classnames('col-sm-1', classes.headerCommonWrapper)}>
                <p className={classes.headerControls}>Features</p>
            </div>
            <div className={classnames('col-sm-1', classes.headerCommonWrapper)}>
                <p className={classes.headerControls}>Docs</p>
            </div>
            <div className={classnames('col-sm-1', classes.headerCommonWrapper)}>
                <p className={classes.headerControls}>Feedback</p>
            </div>
            <div class="col-sm-1">
                <button className={classes.headerQuickStartButton}>
                <Link to='/quickStartPlatform' className={classes.buttonLabel}>Quick Start</Link>
                </button>
            </div>
        </div>
    );
}

HeaderCommon.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderCommon);
