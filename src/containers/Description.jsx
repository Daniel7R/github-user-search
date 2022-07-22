import React from "react";
import { Typography, Stack } from "@mui/material";

import { PaperInformation } from "../components/PaperInformation";
import { LocationInformation } from "../components/LocationInformation";

export const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack sx={{
        justifyContent: "center",
      }}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
