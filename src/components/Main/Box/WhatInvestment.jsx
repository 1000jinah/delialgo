import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DownArrowIcon from '@mui/icons-material/ArrowDownwardOutlined';

const WhatInvestment = () => {
  return (
    <Box>
      {/* <!--What is Thematice Investment--> */}
      <Box sx={{ p: "80px 0" }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 36, fontWeight: 700, color: "#202225", m: 0 }}
          >
            What is Thematic Investment?
          </Typography>
          <Typography
            variant="span"
            sx={{
              width: "60%",
              fontSize: 16,
              fontWeight: 400,
              color: "#202225",
              lineHeight: "31px",
              mt: "25px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <IconButton
            sx={{
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#FDEAE4",
              width: "50px",
              height: "50px",
              mt: "25px",
              ":hover":{
                backgroundColor: "#FDEAE4",
              }
            }}
          >
            <DownArrowIcon/>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatInvestment;
