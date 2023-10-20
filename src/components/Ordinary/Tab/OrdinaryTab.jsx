import React, { useState } from "react";
import { Box, Button, Breadcrumbs, Typography, Input } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as SearchCategory } from "assets/icon_search_white.svg";
import { ReactComponent as HelpIcon } from "assets/icon_question.svg";
import OrdinarySelect from "components/Ordinary/Box/OrdinarySelect";
import OrdinaryTitleBox from "components/Ordinary/Box/OrdinaryTitleBox";
import OrdinaryCtsList from "components/Ordinary/Box/OrdinaryCtsList";
import TopMenu from "components/Menu";

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
      <TopMenu
        hoveredTabIndex={hoveredTabIndex}
        handleTabHover={handleTabHover}
        handleTabLeave={handleTabLeave}
      />
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
                href=""
              >
                Our Portfolio
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href=""
              >
                Theme Machine
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href=""
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
