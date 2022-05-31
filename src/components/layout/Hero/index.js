import React from "react";

import { HERO_BACKGROUND } from "../../constants";
import { HeroSvg } from "../Svg"

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container maxWidth="xl" sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}>
          <Typography
            variant="h4"
            align="center"
            color="primary.light"
          >
            Hi, i'm Angel Marenco, a Web Developer. Love UI & React
          </Typography>

        </Container>

        <HeroSvg color="#ECECED" />
      </Box>

    </>
  );
}
