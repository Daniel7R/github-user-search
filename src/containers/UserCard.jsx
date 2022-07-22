import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";

import { PrincipalInformation } from "../components/PrincipalInformation";
import { Description } from "./Description";

export const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={3} md={2}>
        <CardMedia
          sx={{ borderRadius: "50%" }}
          component="img"
          image={avatar_url}
          alt="Github User"
        />
      </Grid>
      <Grid item xs={9} md={10}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};
