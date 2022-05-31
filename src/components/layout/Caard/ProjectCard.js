import React from 'react'
import { Box, Paper, Typography, Button, Stack } from '@mui/material'

import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProjectCard(props) {
  const { project = {} } = props

  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        width: "320px",
        bgcolor: "background.paper",
        borderRadius: "1em"
      }}
      elevation={4}
    >
      <Box flexGrow={1} sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column"
      }}>

        <Typography variant="subtitle1" color="text.primary">
          {project.title}
        </Typography>

        <Typography variant="subtitle1" color="text.primary">
          {project.description}
        </Typography>

        <Stack spacing={2} direction="row" mt={2}>
          <Button
            onClick={() => window.open(project.demo_url, "_blank")}
            variant="outlined"
            color="secondary"
            startIcon={<VisibilityIcon />}
            sx={{ flexGrow: 1 }}
            disabled={!project.demo_url}
          >
            Demo
          </Button>

          <Button
            onClick={() => window.open(project.github_repo, "_blank")}
            variant="outlined"
            color="secondary"
            startIcon={<GitHubIcon />}
            sx={{ flexGrow: 1 }}
            disabled={!project.github_repo}
          >
            View code
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}
