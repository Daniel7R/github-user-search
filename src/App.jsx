import React, { useState } from "react";
import { Container } from "@mui/material";

import { Searcher } from "./components/Searcher";

export const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserSate] = useState("inputUser");
  console.log(inputUser)

  return (
    <Container
      sx={{
        background: "#86ffa6c7",
        width: "80vw",
        height: "500px",
        borderRadius: "15px",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};
