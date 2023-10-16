import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MachineCtsBox = () => {
  const detailData = [
    { title: "Price (USD)", value: "4,115.24" },
    { title: "Today's Change", value: "-30.34 / -0.74%" },
    { title: "Annualized Earning / Benchmark", value: "33.1% / 35.8%" },
    { title: "Annualized Variable / Benchmark", value: "16.3% / 14.2%" },
    { title: "Sharp Index / Benchmark", value: "22 / 35.2" },
    { title: "Advisory Fee", value: "0.03%" },
  ];
  return (
    <Box sx={{ backgroundColor: "#f2d7ce", p: 3, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: 26, color: "#202225", mr: 2 }}>
            iShares iBonds Dec 2024 Term Corporate ETF (IBDP)
          </Typography>
          <Link
            to="/compare"
            style={{
              color: "#127fb0",
              padding: "0.25rem 0.6rem",
              borderRadius: 20,
              border: "1px solid #127fb0",
            }}
          >
            + Compare
          </Link>
        </Box>
        <Typography sx={{ color: "#b3a5a1", fontSize: 12 }}>
          NYSEArca - NYSEArca Delayed Price. Currency in USD
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {detailData.map((item, index) => (
          <Box sx={{ mr: 3.5 }}>
            <Typography sx={{ fontSize: 12, color: "#202225", mb: 0.5 }}>
              {item.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {item.value.includes("-") ? (
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    mr: 1,
                    borderRadius: "50%",
                    backgroundColor: "#cc0000",
                  }}
                />
              ) : null}
              <Typography
                sx={{
                  fontSize: 18,
                  color: item.value.includes("-") ? "#cc0000" : "#202225",
                  fontWeight: "bold",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MachineCtsBox;
