import { Box, Typography } from "@mui/material";
import React from "react";

const CateTitleBox = ({ ordinarytitle, borderBottomStyle }) => {
  return (
    <Box sx={{ borderBottom: borderBottomStyle, m: "0 100px", mr:6, pt:6 }}>
      <Typography
        sx={{
          color: "#ccbcb8",
          py: 2,
          boxSizing: "border-box",
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        {ordinarytitle}
      </Typography>
    </Box>
  );
};

export default CateTitleBox;
