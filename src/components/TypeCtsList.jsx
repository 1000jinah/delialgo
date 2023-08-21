import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import EastIcon from "@mui/icons-material/EastOutlined";
const TypeCtsList = ({
  typeCtsListTitle,
  typeCtsListDescript,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultBackgroundColor = "transparent";
  const hoveredBackgroundColor = "#fff";
  const titleColor = isHovered ? "#FD5B26" : "#000";
  const nextIconColor = isHovered ? "#FD5B26" : "#ccbcb8";
  return (
   
      <Box
      sx={{
        border: "1px solid #ccbcb8",
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
        backgroundColor: isHovered ? hoveredBackgroundColor : defaultBackgroundColor,
        p: 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <ShieldIcon sx={{ color: "#FD5B26" }} />
          </IconButton>
          <Typography sx={{ color: titleColor }}>
            {typeCtsListTitle}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{typeCtsListDescript}</Typography>
          <IconButton>
            <EastIcon sx={{ color: nextIconColor }} />
            {/* "#ccbcb8" */}
          </IconButton>
        </Box>
      </Box>
   
  );
};

export default TypeCtsList;
// typeCtsListTitleColor={
//   expandedListIndex === 35 ? "#FD5B26" : "#000"
// }
// typeCtsListNextColor={
//   expandedListIndex === 35 ? "#FD5B26" : "#ccbcb8"
// }
// typeCtsListBackgroundColor={
//   expandedListIndex === 35 ? "#fff" : "transparent"
// }