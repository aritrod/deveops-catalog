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

const styles = {
    card: {
        minWidth: 50,
        maxWidth: 300,
        marginLeft: '2%',
        marginTop: '2%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
    },
};

class QuickStartPlatform extends Component {
    state = {
        showLandscapeModal: false
    };

    handleCardActionClick = () => {
        this.setState({ showLandscapeModal: true });
    }

    handleClose = () => {
        this.setState({ showLandscapeModal: false });
    };

    render() {
        const { classes } = this.props;
        const { showLandscapeModal } = this.state;
        return (
            <div> <Header />
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
                            src="./static/images/landscape.png"
                            alt="ALF Azure landscape"
                            height="200" width="400"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <div style={{ textAlign: "center", margin: "1%" }}><h5>Available Platforms</h5></div>
                <div className="row">
                    <div className="col-md-3">
                        <Card className={classes.card}>
                        <CardActionArea onClick={this.handleCardActionClick}>
                            <CardMedia
                                className={classes.media}
                                image="./static/images/azureNew.jpeg"
                                title="Azure"
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    ALF on Azure
                                            </Typography>
                                <Typography component="p">
                                    <br />
                                    Develop and deploy where you want, with the only consistent hybrid cloud on the market.
                                    Extend Azure on-premises with Azure Stack.
                                            </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small"><Link to='/quickStartQuestion'>Select</Link></Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="./static/images/kubernetesNew.jpeg"
                                title="Kubernetes"
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    kubernetes Sandbox
                                            </Typography>
                                <Typography component="p" inline={true} style={{ maxHeight: "30" }}>
                                    <br />
                                    It groups containers that make up an application into logical units for easy management and discovery.
                                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link to='/quickStartQuestion'>Select</Link></Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.card}>
                        
                            <CardMedia
                                className={classes.media}
                                image="./static/images/k8_azure.png"
                                title="kubernetes_azure"
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    kubernetes Azure Stack
                                            </Typography>
                            </CardContent>
                            
                            <CardActions>
                                <Button size="small"><Link to='/quickStartQuestion'>Select</Link></Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.card}>
                        <CardMedia
                                className={classes.media}
                                image="./static/images/aurora.png"
                                title="Kubernetes"
                            />
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    kubernetes Aurora
                                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link to='/quickStartQuestion'>Select</Link></Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(QuickStartPlatform);