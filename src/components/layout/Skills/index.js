import React from 'react'
import Typography from '@mui/material/Typography'
import SkillsJson from './skills'
import { Box, Stack } from '@mui/material'


export default function Skills() {
  return (
    <>
      <Typography variant="h6" align='center' color="text.primary">My skills</Typography>

      <Stack direction="row" justifyContent={"center"} flexWrap="wrap">
        {
          SkillsJson().map((skill) => {
            return (
              <Box key={skill.name} sx={{ m: 0.5, borderRadius: ".5em", bgcolor: "rgba(48, 48, 48, .7)", p: 1.5, width: "5em" }}>
                {skill.icon}
              </Box>
            )
          })
        }
      </Stack>
    </>
  )
}
