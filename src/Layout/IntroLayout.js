import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "green",
  },
});
export default function IntroLayout() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction={"column"}
      alignContent={"stretch"}
      justify={"space-between"}
      alignItems={"center"}
    >
      <Grid item>Test</Grid>
      <Grid item>Test</Grid>
      <Grid item>Test</Grid>
    </Grid>
  );
}
