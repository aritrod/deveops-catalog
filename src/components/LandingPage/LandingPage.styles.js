
export default theme => ({
  tabs: {
    padding: theme.spacing.unit * 2
  },
  subHeading: {
    "font-size": "32px",
    "font-weight" : "420",
    "line-height": "40px",
    "text-align": "center",
    "marginTop": "30px",
    "marginBottom": "30px"
  },
  compButton: {
    "margin-left": "10px",
    "&:focus":{
      "outline": "none"
    }
  },
  card: {
    minWidth: "500px",
    maxWidth: "550px",
    // float: "right",
    "text-align": "center",
    "height": "610px",
    background: "radial-gradient(circle, #CAEAFF 0%, #F4FDFF 100%)"
  },
  cardfinal: {
    background: "radial-gradient(circle, #CAEAFF 0%, #F4FDFF 100%)",
    "height": "610px",
    minWidth: "500px",
    maxWidth: "550px",
    // float: "left",
    "text-align": "center"
  },
  "media":{
    height: "400px",
    "background-image": "url('./static/images/quickstart.png')",
    "background-size": "100%",
    "opacity": "0.1"
  },
  "mediaFinal":{
    height: "400px",
    "background-image": "url('./static/images/practioner.png')",
    "background-size": "100%",
    "opacity": "0.1"
  },
  cardContent: {
    margin: "0 auto",
    width:"285px"
  },
  cardTitle: {
    "font-size": "22px",
    "font-weight": "400",
    "line-height": "28px",
    "text-align": "center",
    color:"#000000"
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
  titleLiterature:{
    textAlign: "center",
    margin: "1%"
  },
  btnAction: {
    "background-color": "#00864F",
    "height": "45px",
    "border-radius": "0%",
     margin: "0 auto",
    "& a": {
      color: "#ffffff"
    },
    "&:focus":{
      "outline": "none"
    }
  },
  componentArea: {
    background: "#fff",
    "padding": "30px",
    "text-align": "center"
  },
  compTitle: {
    margin: "25px 0px",
    "font-size": "36px",
    "font-weight": "500",
    "line-height": "28px",
    "text-align": "center",
    color:"#000000"
  },
  compImage:{
    height: "79px",
    width: "79px",
    marginBottom: "10px"
  },
  compLink:{
    float: "left",
    width: "100%",
    "font-weight": "500",
    "text-decoration": "underline",
    color: "#00864F",
    "font-size": "18px",
    "line-height": "20px",
    "&:focus":{
      "outline": "none"
    }
  },
  componentTiles:{
    "margin-top":"15px"
  },
  topContainer: {
    "padding": "20px 200px"
  },
  tooltipContent: {
    border:"solid 1px red",
    width: "200px",
    height: "200px"
  }
});
