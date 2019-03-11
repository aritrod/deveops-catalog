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
        "min-height": "200px"
    },
    'textField': {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
        marginTop: "0px"
    }
});
