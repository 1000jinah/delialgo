import {
  Box,
  Divider,
  FormControlLabel,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { ReactComponent as SearchCategory } from "assets/icon_search_gray.svg";
import { ReactComponent as CleanIcon } from "assets/icon_exit.svg";
import OverviewSelect from "./OverviewSelect";

const MachineCtsBox = () => {
  const [inputValue, setInputValue] = useState("");

  // const detailData = [{ title: "Price (USD)", value: "4,115.24" }];
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
  };
  return (
    <Box
      sx={{
        width: "100%",
        mb: 4,
        "& .MuiFormControlLabel-root .MuiFormControlLabel-label ": {
          color: "#202225",
          fontSize: 14,
        },
        "& .MuiSvgIcon-root":{
          width:".78em",
          height:".78em",
        },
        // "&.MuiButtonBase-root.MuiRadio-root .Mui-checked":{
        //   color: "#202225",
        // }
      }}
    >
      <Typography
        sx={{
          fontSize: 36,
          color: "#202225",
          fontWeight: 700,
          mb:4
        }}
      >
        Investment Portfolio
      </Typography>
      <Box
        sx={{ width: "100%", mb: "30px", flexWrap: "wrap", display: "flex" }}
      >
        <OverviewSelect />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: "#ccbcb8", mx: 2, mr: 4 }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "bold", color: "#202225", mr: 3 }}>
            Exposure
          </Typography>
          <RadioGroup row>
            <FormControlLabel
              value="Domestic"
              control={<Radio sx={{ color: "#202225", fontSize: 14 }} />}
              label="Domestic"
            />
            <FormControlLabel
              value="Overseas"
              control={<Radio sx={{ color: "#202225", fontSize: 14 }} />}
              label="Overseas"
            />
          </RadioGroup>
        </Box>
      </Box>
      <Box sx={{ width: 650, mb: 3 }}>
        {/* Input */}
        <Input
          placeholder="Enter a fund name, partial name or ticker."
          startAdornment={
            <InputAdornment position="start">
              <SearchCategory style={{ marginRight: 15 }} />
            </InputAdornment>
          }
          endAdornment={
            inputValue && (
              <InputAdornment position="end">
                <CleanIcon
                  onClick={handleClearClick}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            )
          }
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            width: "100%",
            px: 2,
            backgroundColor: "#fff9f5",
            // border: "1px solid #ccbcb8",
            borderRadius: "5px",
            color: "#202225",
            "&.MuiInput-root:before": {
              borderBottom: "0px solid transparent",
              content: "none",
            },
            "&.MuiInput-root:after": {
              borderBottom: "0px solid transparent",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MachineCtsBox;
