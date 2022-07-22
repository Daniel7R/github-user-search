import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import { Searcher } from "./components/Searcher";
import { getGithubUser } from "./services/user";
import { UserCard } from "./containers/UserCard";

export const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserSate] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);
  
  const getUser = async (user) => {
    const userResponse = await getGithubUser(user);
    
    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if(userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserSate(userResponse)
    }
  }

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser])

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "730px",
        borderRadius: "15px",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};
