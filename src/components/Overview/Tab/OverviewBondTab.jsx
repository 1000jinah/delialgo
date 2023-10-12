import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import MachineBarChart from "components/Overview/Chart/OverviewBarChart";
import MachineCtsBox from "components/Overview/Box/OverviewCtsBox";
import EnhancedTable from "../Table/OverviewTable";
import OverviewLineChart from "../Chart/OverviewChart";
// import CompareChart from "components/Machine/MachineChart";

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

export default function OverviewBondTab() {
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
          borderColor: "#ccbcb8",
          ".MuiTabs-indicator": {
            backgroundColor: "transparent",
          },
        }}
      >
        <MachineCtsBox />
        <Typography sx={{ color: "#202225", fontSize: 18, mb: 3 }}>
          Screener Results (51)
        </Typography>
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
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 0 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Overview"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 1 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="AI Portfolio"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 2 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Theme Portfolio"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 3 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Fundamental"
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 4 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Variable Insurance"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Box sx={{ py: 5,display:"flex"}}>
          <Box>
            <EnhancedTable/>
          </Box>
          <Box>
            <OverviewLineChart/>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}></CustomTabPanel>
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
      <CustomTabPanel value={value} index={3}></CustomTabPanel>
      <CustomTabPanel value={value} index={4}></CustomTabPanel>
    </Box>
  );
}
