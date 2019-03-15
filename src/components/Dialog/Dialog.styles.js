export default theme => ({
    buttonArea:{
        textAlign: "center",
        "margin-top": "20px",
        "& button":{
            "margin-left":"20px"
        }
    },
    dialogWraper:{
        "min-width": "400px",
        "min-height": "200px",
        "padding": "25px"
    },
    'textField': {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
        marginTop: "0px"
    },
    'errorStatus': {
        "color": "red",
        "font-size": "12px",
        "padding-top": "25px"
    },
    'successStatus': {
        "color": "green",
        "font-size": "12px",
        "padding-top": "25px"
    },
    'iframeRender': {
        width: "100%",
        height: "100%",
        "min-height": "800px",
        "& > div":{
            width: "100%",
            height: "100%",
            "min-height": "800px"
        }
    },
    'dialogContent': {
        "min-height": "800px"
    },
    'iframObject': {
        "min-height":"800px"
    }
});
