import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import EastIcon from "@mui/icons-material/EastOutlined";
const TypeCtsList = ({ typeCtsListTitle, typeCtsListDescript }) => {
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #ccbcb8",
          display: "flex",
          justifyContent: "space-between",
          mt: "20px",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <ShieldIcon sx={{ color: "#FD5B26" }} />
          </IconButton>
          <Typography>{typeCtsListTitle}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{typeCtsListDescript}</Typography>
          <IconButton>
            <EastIcon sx={{ color: "#ccbcb8" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TypeCtsList;
