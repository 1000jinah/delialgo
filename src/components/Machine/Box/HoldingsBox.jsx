import { Box, Typography } from "@mui/material";
import React from "react";

const HoldingsBox = () => {
  const holdingBoxData = [
    { title: "ETFs Hold", value: 24 },
    { title: "IBDP Shares in ETF", value: "965.6K" },
    { title: "Biggest Holder", value: "SECT" },
    { title: "Largest Allocation", value: "DWUS" },
  ];
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {holdingBoxData.map((item, index) => (
        <Box
          key={index}
          sx={{ backgroundColor: "#fde0d7", width:170,mr:3, p:3}}
        >
          <Typography sx={{ fontSize: 12, color: "#202225" }}>
            {item.title}
          </Typography>
          <Typography
            sx={{ fontSize: 18, color: "#202225", fontWeight: "bold" }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default HoldingsBox;
