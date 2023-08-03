import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <div className="similar-exercises">
        <Typography variant="h3" mb={5}>
          Exercises that target the same muscle group
        </Typography>
        <Stack
          sx={{ p: "2", position: "relative" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </div>
      <div className="similar-exercises">
        <Typography variant="h3" mb={5}>
          Exercises that use the same equipment
        </Typography>
        <Stack
          sx={{ p: "2", position: "relative" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {equipmentExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </div>
    </Box>
  );
};

export default SimilarExercises;
