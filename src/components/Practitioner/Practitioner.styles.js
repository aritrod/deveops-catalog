export default theme => ({
  tabs: {
    padding: theme.spacing.unit * 2
  },
  solType:{
    "font-size": "20px",
    "&:focus":{
      "outline": "none"
    }
  },
  showMoreInfo:{
    height:"20px",
    width: "20px",
    cursor: "pointer",
    color: "#007c43"
  },
  tabHolder: {
    margin: "0",
    padding: "0"
  },
  moreInfoLink: {
    display: "block",
    "line-height": "30px",
    cursor: "pointer",
    "text-decoration": "underline",
    color: "#006a4d"
  }
});
