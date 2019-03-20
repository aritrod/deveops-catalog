
export default theme => ({
  tabs: {
    padding: theme.spacing.unit * 2
  },
  subHeading: {
    "font-size": "30px",
    "font-weight" : "500",
    "line-height": "40px",
    "text-align": "center",
    "marginTop": "30px",
    "marginBottom": "10px"
  },
  compButton: {
    "margin-left": "10px",
    "width": "10px",
    "margin-left": "15px",
    "height": "27px",
    "padding": "0px",
    "&:focus":{
      "outline": "none"
    }
  },
  card: {
    "width": "460px",
    float: "right",
    "text-align": "center",
    background: "radial-gradient(circle, #CAEAFF 0%, #F4FDFF 100%)",
    "margin-right": "10px",
    "padding-bottom": "20px",
    border: "1px solid #BFBFBF",
    "box-shadow": "none"
  },
  cardfinal: {
    background: "radial-gradient(circle, #CAEAFF 0%, #F4FDFF 100%)",
    "width": "460px",
    "padding-bottom": "20px",
    "text-align": "center",
    border: "1px solid #BFBFBF",
    "box-shadow": "none"
  },
  "media":{
     height: "220px",
    "background-image": "url('./static/images/questions.png')",
    "background-size": "100%",
    "opacity": "0.9",
    "background-position": "0px 48px",
    "width": "87%",
    "margin-left": "7%"
  },
  "mediaFinal":{
    height: "220px",
    "background-image": "url('./static/images/groups.png')",
    "background-size": "101%",
    "opacity": "0.9",
    "width": "87%",
    "margin-left": "7%",
    "background-position": "0px 30px"
  },
  cardContent: {
    margin: "0 auto",
    width:"285px"
  },
  cardTitle: {
    "font-size": "21px",
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
  componentTiles:{
    "margin-top":"15px"
  },
  topContainer: {
    "padding": "20px 250px"
  },
  tooltipLink: {
    "font-weight": "500",
    width:  "140px",
    "text-decoration": "underline",
    color: "#00864F",
    "font-size": "16px",
    "line-height": "20px",
    "float": "left",
    "&:focus":{
      "outline": "none"
    }
  },
  tooltipContent: {
    "background-color": "#FFFFFF",
    "width": "245px",
    "border": "1px solid #BFBFBF;",
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
    "height": "135px",
    "position": "absolute",
    "left": "150px",
    "top": "-32px",
    "z-index": "9",
    "&:before" : {
      content: "''",
      display: "block",
      width: "0",
      height: "0",
      position: "absolute",
      "border-top": "8px solid transparent",
      "border-bottom": "8px solid transparent",
      "border-right": "8px solid #BFBFBF",
      left: "-8px",
      top: "50px"
  }
  },
  "tooltipClose": {
    "font-weight": "500",
    "text-decoration": "underline",
    color: "#00864F",
    "font-size": "16px",
    "line-height": "20px",
    "float": "right",
    "width":"100%",
    "text-align": "right",
    "padding": "8px 8px 0px 0px",
    "display": "block"
  },
  tooltipRedirect:{
    "color": "#00864F",
    "font-weight": "500",
    "text-decoration": "underline"
  },
  tooltipparagraph: {
    "font-size": "13px",
    "padding":"20px"
  },
  tooptipWrapper: {
    "position":"relative"
  }
});
