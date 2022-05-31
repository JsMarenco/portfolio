import React from "react";

import { FooterSvg } from "../Svg";
import ContactLinks from "../../../routes/ContactLinks";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'
import { Stack } from "@mui/material";

export default function Footer() {
  return (
    <>
      <FooterSvg color="#303030" />

      <Box sx={{ bgcolor: "#303030", pb: 3 }}>
        <Typography variant="h6" color="primary" align="center">Contact</Typography>

        <Stack spacing={2} direction="row" justifyContent={"center"}>
          {
            ContactLinks().map((link, index) => {
              return (
                <Button key={`${link.href}_${index}`} onClick={() => window.open(link.href, "_blank")} variant="outlined" sx={{ mx: 1 }}>
                  {link.icon}
                </Button>
              )
            })
          }
        </Stack>

      </Box>
    </>
  );
}
