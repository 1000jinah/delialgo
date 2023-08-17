import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const TypeCtsBox = ({
  typeCtsIcon,
  typeCtsTitle,
  typeCtsDescript,
  typeCtsBoxClick,
  typeCtsBackgroundColor,
  typeCtsColor,
  typeCtsBoxShadow,
  typeCtsBoxMarginRight
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
        ":hover": {
          backgroundColor: "#fff",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",

          ".type-title": {
            color: "#FD5B26",
          },
          ".type-icon": { color: "#FD5B26" },
        },
      }}
      onClick={typeCtsBoxClick}
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
