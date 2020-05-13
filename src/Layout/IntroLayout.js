import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocalBar from "@material-ui/icons/LocalBar";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  icon: {
    fontSize: "70px",
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
      justify={"space-around"}
      alignItems={"center"}
    >
      <Grid item>
        <Grid container direction={"row"}>
          <Grid item>
            <Typography variant={"h2"}>Corner Map</Typography>
          </Grid>
          <Grid item>
            <LocalBar className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>Test</Grid>
      <Grid item>Test</Grid>
    </Grid>
  );
}
