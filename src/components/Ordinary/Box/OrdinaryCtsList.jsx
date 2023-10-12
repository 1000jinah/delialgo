import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
const OrdinaryCtsList = ({
  ordinaryCtsListTicker,
  ordinaryCtsListTitle,
  ordinaryCtsListPercent,
  ordinaryCtsListIncrese,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const defaultBackgroundColor = "transparent";
  const hoveredBackgroundColor = "#fff";
  const titleColor = isHovered ? "#FD5B26" : "#636973";

  return (
    <Box
      sx={{
        border: "1px solid #ccbcb8",
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
        backgroundColor: isHovered
          ? hoveredBackgroundColor
          : defaultBackgroundColor,
        py: 1,
        px: 1.5,
      }}
      onClick={handleBoxClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#202225", mr: 1.5 }}>
          {ordinaryCtsListTicker}
        </Typography>
        <Typography sx={{ color: titleColor, fontSize: 14 }}>
          {ordinaryCtsListTitle}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#202225", mr: 1, fontSize: 14 }}>
          {ordinaryCtsListPercent}
        </Typography>
        <Typography sx={{ color: "#FD5B26", fontSize: 14, mr: 3 }}>
          {ordinaryCtsListIncrese}
        </Typography>
        <Box>
          {/* 다른 박스나 요소를 클릭하면 체크박스가 토글됩니다. */}
          <FormControlLabel
            sx={{
              display: "none", // 체크박스 숨기기
            }}
            control={
              <Checkbox
                checked={isChecked}
                sx={{
                  display: "none", // 체크박스 숨기기
                }}
              />
            }
          />
          {/* 체크박스 대신 표시되는 다른 요소 */}
          <div
            style={{
              width: "18px",
              height: "18px",
              border: "1px solid #ccbcb8",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              boxSizing: "border-box",
              backgroundColor: isChecked ? "#FD5B26" : "transparent",
            }}
          >
            {isChecked ? (
              <CheckIcon sx={{ color: "#fff", fontSize: "1rem" }} />
            ) : (
              ""
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default OrdinaryCtsList;
// typeCtsListTitleColor={
//   expandedListIndex === 35 ? "#FD5B26" : "#000"
// }
// typeCtsListNextColor={
//   expandedListIndex === 35 ? "#FD5B26" : "#ccbcb8"
// }
// typeCtsListBackgroundColor={
//   expandedListIndex === 35 ? "#fff" : "transparent"
// }
