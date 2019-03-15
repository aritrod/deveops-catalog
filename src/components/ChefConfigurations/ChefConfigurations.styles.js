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
    "background-size": "100%",
    "background-image": "-webkit-gradient(linear,0 50%,100% 50%,color-stop(0%,#007c43),color-stop(100%,#63b44f))",
    "background-image": "-webkit-linear-gradient(left,#007c43 0,#63b44f 100%)",
    "background-image": "linear-gradient(to right,#007c43 0,#63b44f 100%)",
    "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#007c43', endColorstr='#63b44f', GradientType=1)"
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
    "width": "100%",
    "overflow-x": "auto",
    "padding-bottom": "10px",
    "& textarea" :{
      "position": "absolute",
      "left": "-100%"
    }
  },
  btnDone: {
    "min-width": "40px",
    "height": "38px",
    "margin": "30px 0px 0px 0px",
    "padding": "8px"
  },
  btnSave : {
    "min-width": "20px",
    "height": "30px",
    "margin": "0px 0px 0px 10px",
    "padding": "2px"
  },
  alignRight:{
    "text-align": "right",
    "float": "right"
  },
  btnIcon: {
    marginRight: theme.spacing.unit
  },
  selectBox: {
    "margin-top": "20px",
    "padding": "10px 0px 0px 0px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  "hide": {
    display: "none"
  },
  "title": {
    "position": "static",
    "transform": "translate(6px, 25px) scale(1)",
    "margin-top": "12px"
  },
  'formControl': {
    "width":"100%"
  }
});
