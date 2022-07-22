import { Stack, Typography } from "@mui/material";
import React from "react";

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;
  return (
    <>
      <Stack>
        <Typography>{ name }</Typography>
        <Typography>{ created_at }</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  )
};
