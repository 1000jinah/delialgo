import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const TypeCtsBox = ({
  typeCtsIcon,
  typeCtsTitle,
  typeCtsDescript,
  typeCtsBoxHover,
  typeCtsBackgroundColor,
  typeCtsColor,
  typeCtsBoxShadow,
  typeCtsBoxEnter,
  typeCtsBoxMarginRight,
}) => {
  return (
    <Box
      sx={{
        mt: "40px",
        mr: typeCtsBoxMarginRight,
        p: 3,
        backgroundColor: typeCtsBackgroundColor,
        boxShadow: typeCtsBoxShadow,
        width: "33%",
        ":hover": typeCtsBoxHover,
      }}
      onMouseEnter={typeCtsBoxEnter}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <IconButton
          className="type-icon"
          sx={{ py: "2px", color: typeCtsColor }}
        >
          {typeCtsIcon}
        </IconButton>
        <Box>
          <Typography
            className="type-title"
            sx={{
              fontSize: 18,

              color: typeCtsColor,
              fontWeight: 700,
            }}
          >
            {typeCtsTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "#202225",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            {typeCtsDescript}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TypeCtsBox;
