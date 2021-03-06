export default theme => ({
  accordianTitle: {
    "box-shadow": "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  contentArea: {
    "box-shadow": "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    "padding": "20px",
    "border-radius": "5px"
  },
  heading: {
    fontSize: "24px",
    marginTop: theme.spacing.unit * 2,
    "font-weight": "bold",
    "height": "40px",
    "padding-top": "10px",
    "border-radius": "5px 5px 0px 0px",
    "text-align": "center",
    "color": "#fff",
    "background": "#2ac06d"
  },
  subHeading: {
    fontSize: "24px",
    marginBottom: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 1,
    "color": "#006a4d",
    "font-weight": "400"  
  },
  code: {
    "flex-basis": "100%",
    "overflow-x": "auto",
    "padding-bottom": "10px",
    "& textarea" :{
      "position": "absolute",
      "left": "-100%"
    }
  },
  btnSave: {
    "min-width": "25px",
    "height": "22px",
    "margin": "0px 10px 0px 0px",
    "padding": "0px"
  },
  btnIcon: {
    marginRight: theme.spacing.unit
  },
  details: {
    "flex-wrap": "wrap"
  },
  alignRight:{
    "text-align": "right"
  },
  "link": {
    "font-size": "20px",
    "padding-top": "10px",
    "color":"#006a4d"
  },
  "hide": {
    display: "none"
  }
});
