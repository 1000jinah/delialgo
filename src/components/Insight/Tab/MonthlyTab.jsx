import React, { useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedinBoxIcon } from "assets/icon_linkedin_white.svg";
import { ReactComponent as TwitterBoxIcon } from "assets/icon_twitter_white.svg";
import { ReactComponent as FaceBookBoxIcon } from "assets/icon_facebook_white.svg";
import { ReactComponent as PrintButtonIcon } from "assets/icon_print.svg";
import ImageWebp from "assets/Image";
import InsightKeyBox from "../Box/InsightKeyBox";
import InsightWeekChart from "../Chart/InsightWeekChart";
import ColumnChartComponent from "../Chart/InsightBoxColumnChart";
import HeatMapChartComponent from "../Chart/InsightBoxMapChart";
import WeeklyDataCenter from "../Table/WeeklyDataTable";

function handleBreadCrumbsClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MonthlyTab() {
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const handleTabHover = (index) => {
    setHoveredTabIndex(index);
  };

  const handleTabLeave = () => {
    setHoveredTabIndex(null);
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
      {/* Top Menu */}
      <Box
        sx={{
          backgroundColor: "#FDEAE4",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            p: "12px 100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width:
                hoveredTabIndex === 0
                  ? 105
                  : hoveredTabIndex === 1
                  ? 80
                  : hoveredTabIndex === 2
                  ? 70
                  : hoveredTabIndex === 3
                  ? 90
                  : hoveredTabIndex === 4
                  ? 60
                  : "auto",
              borderBottom: hoveredTabIndex === null ? "none" : "2px solid",
              borderBottomColor: hoveredTabIndex === null ? "none" : "#FD5B26",
              bottom: 1,
              left:
                hoveredTabIndex === 0
                  ? 95
                  : hoveredTabIndex === 1
                  ? 227
                  : hoveredTabIndex === 2
                  ? 330
                  : hoveredTabIndex === 3
                  ? 428
                  : hoveredTabIndex === 4
                  ? 547
                  : 0,
            }}
          ></Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                textTransform: "capitalize",
                mr: 6,
                color: hoveredTabIndex === 0 ? "#FD5B26" : "#202225",
                fontSize: 16,
                fontWeight: 400,
              }}
              onMouseEnter={() => handleTabHover(0)}
            >
              Our Portfolio
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                mr: 6,
                color: hoveredTabIndex === 1 ? "#FD5B26" : "#202225",
                fontSize: 16,
                fontWeight: 400,
              }}
              onMouseEnter={() => handleTabHover(1)}
            >
              Insights
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                mr: 6,
                color: hoveredTabIndex === 2 ? "#FD5B26" : "#202225",
                fontSize: 16,
                fontWeight: 400,
              }}
              label="GOLP"
              onMouseEnter={() => handleTabHover(2)}
            >
              GOLP
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                mr: 6,
                color: hoveredTabIndex === 3 ? "#FD5B26" : "#202225",
                fontSize: 16,
                fontWeight: 400,
              }}
              onMouseEnter={() => handleTabHover(3)}
            >
              Education
            </Typography>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: hoveredTabIndex === 4 ? "#FD5B26" : "#202225",
                fontSize: 16,
                fontWeight: 400,
              }}
              onMouseEnter={() => handleTabHover(4)}
            >
              Tools
            </Typography>
          </Box>

          <Box
            onMouseLeave={handleTabLeave}
            sx={{
              backgroundColor: "#FDEAE4",
              borderTop: 1,

              borderColor: "divider",
              width: "100%",
              position: "absolute",
              zIndex: 20000,
              top: 48,
              left: 0,
            }}
          >
            {hoveredTabIndex === 0 && (
              <Box
                sx={{
                  p: hoveredTabIndex === null ? 0 : "20px 120px",
                  display: "flex",
                  minHeight: 400,
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
                    to="/insights/weekly"
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Weekly Commentary
                  </Link>
                  <Link
                    to="/insights/monthly"
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
          {/* Button - Join Us, Sign In */}
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
            top: 390,
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

      <Box>
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
                  <InsightKeyBox isWeekReview={true} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
