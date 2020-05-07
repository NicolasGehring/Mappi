import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: "balal",
  },
});

export default theme;
