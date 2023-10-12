import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  Tabs,
  Tab,
  Input,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as SearchCategory } from "assets/icon_search_white.svg";
import { ReactComponent as HelpIcon } from "assets/icon_question.svg";
import OrdinarySelect from "components/Ordinary/Box/OrdinarySelect";
import OrdinaryTitleBox from "components/Ordinary/Box/OrdinaryTitleBox";
import OrdinaryCtsList from "components/Ordinary/Box/OrdinaryCtsList";

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

export default function OrdinaryTab() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href="/material-ui/getting-started/installation/"
              >
                ETF Finder
              </Link>
            </Breadcrumbs>
          </div>
          <Box>
            <Typography
              sx={{
                fontSize: 36,
                color: "#202225",
                fontWeight: 700,
                m: "65px 0 30px 0px",
              }}
            >
              Thick Beyond Ordinary
            </Typography>
            <Box sx={{ width: "45%" }}>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#202225",
                  fontWeight: 400,
                  m: 0,
                }}
              >
                Thematic Growth ETFs look beyond traditional geographic or
                sector exposures, targeting companies poised to benefit from
                structural shifts in disruptive technology, people and
                demographics, and physical environment.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 6,
            p: "20px 100px",
            backgroundColor: "#082a4d",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input
            placeholder="Enter category name"
            startAdornment={<SearchCategory style={{ marginRight: 15 }} />}
            sx={{
              width: "100%",
              color: "#fff",
              "&.MuiInput-root:before": {
                borderBottom: "0px solid transparent",
                content: "none",
              },
              "&.MuiInput-root:after": {
                borderBottom: "0px solid transparent",
              },
            }}
          />
          <Button
            sx={{
              border: "none",
              borderRadius: "5px",
              textTransform: "capitalize",
              p: "8px",
              fontSize: 12,
              fontWeight: 400,
              backgroundColor: "#FD5B26",
              color: "#fff",
              lineHeight: "normal",
              m: "0px",
              ":hover": {
                backgroundColor: "#FD5B26",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ p: "20px 100px", backgroundColor: "#fff9f5" }}>
          {/* Disruptive Technology */}
          <OrdinaryTitleBox ordinarytitle="Disruptive Technology" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "0 100px",
              mb: 6,
            }}
          >
            {/* typeCtsBoxHover */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#202225",
                  fontSize: 30,
                  mb: 3,
                  textTransform: "uppercase",
                }}
              >
                Big Data
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <HelpIcon style={{ marginRight: 14 }} />
                <OrdinarySelect
                  topSelectOption_fir="Cybersecurity"
                  topSelectOption_sec="Korean"
                  topSelectOption_thr="Chinese"
                  topSelectOption_for="Janpanese"
                  topSelectColor={"#fd3f01"}
                  topSelectBorderStyle={"1px solid #fd3f01"}
                  topSelectIcon="1"
                />
              </Box>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#202225",
                  fontWeight: 400,
                  m: 0,
                  mb: 3,
                }}
              >
                This theme focuses on companies that process, store, and analyze
                data by providing data mining, trans-formation, and
                visualization, and predictive analytics tools.
              </Typography>
            </Box>
            <>
              <OrdinaryCtsList
                ordinaryCtsListTicker="AIQ"
                ordinaryCtsListTitle="Arificial Intelligence & Technology ETF"
                ordinaryCtsListPercent="$ 25.08"
                ordinaryCtsListIncrese="+3.7%"
              />
              <OrdinaryCtsList
                ordinaryCtsListTicker="AIQ"
                ordinaryCtsListTitle="Arificial Intelligence & Technology ETF"
                ordinaryCtsListPercent="$ 25.08"
                ordinaryCtsListIncrese="+3.7%"
              />
              <OrdinaryCtsList
                ordinaryCtsListTicker="AIQ"
                ordinaryCtsListTitle="Arificial Intelligence & Technology ETF"
                ordinaryCtsListPercent="$ 25.08"
                ordinaryCtsListIncrese="+3.7%"
              />
              <OrdinaryCtsList
                ordinaryCtsListTicker="AIQ"
                ordinaryCtsListTitle="Arificial Intelligence & Technology ETF"
                ordinaryCtsListPercent="$ 25.08"
                ordinaryCtsListIncrese="+3.7%"
              />
              <OrdinaryCtsList
                ordinaryCtsListTicker="AIQ"
                ordinaryCtsListTitle="Arificial Intelligence & Technology ETF"
                ordinaryCtsListPercent="$ 25.08"
                ordinaryCtsListIncrese="+3.7%"
              />
            </>
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
