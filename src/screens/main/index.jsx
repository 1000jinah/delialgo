import { Box } from "@mui/material";
import React from "react";
import LogoIcon from "assets/logo.png";
import MainTab from "components/Tab";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDEAE4",
        fontFamily: "Apple Sandoll Gothic Neo",
      }}
    >
      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "100px",
          py: "20px",
        }}
      >
        <img alt="logo" src={LogoIcon} width="auto" height="30px" />
        <Box class="Headerbtn">
          <button class="Selectuser_btn" type="button">
            Individual
          </button>
          <button class="Language_btn" type="button">
            English
          </button>
        </Box>
      </Box>
      <MainTab />
    </Box>
  );
};

export default Main;
