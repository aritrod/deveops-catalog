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
        minWidth: '300px',
        maxWidth: '300px',
        marginTop: '2%',
        "min-height": '320px'
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
        minHeight: '45px',
        maxheight: '45px',
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
    exportJsonBtn: {
        "background-color": "#00864F",
        "height": "40px",
        margin: "0 auto",
        "border-radius": "0%",
        "& a": {
            color: "#ffffff"
        },
        marginLeft: '1%',
        marginBottom: '14%'
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
        textAlign: 'right',
        paddingRight: '1%'
    },
    costingDiv: {
        marginLeft: '1%',
        marginRight: '1%'
    },
    root: {
        color: '#00864F',
        '&$checked': {
          color: '#00864F',
        },
        textAlign: 'center'
      },
      checked: {},
      radioSelection:{
          paddingLeft: '15%'
      },
      summaryWrapper:{
        height: '600px',
        margin: '1%'
      },
      costingSummaryWrapper: {
          height: '71%',
          border: '1px solid #BFBFBF',
          "background-color": "#FFFF",
          textAlign: 'center',
          paddingTop: '4%'
      },
      conclusionHeading: {
        "font-size": "32px",
        "font-weight": "500",
        "line-height": "40px",
        paddingLeft: '10px'
    },
    conclusionWrapper: {
        height: '1000px',
        margin: '2%'
    },
    conclusionHeadWrapper: {
        borderBottom: '1px solid #BFBFBF',
        paddingBottom: '1%'
    },
    conclusionTimeline: {
        "font-size": "18px",
        "font-weight": "600",
        "line-height": "18px",
        marginTop: '3%'
    },
    conclusionMargin: {
        marginTop: '3%'
    },
    error: {
        color: "red"
    },
    compLink:{
        "font-weight": "500",
        "text-decoration": "underline",
        color: "#00864F",
        "font-size": "16px",
        "line-height": "20px",
        "float": "left",
        "width":"100%",
        "&:focus":{
          "outline": "none"
        }
      },
      jsonExport:{
        "text-align": "left",
        marginTop: '2%'
      }
});