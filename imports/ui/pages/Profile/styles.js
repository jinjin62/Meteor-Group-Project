const styles = theme => ({
  bg: {
    backgroundColor: "aliceblue",
    minHeight: "100vh"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "80vw",
    maxWidth: "850px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 5
  },
  form: {
    ...theme.mixins.gutters()
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
  },
  accountForm: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    color: "white"
  },
  errorMessage: {
    color: "red"
  },
  radioFormControl: {
    marginTop: theme.spacing.unit
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: theme.spacing.unit * 2
  },
  textWhite: {
    color: "white"
  },
  h2: {
    color: "Black",
    fontSize: "32px",
    lineHeight: 1.15,
    padding: "10px 0 15px 0",
    fontWeight: "400",
    textAlign: "center"
  },
  btnPrimary: {
    //background: "rgb(65,168,237)",
    background: "#f79e02",
    marginTop: "15px",
    color: "black"
  },
  btnSecondary: {
    marginRight: "20px",
    marginTop: "15px",
    color: "black"
  },
  btnSmall: {
    background: "#f79e02"
  }
});

export default styles;