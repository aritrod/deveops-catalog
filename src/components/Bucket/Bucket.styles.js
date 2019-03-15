export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: "24px",
    marginBottom: theme.spacing.unit * 2
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listDragged: {
    backgroundColor: "lightgrey"
  },
  subHeading: {
    color: "#00864f"
  }
});
