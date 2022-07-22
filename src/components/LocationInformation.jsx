import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Business, Language, LocationOn, Twitter } from "@mui/icons-material";

export const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid
      container
      columns={{xs: 2, sm: 1, md: 1}}
      spacing={{ xs: 2, md: 2, sm: 1 }}
      sx={{
        marginTop: "10px",
      }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOn />
          <Typography>
            {location !== null ? location : "Not available"}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Twitter />
          <Typography>
            {twitter_username !== null ? twitter_username : "Not available"}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Language />
          {blog !== "" ? (
            <a target={"_blank"} href={blog} ><Typography>{blog}</Typography></a>
          ) : (
            <Typography>Not available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <Business />
          <Typography>
            {company !== null ? company : "Not available"}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
