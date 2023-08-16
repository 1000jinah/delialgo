import React from "react";
import { Box, Typography } from "@mui/material";
const InvestGoal = () => {
  return (
    <Box sx={{ pt: "40px", pb: "80px" }}>
      <Typography
        sx={{ pb: "40px", fontSize: 18, color: "#202225", fontWeight: 700 }}
      >
        Top Categories of Investment Goal
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Disruptive */}
        <Box sx={{pr:4}}>
          <Typography
            variant="span"
            sx={{
              fontSize: 10,
              fontWeight: 400,
              color: "#FD784C",
              backgroundColor: "#FDE0D7",
              padding: "3px 5px",
              borderRadius: "3px",
            }}
          >
            Disruptive Technology
          </Typography>
          <Typography
            sx={{ fontSize: 18, color: "#202225", fontWeight: 500, my: "15px" }}
          >
            Cybersecurity
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "#202225",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            This theme focuses on companies developing security solutions to
            help protect against cyber-attacks affecting applications, networks,
            cloud computing, and endpoint security.
          </Typography>
        </Box>
        {/* Connectivity */}
        <Box sx={{pr:4}}>
          <Typography
            variant="span"
            sx={{
              fontSize: 10,
              fontWeight: 400,
              color: "#FD784C",
              backgroundColor: "#FDE0D7",
              padding: "3px 5px",
              borderRadius: "3px",
            }}
          >
            Connectivity
          </Typography>
          <Typography
            sx={{ fontSize: 18, color: "#202225", fontWeight: 500, my: "15px" }}
          >
            5G / Next Gen Networking
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "#202225",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            This theme focuses on companies that process, store, and analyze
            data by providing data mining, transformation, and visualization,
            and predictive analytics tools.
          </Typography>
        </Box>
        {/* People */}
        <Box sx={{pr:4}}>
          <Typography
            variant="span"
            sx={{
              fontSize: 10,
              fontWeight: 400,
              color: "#FD784C",
              backgroundColor: "#FDE0D7",
              padding: "3px 5px",
              borderRadius: "3px",
            }}
          >
            People &#38; Demographics
          </Typography>
          <Typography
            sx={{ fontSize: 18, color: "#202225", fontWeight: 500, my: "15px" }}
          >
            Health &#38; Wellness
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "#202225",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            This theme focuses on companies that process, store, and analyze
            data by providing data mining, transformation, and visualization,
            and predictive analytics tools.
          </Typography>
        </Box>
        {/* Resources */}
        <Box sx={{pr:4}}>
          <Typography
            variant="span"
            sx={{
              fontSize: 10,
              fontWeight: 400,
              color: "#fd784c",
              padding: "3px 5px",
              borderRadius: "3px",
            }}
          >
            Resource Scarcity
          </Typography>
          <Typography
            sx={{ fontSize: 18, color: "#202225", fontWeight: 500, my: "15px" }}
          >
            Resource Scarcity
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "#202225",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            This theme focuses on companies that process, store, and analyze
            data by providing data mining, transformation, and visualization,
            and predictive analytics tools.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestGoal;
