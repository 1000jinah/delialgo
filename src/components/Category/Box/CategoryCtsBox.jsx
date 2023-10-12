import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as LocationIcon } from "assets/icon_location.svg";
import { ReactComponent as TickerIcon } from "assets/icon_ticker.svg";
import { Link } from "react-router-dom";
import CategoryChart from "../Chart/CategoryLineChart";

const CategoryCtsBox = () => {
  const handleChipsClick = () => {};
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          m: "0 100px",
          mt: 6,
          mb: 4,
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* type */}
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography sx={{ fontSize: 14, color: "#636973", pr: 2 }}>
              Relevance_97.2%
            </Typography>
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <LocationIcon style={{ marginRight: 5 }} />
              <Typography sx={{ fontSize: 14, color: "#636973", pr: 2 }}>
                NYSE_VTLE
              </Typography>
            </Box>
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <TickerIcon style={{ marginRight: 5 }} />
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#636973",
                  pr: 2,
                  alignItems: "center",
                }}
              >
                Ticker_LPI
              </Typography>
            </Box>
          </Box>
          {/* title */}
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{ color: "#202225", fontWeight: "bold", fontSize: 21 }}
            >
              Laredo Petroleum Inc. Vital Energy - Independent Energy Company
            </Typography>
          </Box>
          {/* subtitle */}
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{ color: "#202225", fontSize: 16, lineHeight: "28px" }}
            >
              Laredo Petroleum, Inc. is an American company engaged in
              hydrocarbon exploration incorporated in Delaware with its
              principal operational headquarters located in Tulsa, Oklahoma. As
              of December 31, 2020, the company had 278 million barrels of oil
              equivalent (1.70×109 GJ) of ...
            </Typography>
          </Box>
          {/* link */}
          <Box sx={{ mb: 2 }}>
            <Link
              to="https://finance.yahoo.com/quote/LPI/profile?p=LPI&guccounter=1"
              style={{ textDecoration: "none", color: "#636973", fontSize: 14 }}
            >
              https://finance.yahoo.com/quote/LPI/profile?p=LPI&guccounter=1
            </Link>
          </Box>
          {/* chips */}
          <Box>
            <Chip
              sx={{
                color: "#202225",
                height: 24,
                backgroundColor: "#d6e8f0",
                fontSize: 14,
                "& .MuiChip-label": {
                  px: 1,
                },
              }}
              label="Energy"
              onClick={handleChipsClick}
            />{" "}
            <Chip
              sx={{
                color: "#202225",
                height: 24,
                backgroundColor: "#d6e8f0",
                fontSize: 14,
                "& .MuiChip-label": {
                  px: 1,
                },
              }}
              label="Oil and Gas"
              onClick={handleChipsClick}
            />
          </Box>
        </Box>
        <CategoryChart />
      </Box>
      <Divider sx={{ borderBottom: "1px solid #ccbcb8", width:"70%", m: "0 100px", }} />
    </Box>
  );
};

export default CategoryCtsBox;
