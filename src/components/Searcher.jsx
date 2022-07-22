import React, { useState } from "react";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState("");
  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "14px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label={"Search Github user"}
        placeholder="Octocat"
        variant="outlined"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        sx={{
          width: "90%",
        }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton size="small" onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
