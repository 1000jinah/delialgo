import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Breadcrumbs, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

import MachineBondTab from "components/Machine/Tab/MachineBondTab";

function handleBreadCrumbsClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
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

export default function MachineTab() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // InvestGoal , QandA , WhatInvestment , TypeTitleBox , TypeCtsBox

    <Box sx={{ width: "100%", }}>
      <Box
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
          ".MuiTabs-indicator": {
            backgroundColor: "#FD5B26",
          },
        }}
      >
        <Box
          sx={{
            p: "0px 100px",
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
              label="Our Portfolio"
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
              label="Insights"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                textTransform: "capitalize",
                color: "#202225",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fd3f01" },
              }}
              label="GOLP"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                textTransform: "capitalize",
                color: "#202225",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fd3f01" },
              }}
              label="Education"
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                textTransform: "capitalize",
                color: "#202225",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fd3f01" },
              }}
              label="Tools"
              {...a11yProps(4)}
            />
          </Tabs>
          <Box>
            <Button
              sx={{
                textTransform: "capitalize",
                border: "none",
                fontSize: 13,
                p: 0,
                backgroundColor: "#FDEAE4",
                ":hover": {
                  backgroundColor: "transparent",
                },
                color: "#360c5e",
              }}
            >
              Join us
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#fdeae4",
                fontSize: 13,
                p: 0,
                backgroundColor: "#360c5e",
                ":hover": {
                  backgroundColor: "#360c5e",
                },
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ p: "20px 100px", }}>
          <div role="presentation" onClick={handleBreadCrumbsClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                style={{
                  color: "#B3A5A1",
                  fontSize: 13,
                }}
                href="/"
              >
                Our Portfolio
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href="/material-ui/getting-started/installation/"
              >
                Theme Machine
              </Link>
            </Breadcrumbs>
          </div>
        </Box>
        <Box
          sx={{
            mt: 6,
            p: "20px 100px",
          
          }}
        >
          <MachineBondTab />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Insights
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        GOLP
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Education
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Tools
      </CustomTabPanel>
    </Box>
  );
}
