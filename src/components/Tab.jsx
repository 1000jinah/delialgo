import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Breadcrumbs, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import InvestGoal from "components/InvestGoal";
import QandA from "components/QandA";
import WhatInvestment from "components/WhatInvestment";
import TypeTitleBox from "components/TypeTitleBox";
import TypeCtsBox from "components/TypeCtsBox";

import StorageIcon from "@mui/icons-material/Storage";
import TypeCtsList from "./TypeCtsList";

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

export default function MainTab() {
  const [value, setValue] = React.useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandMouseEnter = (index) => {
    setExpandedIndex(index);
  };


  return (
    <Box sx={{ width: "100%" }}>
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
        <Box sx={{ p: "20px 100px" }}>
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
          <Box>
            <Typography
              sx={{
                fontSize: 48,
                color: "#202225",
                fontWeight: 700,
                m: "65px 0 30px 0px",
              }}
            >
              Choose Your Investment Goal
            </Typography>
            <Typography
              sx={{ fontSize: 16, color: "#202225", fontWeight: 400, m: 0 }}
            >
              A line that spans disruptive tech, equity income, hard-to-access
              emerging markets, and more. Simply put, we strive to offer
              investors something beyond ordinary.
            </Typography>
            <Button
              sx={{
                border: "none",
                borderRadius: "5px",
                textTransform: "capitalize",
                p: "15px 20px",
                fontSize: 16,
                fontWeight: 400,
                backgroundColor: "#FD5B26",
                color: "#fff",
                lineHeight: "normal",
                m: "35px 0 35px 0px",
                ":hover": {
                  backgroundColor: "#FD5B26",
                },
              }}
            >
              All Thematic ETF
            </Button>
          </Box>
          <InvestGoal />
        </Box>
        <QandA />
        <Box sx={{ p: "20px 100px", backgroundColor: "#FFF9F5" }}>
          <WhatInvestment />
        </Box>
        <Box sx={{ p: "20px 100px", backgroundColor: "#fdeae4" }}>
          {/* Disruptive Technology */}
          <TypeTitleBox typetitle="Disruptive Technology" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
            }}
          >
            {/* typeCtsBoxHover */}
            <Box sx={{ display: "flex" }}>
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(1)}
                typeCtsBackgroundColor={
                  expandedIndex === 1 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 1 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 1
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Big data"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(2)}
                typeCtsBackgroundColor={
                  expandedIndex === 2 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 2 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 2
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Connectivity"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(3)}
                typeCtsBackgroundColor={
                  expandedIndex === 3 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 3 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 3
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsTitle="Digital Content"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
            </Box>
            {expandedIndex === 1 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
            {expandedIndex === 2 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
            {expandedIndex === 3 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(4)}
                typeCtsBackgroundColor={
                  expandedIndex === 4 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 4 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 4
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Fintech"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(5)}
                typeCtsBackgroundColor={
                  expandedIndex === 5 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 5 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 5
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Mobility"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(6)}
                typeCtsBackgroundColor={
                  expandedIndex === 6 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 6 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 6
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsTitle="Robotics"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
            </Box>
            {expandedIndex === 4 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}

            {expandedIndex === 5 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
            {expandedIndex === 6 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
          </Box>
          {/* People & Demographics */}
          <TypeTitleBox typetitle="People & Demographics" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(7)}
                typeCtsBackgroundColor={
                  expandedIndex === 7 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 7 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 7
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Health & Wellness"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(8)}
                typeCtsBackgroundColor={
                  expandedIndex === 8 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 8 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 8
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsTitle="New Consumer"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
            </Box>
            {expandedIndex === 7 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}

            {expandedIndex === 8 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
          </Box>
          {/* Physical Envrionment */}
          <TypeTitleBox typetitle="Physical Envrionment" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(9)}
                typeCtsBackgroundColor={
                  expandedIndex === 9 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 9 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 9
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="Infrastructure Development"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(10)}
                typeCtsBackgroundColor={
                  expandedIndex === 10 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 10 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 10
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsTitle="Climate Change"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
            </Box>
            {expandedIndex === 9 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}

            {expandedIndex === 10 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
          </Box>
          {/* Sustainability */}
          <TypeTitleBox typetitle="Sustainability" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(11)}
                typeCtsBackgroundColor={
                  expandedIndex === 11 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 11 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 11
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsBoxMarginRight={3}
                typeCtsTitle="ESG"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
              <TypeCtsBox
                typeCtsIcon={<StorageIcon />}
                typeCtsBoxEnter={() => handleExpandMouseEnter(12)}
                typeCtsBackgroundColor={
                  expandedIndex === 12 ? "#fff" : "transparent"
                }
                typeCtsColor={expandedIndex === 12 ? "#FD5B26" : "#202225"}
                typeCtsBoxShadow={
                  expandedIndex === 12
                    ? "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
                    : "none"
                }
                typeCtsTitle="TCFD"
                typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
              />
            </Box>
            {expandedIndex === 11 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}

            {expandedIndex === 12 && (
              <>
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TypeCtsList
                  typeCtsListTitle="Cybersecurity"
                  typeCtsListDescript=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </>
            )}
          </Box>
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
