import { Box, Typography } from "@mui/material";
import React from "react";
const keyPointArray = [
  {
    pointTitle: "Macro Impact",
    pointDescript:
      "We see the Ukraine war reducing global growth, increasing inflation and putting central banks in a bind. We prefer developed stocks in the inflationary backdrop.",
  },
  {
    pointTitle: "Market Backdrop",
    pointDescript:
      "Stocks led by European bounced from 2022 lows last week, as oil prices came off highs. The European Central Bank accelerated policy nomalization.",
  },
  {
    pointTitle: "Week Ahead",
    pointDescript:
      "The Fed is set to raise its policy rate by 0.25% this week - the first hike since the pandemic started. We still see a historically muted response to inflation.",
  },
];
const weekReviewArray = [
  {
    pointTitle: "",
    pointDescript: "Flash Mfg. PMI fell to 51.2 from 53.6",
  },
  {
    pointTitle: "",
    pointDescript: "Flash Mfg. PMI fell to 51.2 from 53.4",
  },
  {
    pointTitle: "",
    pointDescript: "Existing home sales fell to 5.4m from 5.6m SAAR",
  },
];

const InsightKeyBox = ({ isWeekReview }) => {
  const data = isWeekReview ? weekReviewArray : keyPointArray;
  return (
    <>
      {data.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "start", mb: 5 }}>
          <Box sx={{ p: 2, border: "1px solid #ccbcb8", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",

                mb: isWeekReview === true ? 0 : 1,
              }}
            >
              <Typography
                sx={{
                  color: "#127fb0",
                  fontWeight: "bold",
                  fontSize: 16,
                  lineHeight: 1,
                }}
              >
                {item.pointTitle}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#636973", fontSize: 14, lineHeight: "28px" }}
              >
                {item.pointDescript}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default InsightKeyBox;
