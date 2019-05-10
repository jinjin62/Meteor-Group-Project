const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    background: "rgb(108,157,142)",
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 20
    },
    width: "100%",
    margin: 0
  },
  headline: {
    fontWeight: 400,
    color: "rgb(64,64,64)",
    fontSize: theme.typography.display3.fontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.display4.fontSize
    }
  },
  subheading: {
    fontWeight: 400,
    color: "white",
    fontSize: "40px"
  },
  text: {
    color: "white"
  }
});

export default styles;