import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography, Tabs, Tab } from "@mui/material";
import { ReactComponent as CalendarIcon } from "assets/icon_calendar.svg";
import ReturnTable from "../Table/ReturnTable";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ReturnTab() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // InvestGoal , QandA , WhatInvestment , TypeTitleBox , TypeCtsBox

    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#707070",
          ".MuiTabs-indicator": {
            backgroundColor: "#FD5B26",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{
                textTransform: "capitalize",
                color: "#202225",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fd3f01" },
              }}
              label="Cumulative"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                textTransform: "capitalize",
                color: "#202225",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fd3f01" },
              }}
              label="Calendar Year"
              {...a11yProps(1)}
            />
          </Tabs>
          <Box>
            <Button
              startIcon={<CalendarIcon />}
              sx={{
                textTransform: "capitalize",
                border: "none",
                fontSize: 12,
                p: 0,
                backgroundColor: "#FDEAE4",
                ":hover": {
                  backgroundColor: "transparent",
                },
                color: "#127fb0",
              }}
            >
              Date Range
            </Button>
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ReturnTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Insights
      </CustomTabPanel>
    </Box>
  );
}
