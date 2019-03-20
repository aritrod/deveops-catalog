export default theme => ({
    subHeading: {
        "font-size": "32px",
        "font-weight": "400",
        "line-height": "40px",
        "marginTop": "40px",
        "marginBottom": "20px",
        "marginLeft": "2%"
    },
    cardPlatform: {
        minWidth: '320px',
        maxWidth: '320px',
        marginTop: '2%',
        "min-height": '340px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        minHeight: '20px',
        maxheight: '20px',
        fontWeight: 'bold'
    },
    descPlatform: {
        fontSize: 14,
        minHeight: '65px',
        maxheight: '30px',
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
        "background-size": "50%",
        backgroundColor: "#CAEAFF"
    },
    image1: {
        "background-image": "url('./static/images/azurefinal.png')"
    },
    image2: {
        "background-image": "url('./static/images/azurefinal.png')"
    },
    image3: {
        "background-image": "url('./static/images/ibmcloud.png')"
    },
    image4: {
        "background-image": "url('./static/images/ibmcloud.png')"
    },
    btnSelect: {
        "background-color": "#00864F",
        "height": "40px",
        margin: "0 auto",
        "border-radius": "0%",
        "& a": {
            color: "#ffffff"
        }
    },
    ratingDiv: {
        width: '65%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    card: {
        minWidth: 50,
        maxWidth: 300,
        marginLeft: '2%',
        marginTop: '2%',
        textAlign: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    mediaQuestion: {
        height: 40,
    },
    clickablelink: {
        height: '40px',
        width: '160px',
        color: "#00864F",
        border: '1px solid #00864F',
        padding: '10px',
        "font-weight": "bold"
    },
    capabilitySelection: {
        margin: '2%',
        textAlign: 'right'
    }
});