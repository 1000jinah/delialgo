import React, { useState } from "react";
import { Box, Button, Breadcrumbs, Typography, Input } from "@mui/material";
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

export default function OrdinaryTab() {
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const handleTabHover = (index) => {
    setHoveredTabIndex(index);
  };

  const handleTabLeave = () => {
    setHoveredTabIndex(null);
  };
  return (
    // InvestGoal , QandA , WhatInvestment , TypeTitleBox , TypeCtsBox

    <Box
      sx={{ width: "100%", height: "100%", minHeight: "calc(100vh - 70px)" }}
    >
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
        <Box sx={{ p: "20px 100px", backgroundColor: "#FDEAE4" }}>
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
          <Box sx={{ mb: 6 }}>
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
      </Box>
    </Box>
  );
}
