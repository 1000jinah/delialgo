import { Box, Icon, Typography } from "@mui/material";
import React from "react";

const TypeCtsBox = ({ typeCtsIcon, typeCtsTitle, typeCtsDescript }) => {
  return (
    <Box
      sx={{
        mt: "40px",
        mr: 3,
        p: 3,
        width: "33%",
        ":hover": {
          backgroundColor: "#fff",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;",
          ".type-title": {
            color: "#FD5B26",
          },
          ".type-icon": { color: "#FD5B26" },
        },
      }}
    >
      <Box>
        <Icon src={typeCtsIcon} className="type-icon" />
      </Box>

      <Box>
        <Typography
          className="type-title"
          sx={{ fontSize: 18, color: "#202225", fontWeight: 700 }}
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
  );
};

export default TypeCtsBox;
