import { Box, Typography } from "@mui/material";
import React from "react";

const TypeTitleBox = ({typetitle}) => {
  return (
    <Box sx={{ borderBottom: "1px solid #ccbcb8", m: "0 100px", mt: 20, }}>
      <Typography  sx={{ color: "#ccbcb8", my:2,fontWeight: 400, fontSize: 18 }}>
       {typetitle}
      </Typography>
    </Box>
  );
};

export default TypeTitleBox;
