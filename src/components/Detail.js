import React from "react";
import { Typography, Stack, Button, capitalize } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // icons array
  const extraDetails = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        // className="detail-image"
        style={{ width: "100%", maxWidth: "500px" }}
        loading="lazy"
      />
      <Stack
        sx={{
          gap: { lg: "35", xs: "20" },
          mt: "45px",
          ml: { lg: "auto", md: "60", xs: "60px" },
          mr: { lg: "60px", md: "0", xs: "0" },
          pr: { lg: "60px", md: "0", xs: "0" },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: { lg: "64px", xs: "20px" } }}
          fontWeight={700}
          textTransform="capitalize"
          mb="20px"
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          className="detail-description"
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong. {name}
          {``} is one of the best exercises to target your {target}. It will
          help you to improve your mood and gain energy.
        </Typography>
        {extraDetails?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              variant="h6"
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
