import React from "react";
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
import { ReactComponent as LinkedinBoxIcon } from "assets/icon_linkedin_white.svg";
import { ReactComponent as TwitterBoxIcon } from "assets/icon_twitter_white.svg";
import { ReactComponent as FaceBookBoxIcon } from "assets/icon_facebook_white.svg";
import { ReactComponent as PrintButtonIcon } from "assets/icon_print.svg";
import ImageWebp from "assets/Image";
import InsightKeyBox from "../Box/InsightKeyBox";
import InsightCtsBox from "../Box/InsightCtsBox";
import InsightWeekChart from "../Chart/InsightWeekChart";
import ColumnChartComponent from "../Chart/InsightBoxColumnChart";
import HeatMapChartComponent from "../Chart/InsightBoxMapChart";
import WeeklyDataCenter from "../Table/WeeklyDataTable";

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

  const tableData = {
    equities: [
      ["S&P 500", "3825", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
      ["Dow Jones 30", "31097", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
      ["Russell 2000", "4294", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
      [
        "Russell 1000 Growth",
        "1471",
        "-1.28",
        "1.06",
        "-19.11",
        "-10.15",
        "35.68",
      ],
      [
        "Russell 1000 Value",
        "892.70",
        "-1.28",
        "1.06",
        "-19.11",
        "-10.15",
        "35.68",
      ],
      ["MSCI EAFE", "1832", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
      ["MSCI EM", "992.84", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
      ["NASDAQ", "11128", "-1.28", "1.06", "-19.11", "-10.15", "35.68"],
    ],
    equitiesCharacter: [
      ["S&P 500", "1.06", "-19.11", "-10.15", "35.68"],
      ["Dow Jones 30", "1.06", "-19.11", "-10.15", "35.68"],
      ["Russell 2000", "1.06", "-19.11", "-10.15", "35.68"],
      ["Russell 1000 Growth", "1.06", "-19.11", "-10.15", "35.68"],
      ["Russell 1000 Value", "1.06", "-19.11", "-10.15", "35.68"],
      ["MSCI EAFE", "1.06", "-19.11", "-10.15", "35.68"],
      ["MSCI EM", "1.06", "-19.11", "-10.15", "35.68"],
      ["NASDAQ", "1.06", "-19.11", "-10.15", "35.68"],
    ],
    fixedIncome: [
      ["U.S. Aggregate", "3825", "-2.18", "1.06", "-19.11", "-10.15", "35.68"],
      [
        "U.S. Corporates",
        "31097",
        "-2.18",
        "1.06",
        "-19.11",
        "-10.15",
        "35.68",
      ],
      [
        "Municipals (10yr)",
        "4294",
        "-2.18",
        "1.06",
        "-19.11",
        "-10.15",
        "35.68",
      ],
      ["High Yield", "1471", "-2.18", "1.06", "-19.11", "-10.15", "35.68"],
    ],
    currencies: [
      ["$ per €", "1.06", "-19.11", "-10.15", "35.68"],
      ["$ per £", "1.06", "-19.11", "-10.15", "35.68"],
      ["¥ per $", "1.06", "-19.11", "-10.15", "35.68"],
    ],
    keyRates: [
      ["$ per €", "1.06", "-19.11", "-10.15", "35.68"],
      ["$ per £", "1.06", "-19.11", "-10.15", "35.68"],
      ["¥ per $", "1.06", "-19.11", "-10.15", "35.68"],
    ],
    // commodities: [
    //   ["Commodity 1", "3825", "-2.18", "1.06", "-19.11"],
    //   ["Commodity 2", "3825", "-2.18", "1.06", "-19.11"],
    //   ["Commodity 3", "3825", "-2.18", "1.06", "-19.11"],
    // ],
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
        Our Portfolio
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* HeadLine */}
        <Box
          sx={{
            p: "20px 100px",
            backgroundColor: "#202225",
            position: "relative",
          }}
        >
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
                Weekly Commentary
              </Link>
            </Breadcrumbs>
          </div>
          <Box
            sx={{
              p: "30px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: 5 }}>
              <Typography sx={{ color: "#fff9f5" }}>
                Insights l Weely Commentary
              </Typography>
              <Typography
                sx={{
                  fontSize: 40,
                  color: "#fff9f5",
                  fontWeight: 700,
                  m: "20px 0 30px 0px",
                }}
              >
                Weekly market commentary
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
            <Box sx={{}}>
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50%",
                }}
                src={ImageWebp.InsightMain}
                alt="insight_main"
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
              <Box sx={{ pr: 2 }}>
                {/* Thought of the week */}
                <Box sx={{ py: 5 }}>
                  {/* Directional Views */}
                  <Box
                    sx={{
                      width: "100%",
                      borderBottom: "1px solid #333",
                      pb: 3,
                    }}
                  >
                    {/* Directional Views */}
                    <Box
                      sx={{
                        mt: 4,
                        mb: 4,
                        display: "flex",
                        alignItems: "start",
                      }}
                    >
                      <Box sx={{ width: "45%" }}>
                        <Typography
                          sx={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202225",
                            pt: 2,
                            mb: 1.5,
                          }}
                        >
                          Thought of the week
                        </Typography>

                        <Typography
                          sx={{ fontSize: 12, mb: 3, color: "#202225" }}
                        >
                          U.S. June flash Markit PMIs
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: "#202225" }}>
                          With consumer sentiment at a record low level, these
                          data show that the economy is now seeing the impact of
                          higher commodity prices and higher interest rates on
                          demand.
                        </Typography>
                      </Box>
                      <Box sx={{ width: "55%", pl: 6 }}>
                        {/* Linechart */}
                        <InsightWeekChart />
                      </Box>
                      <Box></Box>
                    </Box>
                  </Box>
                  {/* S&P 500 RETURNS (%) */}
                  <Box
                    sx={{
                      width: "100%",
                      borderBottom: "1px solid #333",
                      pb: 3,
                    }}
                  >
                    {/* S&P 500 RETURNS (%) */}
                    <Box
                      sx={{
                        mt: 4,
                        mb: 4,
                        display: "flex",
                        alignItems: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202225",
                            pt: 2,
                            mb: 1.5,
                          }}
                        >
                          S&P 500 RETURNS (%)
                        </Typography>

                        <Box>
                          {/*  S&P 500 RETURNS (%) */}
                          <ColumnChartComponent />
                        </Box>
                      </Box>
                      <Box></Box>
                    </Box>
                  </Box>
                  {/* Style Returns (%) */}
                  <Box
                    sx={{
                      width: "100%",
                      borderBottom: "1px solid #333",
                      pb: 3,
                    }}
                  >
                    {/* S&P 500 RETURNS (%) */}
                    <Box
                      sx={{
                        mt: 4,
                        mb: 4,
                        display: "flex",
                        alignItems: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#202225",
                            pt: 2,
                            mb: 1.5,
                          }}
                        >
                          Style Returns (%)
                        </Typography>

                        <Box>
                          {/*  Style Returns (%) */}
                          <HeatMapChartComponent />
                        </Box>
                      </Box>
                      <Box></Box>
                    </Box>
                  </Box>
                  {/* Weekly Data Center */}
                  <Box>
                    <WeeklyDataCenter table={tableData} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "28%" }}>
              {/* Week in review */}
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
                  Week in review
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <InsightKeyBox  isWeekReview={true}/>
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
