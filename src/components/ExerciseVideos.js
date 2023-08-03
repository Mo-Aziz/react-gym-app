import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import SimpleBackdrop from "./SimpleBackdrop";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) {
    <SimpleBackdrop />;
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: "20px" }}
      >
        {" "}
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos:
      </Typography>
      <Stack
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
        mx="auto"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "80px", xs: "10" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="video-image"
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

{
  /* {exerciseVideos?.slice(0, 3).map((video) => (
  // <Box
  //   key={video.id}
  //   sx={{
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     mb: "20px",
  //   }}
  // >
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${video.id}`}
    title={video.title}
    frameBorder="0"
    allowFullScreen
  ></iframe>
  // </Box>
))} */
}
