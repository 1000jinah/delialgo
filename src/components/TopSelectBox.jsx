import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function BasicSelect({
  topSelectOption_fir,
  topSelectOption_sec,
  topSelectOption_thr,
  topSelectOption_for,
  topSelectMargRight,
  topSelectClick,
  topSelectColor,
  topSelectBorderStyle,
  topSelectIcon
}) {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          startAdornment={
            topSelectIcon === "0" ? (
              <PersonOutlineOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <LanguageOutlinedIcon sx={{ fontSize: 18 }} />
            )
          }
          className="TopSelect"
          value={age}
          onChange={handleChange}
          onClick={topSelectClick}
          sx={{
            border: topSelectBorderStyle,
            color: topSelectColor,
            //"#fd3f01",
            mr: topSelectMargRight,
            fontSize: 12,
            pl: "10px",
            ".MuiSelect-select": {
              color: topSelectColor,
              p: "5px",
            },
            ".MuiSelect-icon": {
              color: topSelectColor,
              //"#fd3f01",
            },
          }}
        >
          <MenuItem value={10}>{topSelectOption_fir}</MenuItem>
          <MenuItem value={20}>{topSelectOption_sec}</MenuItem>
          <MenuItem value={30}>{topSelectOption_thr}</MenuItem>
          <MenuItem value={40}>{topSelectOption_for}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
