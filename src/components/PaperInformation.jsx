import React from "react";
import { Typography, Stack, Paper } from "@mui/material";

export const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <Paper elevation={3}>
      <Stack
        spacing={{ xs: 3, md: 2, sm: 1 }}
        direction={{ xs: "row", md: "row", sm: "column" }}
        sx={{
          justifyContent: "space-evenly",
          margin: "20px",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
