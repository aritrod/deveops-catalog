import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './QuickStart.styles';
import classnames from "classnames";


class QuickStartPlatform extends Component {
    state = {
        showLandscapeModal: false,
        showCapabilityModal: false
    };

    openCapabilityDialog = () => {
        this.setState({ showCapabilityModal: true });
    }

    handleCardActionClick = () => {
        this.setState({ showLandscapeModal: true });
    }

    handleClose = () => {
        this.setState({ showLandscapeModal: false , showCapabilityModal: false});
    };

    render() {
        const { classes } = this.props;
        const { showLandscapeModal, showCapabilityModal } = this.state;
        return (
            <div> 
            {/* <Header /> */}
                <Dialog
                    open={showLandscapeModal}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"ALF on Azure Platform"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Below is the available landscape you can get as part of this platform
                        </DialogContentText><br></br>
                        <img
                            src="./static/images/landscapefinal.png"
                            alt="ALF Azure landscape"
                            height="300" width="500"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={showCapabilityModal}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth= "lg">
                    <DialogContent>
                        
                        <img
                            src="./static/images/capability.png"
                            alt="ALF Azure landscape"
                            height="600" width="1000"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <div>
                    <div>
                        <Typography variant="h5" className={classes.subHeading}>Tell us your requirements</Typography>
                    </div>
                    <div className={classes.capabilitySelection}>
                        <a className={classes.clickablelink} href="javascript:void(0)" onClick={this.openCapabilityDialog}>HELP CHOOSE THE CAPABILITY</a>
                    </div>
                </div>
                <div className="row" style={{ marginLeft: "1%", marginRight: "1%" }}>
                    <div className="col-md-3">
                        <Card className={classes.cardPlatform}>
                        <CardActionArea onClick={this.handleCardActionClick}>
                            <CardMedia
                                className={classnames(classes.media,classes.image1)}
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    ALF on Azure
                                </Typography>
                                <Typography component="p" className={classes.descPlatform}>
                                    A dedicated Kubernetes cluster on Azure public Cloud
                                </Typography>
                                <img
                                        src="./static/images/ratingPlatform1.png"
                                        alt="rating"
                                        height="100" width="200"
                                    />
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={classes.btnSelect} variant="contained" color="primary">
                                    <Link to='/quickStartQuestion'>Select</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3" style={{ opacity: '.4' }}>
                        <Card className={classes.cardPlatform}>
                            <CardMedia
                                className={classnames(classes.media,classes.image2)}
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Azure Disconnected
                                </Typography>
                                <Typography component="p" className={classes.descPlatform}>
                                    A Private Azure subscription with no LBG access
                                </Typography>
                                <img
                                        src="./static/images/ratingPlatform2.png"
                                        alt="rating"
                                        height="100" width="200"
                                    />
                            </CardContent>
                            <CardActions>
                                <Button disabled className={classes.btnSelect} variant="contained" color="primary">
                                    <Link to='/quickStartQuestion'>Select</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3" style={{ opacity: '.4' }}>
                        <Card className={classes.cardPlatform}>
                            <CardMedia
                                className={classnames(classes.media,classes.image3)}
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Sandbox
                                </Typography>
                                <Typography component="p" className={classes.descPlatform}>
                                    External, private cloud hosted by IBM
                                </Typography>
                                <img
                                        src="./static/images/ratingPlatform3.png"
                                        alt="rating"
                                        height="100" width="200"
                                    />
                            </CardContent>
                            <CardActions>
                                <Button disabled className={classes.btnSelect} variant="contained" color="primary">
                                    <Link to='/quickStartQuestion'>Select</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3" style={{ opacity: '.4' }}>
                        <Card className={classes.cardPlatform}>
                            <CardMedia
                                className={classnames(classes.media, classes.image4)}
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Aurora
                                </Typography>
                                <Typography component="p" className={classes.descPlatform}>
                                    Internal, Private Cloud hosted by IBM
                                </Typography>
                                <img
                                        src="./static/images/ratingPlatform4.png"
                                        alt="rating"
                                        height="100" width="200"
                                    />
                            </CardContent>
                            <CardActions>
                                <Button disabled className={classes.btnSelect} variant="contained" color="primary">
                                    <Link to='/quickStartQuestion'>Select</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                
                {/*<Footer />*/}
            </div>
        );
    }
}

export default withStyles(styles)(QuickStartPlatform);