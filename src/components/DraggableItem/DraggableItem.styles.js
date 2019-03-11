export default theme => ({
  listItemDragged: {
    backgroundColor: theme.palette.primary.main
  },
  listItemTextDragged: {
    color: "#fff"
  },
  iconButton: {
    padding: "0px",
    "margin-right": "10px"
  },
  imageList: {
    "font-size":"10px",
    "list-style": "none",
    "padding": "10px"
  },
  hide: {
    "display": "none"
  },
  noDragging: {
    "font-weight": "500"
  },
  listWrapper: {
    "color": "inherit",
    "border-radius": "10px",
    "border": "dotted 1px lightgray",
    "margin-bottom": "5px"
  },
  "selectedItem": {
      "border": "solid 2px lightgray"
  }
});
