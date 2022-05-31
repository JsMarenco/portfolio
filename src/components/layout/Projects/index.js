import React, { useEffect, useState } from "react";
import axios from "axios";

import ProjectCard from "../Caard/ProjectCard";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`)

      setProjects(response.data)

      setLoading(false)
    }

    getProjects()
  }, [])

  return (
    <>
      <Typography
        mb={2}
        align="center"
        variant="h5"
        color="text.primary"
      >
        My projects
      </Typography>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box component={"div"} sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            {projects.map((project, index) => {
              return (
                <Box key={index} >
                  <ProjectCard project={project} />
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
}
