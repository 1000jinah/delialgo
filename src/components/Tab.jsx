import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, Breadcrumbs, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import InvestGoal from "components/InvestGoal";
import QandA from "components/QandA";
import WhatInvestment from "components/WhatInvestment";
import TypeTitleBox from "components/TypeTitleBox";
import TypeCtsBox from "components/TypeCtsBox";

import StorageIcon from "@mui/icons-material/Storage";
import DeleteIcon from "@mui/icons-material/Delete";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                color: "#127FB0",
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
                backgroundColor: "#127FB0",
                ":hover": {
                  backgroundColor: "#127FB0",
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

              m: "0 100px",
            }}
          >
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Big data"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Connectivity"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Digital Content"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
          </Box>
          <Box
            sx={{
              display: "flex",

              m: "0 100px",
            }}
          >
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Fintech"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
            typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Mobility"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
            typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Robotics"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
          </Box>
          {/* People & Demographics */}
          <TypeTitleBox typetitle="People & Demographics" />
          <Box
            sx={{
              display: "flex",

              m: "0 100px",
            }}
          >
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Health & Wellness"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="New Consumer"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
          </Box>
          {/* Physical Envrionment */}
          <TypeTitleBox typetitle="Physical Envrionment" />
          <Box
            sx={{
              display: "flex",

              m: "0 100px",
            }}
          >
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Infrastructure Development"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="Climate Change"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
          </Box>
          {/* Sustainability */}
          <TypeTitleBox typetitle="Sustainability" />
          <Box
            sx={{
              display: "flex",

              m: "0 100px",
            }}
          >
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="ESG"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
            <TypeCtsBox
              typeCtsIcon={<StorageIcon />}
              typeCtsTitle="TCFD"
              typeCtsDescript="This theme focuses on companies that process, store, and analyze data by providing data mining. trans-formation, and visualization, and predictive analytics tools."
            />
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
