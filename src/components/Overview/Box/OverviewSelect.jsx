import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { ReactComponent as AssetsClassIcon } from "assets/icon_assetclass.svg";
import { ReactComponent as AssetsTypeIcon } from "assets/icon_assettype.svg";
import { ReactComponent as RiskLevelIcon } from "assets/icon_risklevel.svg";
import { ReactComponent as SectorIcon } from "assets/icon_sector.svg";
import { ReactComponent as CountryIcon } from "assets/icon_country.svg";

export default function OverviewSelect() {
  const [values, setValues] = React.useState([10, 10, 10, 10, 10]);

  const selectsData = [
    { title: ["Option 1", "Option 2", "Option 3"], icon: <AssetsClassIcon /> },
    { title: ["Option A", "Option B", "Option C"], icon: <AssetsTypeIcon /> },
    { title: ["Option X", "Option Y", "Option Z"], icon: <RiskLevelIcon /> },
    {
      title: ["Option Red", "Option Green", "Option Blue"],
      icon: <SectorIcon />,
    },
    {
      title: ["Option Apple", "Option Banana", "Option Cherry"],
      icon: <CountryIcon />,
    },
  ];

  const handleChange = (index) => (event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  return (
    <Box
      sx={{
        minWidth: 210,
        display: "flex",
        "& .MuiInputBase-root": {
          pl: "6px",
        },
        "& .MuiSelect-select": {
          p: "9.5px 14px",
          pl: 0,
        },
      }}
    >
      {selectsData.map((data, index) => (
        <FormControl fullWidth key={index}>
          <Select
            sx={{ mr: 3, backgroundColor: "#fde0d7" }}
            labelId={`demo-simple-select-label-${index}`}
            id={`demo-simple-select-${index}`}
            value={values[index]}
            label={`Select ${index + 1}`}
            onChange={handleChange(index)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>{data.icon}</IconButton>
              </InputAdornment>
            }
          >
            {data.title.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={optionIndex + 10}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
}
