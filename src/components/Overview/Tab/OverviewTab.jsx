import React, { useState } from "react";
import { Box, Button, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OverviewBondTab from "components/Overview/Tab/OverviewBondTab";
import TopMenu from "components/Menu";

function handleBreadCrumbsClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MachineTab() {
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
                Our Portfolio
              </Link>
              <Link
                underline="hover"
                style={{ color: "#B3A5A1", fontSize: 13 }}
                href=""
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
          <OverviewBondTab />
        </Box>
      </Box>
    </Box>
  );
}
