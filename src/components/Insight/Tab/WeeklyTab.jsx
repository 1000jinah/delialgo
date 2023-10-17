import React, { useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

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

export default function WeeklyTab({ TabValue }) {
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
                    to=""
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
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    View All Portfolio
                  </Link>
                  <Link
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    AI Portfolio
                  </Link>
                  <Link
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Theme Portfolio
                  </Link>
                  <Link
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Fundamental Portfolio
                  </Link>
                  <Link
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Variable Insurance Portfolio
                  </Link>
                  <Link
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Compare Portfolio
                  </Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to=""
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
                    to=""
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
                    to=""
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
                    to=""
                    style={{ fontSize: 14, color: "#202225", marginBottom: 25 }}
                  >
                    Market Risk Monitor
                  </Link>
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
                    to=""
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
                    to=""
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
                    to=""
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
                    to=""
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
                    to=""
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
                    to=""
                    style={{ fontSize: 14, color: "#202225" }}
                  ></Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    to=""
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
                    to=""
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
                    to=""
                    style={{
                      fontSize: 14,
                      color: "#202225",
                      marginBottom: 25,
                    }}
                  >
                    Goal Base Caculator
                  </Link>

                  <Link
                    to=""
                    style={{
                      fontSize: 14,
                      color: "#202225",
                      marginBottom: 25,
                    }}
                  >
                    Portfolio Builder
                  </Link>

                  <Link
                    to=""
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
        <Box sx={{ p: "20px 100px" }}>
          <div role="presentation" onClick={handleBreadCrumbsClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                style={{
                  color: "#B3A5A1",
                  fontSize: 13,
                }}
                href=""
              >
                Insights
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href="/insights/monthly"
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
      </Box>
    </Box>
  );
}
