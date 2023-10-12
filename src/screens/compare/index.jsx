import { Box } from "@mui/material";
import React, { useState } from "react";
import LogoIcon from "assets/logo.png";
import BasicSelect from "components/Main/Box/TopSelectBox";
import CompareTab from "components/Compare/Tab/CompareTab";

const Compare = () => {
  const [selectedSelectIndex, setSelectedSelectIndex] = useState(null);

  const handleTopSelectClick = (index) => {
    setSelectedSelectIndex(index);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#FDEAE4",
        fontFamily: "Apple Sandoll Gothic Neo",
      }}
    >
      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "100px",
          py: "20px",
        }}
      >
        <img alt="logo" src={LogoIcon} width="auto" height="30px" />
        <Box sx={{ display: "flex" }}>
          <BasicSelect
            topSelectOption_fir="Indivdual"
            topSelectOption_sec="Example 1"
            topSelectOption_thr="Example 2"
            topSelectOption_for="Example 3"
            topSelectColor={selectedSelectIndex === 0 ? "#fd3f01" : "#202225"}
            topSelectBorderStyle={
              selectedSelectIndex === 0 ? "1px solid #fd3f01" : "#202225"
            }
            topSelectIcon="0"
            topSelectClick={() => handleTopSelectClick(0)}
            topSelectMargRight={2}
          />
          <BasicSelect
            topSelectOption_fir="English"
            topSelectOption_sec="Korean"
            topSelectOption_thr="Chinese"
            topSelectOption_for="Janpanese"
            topSelectColor={selectedSelectIndex === 1 ? "#fd3f01" : "#202225"}
            topSelectBorderStyle={
              selectedSelectIndex === 1 ? "1px solid #fd3f01" : "#202225"
            }
            topSelectIcon="1"
            topSelectClick={() => handleTopSelectClick(1)}
          />
        </Box>
      </Box>
      <CompareTab />
    </Box>
  );
};

export default Compare;
