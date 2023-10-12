import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import InvestGoal from "components/Main/Box/InvestGoal";
import QandA from "components/Main/Box/QandA";
import WhatInvestment from "components/Main/Box/WhatInvestment";
import TypeTitleBox from "components/Main/Box/TypeTitleBox";
import TypeCtsBox from "components/Main/Box/TypeCtsBox";
import StorageIcon from "@mui/icons-material/Storage";
import TypeCtsList from "components/Main/Box/TypeCtsList";
import { ReactComponent as LinkedinBoxIcon } from "assets/icon_linkedin_black.svg";
import { ReactComponent as TwitterBoxIcon } from "assets/icon_twitter_black.svg";
import { ReactComponent as FaceBookBoxIcon } from "assets/icon_facebook_black.svg";
import { ReactComponent as PrintButtonIcon } from "assets/icon_print.svg";
import ImageWebp from "assets/Image";
import InsightKeyBox from "components/Insight/Box/InsightKeyBox";
import InsightCtsBox from "components/Insight/Box/InsightCtsBox";

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

export default function MainTab({ TabValue }) {
  const [value, setValue] = React.useState(TabValue);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandMouseEnter = (index) => {
    setExpandedIndex(index);
  };
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const handleTabHover = (index) => {
    setHoveredTabIndex(index);
  };

  const handleTabLeave = () => {
    setHoveredTabIndex(null);
  };
  return (
    // InvestGoal , QandA , WhatInvestment , TypeTitleBox , TypeCtsBox

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

            position: "relative",
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
              onMouseEnter={() => handleTabHover(0)}
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
              onMouseEnter={() => handleTabHover(1)}
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
              onMouseEnter={() => handleTabHover(2)}
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
              onMouseEnter={() => handleTabHover(3)}
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
              onMouseEnter={() => handleTabHover(4)}
              {...a11yProps(4)}
            />
          </Tabs>
          <Box
            onMouseLeave={handleTabLeave}
            sx={{
              backgroundColor: "#FDEAE4",

              width: "100%",
              position: "absolute",
              zIndex: 20000,
              top: 50,
              left: 0,
            }}
          >
            {hoveredTabIndex === 0 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 420,
                  pt: 5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", mr: 12 }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 45,
                    }}
                  >
                    Our Portfolio
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    View All Portfolio
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    AI Portfolio
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Theme Portfolio
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Fundamental Portfolio
                  </Link>{" "}
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Variable Insurance Portfolio
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Compare Portfolio
                  </Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 45,
                    }}
                  >
                    Explore by Theme
                  </Link>

                  <Link
                    to="/machine"
                    style={{ fontSize: 14, color: "#202225" }}
                  >
                    Theme Machine
                  </Link>
                </Box>
              </Box>
            )}
            {hoveredTabIndex === 1 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 320,
                  pt: 5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 45,
                    }}
                  >
                    Insights
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    All Insight
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Weekly Commentary
                  </Link>
                  <Link
                    to="/insights"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Monthly Commentary
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Market Risk Monitor
                  </Link>{" "}
                </Box>
              </Box>
            )}
            {hoveredTabIndex === 2 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 270,
                  pt: 5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", mr: 12 }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 45,
                    }}
                  >
                    Plan
                  </Link>

                  <Link
                    to="/"
                    style={{
                      fontSize: 14,
                      color: "#202225",
                    }}
                  >
                    BETI
                  </Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mr: 12 }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                    }}
                  >
                    Do
                  </Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mr: 12 }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                    }}
                  >
                    See
                  </Link>
                </Box>
              </Box>
            )}
            {hoveredTabIndex === 3 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 270,
                  pt: 5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", mr: 12 }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 45,
                    }}
                  >
                    Content Series
                  </Link>
                  <Link
                    to="/"
                    style={{ fontSize: 14, color: "#202225" }}
                  ></Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                    }}
                  >
                    Product Series
                  </Link>
                </Box>
              </Box>
            )}
            {hoveredTabIndex === 4 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 300,
                  pt: 5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#202225",
                      marginBottom: 40,
                    }}
                  >
                    FEATURED
                  </Link>

                  <Link
                    to="/"
                    style={{
                      fontSize: 14,
                      color: "#202225",
                      marginBottom: 25,
                    }}
                  >
                    Goal Base Caculator
                  </Link>

                  <Link
                    to="/"
                    style={{
                      fontSize: 14,
                      color: "#202225",
                      marginBottom: 25,
                    }}
                  >
                    Portfolio Builder
                  </Link>

                  <Link
                    to="/"
                    style={{
                      fontSize: 14,
                      color: "#202225",
                      marginBottom: 25,
                    }}
                  >
                    ETF Screener
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
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
      {hoveredTabIndex !== null && (
        <div
          style={{
            position: "absolute",
            top: 400,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(33, 33, 33)",
            opacity: 0.57,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      )}
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
        {/* HeadLine */}
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
                Insights
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href="/material-ui/getting-started/installation/"
              >
                Global Monthly Commentary
              </Link>
            </Breadcrumbs>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 40,
                  color: "#202225",
                  fontWeight: 700,
                  m: "20px 0 30px 0px",
                }}
              >
                Ukraine war to cut growth, up inflation
              </Typography>
              <Box>
                <IconButton>
                  <LinkedinBoxIcon />
                </IconButton>
                <IconButton>
                  <TwitterBoxIcon />
                </IconButton>
                <IconButton>
                  <FaceBookBoxIcon />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <img
                src={ImageWebp.InsightMain}
                alt="insight_main"
                width={600}
                height={250}
              />
            </Box>
          </Box>
        </Box>
        {/* Content */}
        <Box sx={{ p: "20px 100px" }}>
          <Box
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #ccbcb8",
              borderTop: "1px solid #ccbcb8",
            }}
          >
            {/* Info */}
            <Box sx={{ display: "flex" }}>
              {/* Info - Profile */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  mr: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff9f5",
                  backgroundColor: "#127fb0",
                }}
              >
                c
              </Box>
              {/* Info - Name, Date */}
              <Box>
                <Typography
                  sx={{
                    color: "#202225",
                    fontSize: 14,
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Content Group
                </Typography>
                <Typography sx={{ color: "#b3a5a1", fontSize: 14 }}>
                  Global Monthly Commentary l April 2022
                </Typography>
              </Box>
            </Box>
            {/* Button */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Button - Print */}
              <Button
                sx={{
                  backgroundColor: "transparent",
                  fontSize: 14,
                  color: "#202225",
                  textTransform: "capitalize",
                }}
                startIcon={<PrintButtonIcon />}
              >
                Print Report
              </Button>
              {/* Button - Institute */}
              <Button
                sx={{
                  backgroundColor: "#fd5b26",
                  fontsize: 16,
                  color: "#fff",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "#fd5b26",
                  },
                }}
              >
                Dneuro Investment Institute
              </Button>
            </Box>
          </Box>

          {/*  */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "72%",
                // borderRight: "1px solid #ccbcb8",
                boxSizing: "border-box",
                pr: 6,
              }}
            >
              <Box sx={{ my: 7 }}>
                <Typography
                  sx={{ fontSize: 14, color: "#202225", lineHeight: "28px" }}
                >
                  The war in Ukraine has already caused a terrible human toll.
                  We see it extracting a heavy economic price as well, mostly
                  via higher energy costs. This is a major supply shock layered
                  onto an existing one, and we see it resulting in higher
                  inflation and lower growth, especially in the euro area. This
                  puts central banks in a blind: Trying to contain inflation
                  will be more costly, and they can't cushion the growth shock.
                  We prefer developed equities in this inflationary environment.
                </Typography>
              </Box>
              <Box sx={{ pr: 2 }}>
                <InsightCtsBox />
              </Box>
            </Box>
            <Box sx={{ width: "28%" }}>
              {/* Recommendations */}
              <Box sx={{ pt: 5, pb: 7 }}>
                <Typography
                  sx={{
                    color: "#202225",
                    fontWeight: "bold",
                    fontSize: 18,
                    pt: 2,
                    pb: 4,
                  }}
                >
                  Key Points
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <InsightKeyBox isWeekReview={false} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
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
