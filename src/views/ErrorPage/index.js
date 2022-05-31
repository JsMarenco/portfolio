import React from "react";

import image from "../../assets/error404.webp";

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home';

export default function ErrorPage() {
  return (
    <>
      <img src={image} alt="404" style={{
        display: "block",
        height: "65vh",
        maxWidth: "600px",
        width: "100%",
        minWidth: "310px",
        margin: "0 auto"
      }} />

      <Typography variant="h5"
        m={2}
        align="center"
        color="text.primary"
      >
        Page not found
      </Typography>

      <Button
        href="/"
        startIcon={<HomeIcon />}
        variant="outlined"
        color="secondary"
        sx={{
          display: "flex",
          margin: "0 auto",
          alingItems: "center",
          justifyContent: "center",
          width: "15em"
        }}
      >
        Back home
      </Button>
    </>
  );
}
