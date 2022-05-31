import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fafafa",
      light: "#fafafa"
    },
    text: {
      primary: "#000000",
    },
    background: {
      paper: "#FEFFFE",
      default: "#ECECED",
    },
    divider: "rgba(67,73,85, .3)",
  },
});

export default Theme;
