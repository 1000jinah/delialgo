import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as SearchCategory } from "assets/icon_search_gray.svg";
import { ReactComponent as CleanIcon } from "assets/icon_exit.svg";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  InputAdornment,
  Input,
  IconButton,
} from "@mui/material";
import CompareChart from "../Chart/CompareChart";

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

export default function CompareFundTab() {
  const [value, setValue] = React.useState(1);
  const [inputValue, setInputValue] = useState("");
  const fundsData = [
    {
      ticker: "IVV",
      name: "iShares Core S&P 500 ETF",
      dataList: [
        "17.72",
        "-7.06",
        "1.34",
        "9.93",
        "14.08",
        "10.86",
        "11.76",
        "15.28",
      ],
    },
    {
      ticker: "ASHR",
      name: "Xtrackers Harvest CSI 300 China A-Shares ETF",

      dataList: [
        "-8.03",
        "-7.06",
        "5.22",
        "9.92",
        "14.13",
        "10.89",
        "11.86",
        "15.27",
      ],
    },
  ];
  const dateList = [
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
    "3 Year",
    "5 Year",
    "10 Years",
    "MAX",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
  };
  return (
    // InvestGoal , QandA , WhatInvestment , TypeTitleBox , TypeCtsBox

    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#ccbcb8",
          ".MuiTabs-indicator": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
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
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 0 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Objective"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 1 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Return Series(NAV)"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                borderRight: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 2 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Expected Return"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 3 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Asset Class / Sub Asset Class"
              {...a11yProps(3)}
            />
          </Tabs>
          <Box sx={{ width: 650 }}>
            {/* Input */}
            <Input
              placeholder="Enter a fund name, partial name or ticker."
              startAdornment={
                <InputAdornment position="start">
                  <SearchCategory style={{ marginRight: 15 }} />
                </InputAdornment>
              }
              endAdornment={
                inputValue && (
                  <InputAdornment position="end">
                    <CleanIcon
                      onClick={handleClearClick}
                      style={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                )
              }
              value={inputValue}
              onChange={handleInputChange}
              sx={{
                width: "100%",
                px: 2,
                backgroundColor: "#fff9f5",
                // border: "1px solid #ccbcb8",
                borderRadius: "5px",
                color: "#202225",
                "&.MuiInput-root:before": {
                  borderBottom: "0px solid transparent",
                  content: "none",
                },
                "&.MuiInput-root:after": {
                  borderBottom: "0px solid transparent",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Insights
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ py: 5 }}>
          {/* Ticker */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #ccbcb8",
            }}
          >
            <Box sx={{ width: 300, px: 3 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Funds
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {fundsData.map((fund, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    p: 2.5,
                    mr: 1,
                    ":last-child": {
                      mr: 0,
                    },
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: "#fff9f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: 18,
                        mr: 1,
                        fontWeight: "bold",
                        color: "#fd5b26",
                      }}
                    >
                      {fund.ticker}
                    </Typography>
                    <Typography sx={{ fontSize: 16, color: "#202225" }}>
                      {fund.name}
                    </Typography>
                  </Box>
                  <IconButton
                    sx={{
                      "&.MuiIconButton-root": {
                        color: "#b3a5a1",
                        fill: "#b3a5a1",
                      },
                    }}
                  >
                    <CleanIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Charts */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300, px: 3, py: 4 }}>
              <Typography sx={{ fontSize: 18, color: "#b3a5a1" }}>
                Trailing total returns
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff9f5",
              }}
            >
              <CompareChart />
            </Box>
          </Box>
          {/* List */}

          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                px: 3,
                width: 300,
                flexDirection: "column",
              }}
            >
              {dateList.map((value, index) => (
                <Box sx={{ py: 1.3 }} key={index}>
                  <Typography sx={{ fontSize: 18, color: "#b3a5a1" }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              {fundsData &&
                fundsData.length > 0 &&
                fundsData.map((value, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      mr: 1,
                      ":last-child": {
                        mr: 0,
                      },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {value.dataList.map((item, itemIndex) => (
                      <Box
                        key={itemIndex}
                        sx={{
                          width: "100%",
                          px: 2.5,
                          py: 1.5,
                          backgroundColor: "#fff9f5",
                          textAlign: "right",
                          borderTop: "1px solid #fdeae4",
                          ":last-child": {
                            borderBottom: "1px solid #fdeae4",
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: 16, color: "#202225" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ))}
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
