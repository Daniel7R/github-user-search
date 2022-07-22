import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Business, Language, LocationOn, Twitter } from "@mui/icons-material";

export const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOn />
          <Typography>{location !== null ? location : "Not available"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Twitter />
          <Typography>{twitter_username !== null ? twitter_username : "Not available"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Language />
          <Typography>{blog !== "" ? blog : "Not available"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Business />
          <Typography>{company !== null ? company: "Not available"}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
