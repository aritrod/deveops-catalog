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
    "height": "50px;",
    marginBottom:"0px",
    "text-align": "left;",
    "background": "#2ac06d;",
    "font-weight": "bold;",
    "border-radius": "5px 5px 0px 0px;"
  },
  toggleButton:{
    "color":" #fff;",
    "height":"100%",
    "min-width": "80%",
    "font-size":" 17px;",
    "margin-left":" 15px;",
    "text-align":" center;",
    "background":" #2ac05a;",
    "font-weight":" bold;",
    "padding":" 10px 0px;",
    "& svg":{
      marginLeft: "25px"
    }
  },
  collapseWrapper: {
     "& > div": {
      width: "100%"
     }
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
    "height": "22px",
    "margin": "0px 4px 0px 0px",
    "padding": "0px 0px 0px 2px",
    "min-width": "15px",
    "float": "right"
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
  },
  'formControl': {
    "width":"100%",
    "& > div" :{
      "border-bottom": "solid 2px green",
      "margin-bottom": "30px"
    }
  },
  'multiFormControl':{
    'border-bottom': 'solid 2px rgba(0,0,0,0.4)',
    'padding-bottom': '30px',
    'margin-bottom': '5px'
  },
  'multiFormControlEnv': {
    'border-bottom': 'solid 2px rgba(0,0,0,0.4)',
    'padding-bottom': '30px',
    'margin-bottom': '5px'
  },
  'textField': {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0px",
    "& div": {
      marginTop: theme.spacing.unit
    },
    "& label": {
      top: (theme.spacing.unit/2) * -1
    }
  },
  "btnAddProp": {
    "float":" right;",
    "height":" 32px;",
    "border":" solid 1px rgba(0, 106, 77, 0.5);",
    "padding":" 2px;",
    "margin":" 10px;",
    "width":" 10px;",
    "min-width":" 28px;"
  },
  'radio': {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    display: "table",
    marginTop: theme.spacing.unit
  },
  'radioOption': {
    height: "30px",
    marginLeft: theme.spacing.unit
  },
  'btnAdd':{
    marginTop: theme.spacing.unit
  },
  buttonHolder: {
    textAlign: "left",
    "& button": {
      margin: "10px 0px"
    }
  }
});
