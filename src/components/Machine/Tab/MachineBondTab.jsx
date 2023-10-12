import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageWebp from "assets/Image";
import { ReactComponent as SearchCategory } from "assets/icon_search_gray.svg";
import { ReactComponent as CleanIcon } from "assets/icon_exit.svg";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  InputAdornment,
  Input,
  Button,
} from "@mui/material";
import MachineBarChart from "components/Machine/Chart/MachineBarChart";
import MachineCtsBox from "components/Machine/Box/MachineCtsBox";
import { HelpOutlineSharp } from "@mui/icons-material";
import ReturnTab from "./ReturnTab";
import DarkLineChart from "components/Overview/Chart/OverviewChart";
import DoughtChart from "../Chart/HoldingsChart";
import DoughtCharts from "../Chart/HoldingCharts";
import HoldingsBox from "../Box/HoldingsBox";
import HoldingsTable from "../Table/HoldingsTable";
// import CompareChart from "components/Machine/MachineChart";

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

export default function MachineBondTab() {
  const [value, setValue] = React.useState(0);
  const [inputValue, setInputValue] = useState("");

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
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ width: 650, mb: 3 }}>
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
        <Box>
          <MachineCtsBox />
        </Box>
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
              label="Summary"
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
              label="Performance"
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
              label="Holdings"
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
              label="Historical"
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                border: "1px solid #ccbcb8",
                borderBottom: "none",
                textTransform: "capitalize",
                color: "#fd5b26",
                backgroundColor: value === 4 ? "#fd5b26" : "transparent",
                fontSize: 16,
                fontWeight: 400,
                "&.Mui-selected": { color: "#fff9f5" },
              }}
              label="Literature"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Box sx={{ py: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Summarry
              </Typography>
            </Box>
          </Box>
          {/* Charts */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                pt: 4,
                width: "50%",
                mr: 6,
              }}
            >
              <Typography
                sx={{
                  pb: 1,
                  fontSize: 18,
                  color: "#202225",
                  width: "100%",
                  borderBottom: "1px solid #707070",
                }}
              >
                Portfolio Design
              </Typography>
              <Box sx={{ pt: 4 }}>
                <Typography
                  sx={{ fontSize: 14, color: "#202225", lineHeight: "30px" }}
                >
                  Apply Short-term themed strategies. Targets attractive
                  risk-adjusted returns, stock dicersification and inflation
                  hedges through tactical buying strategies.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                pt: 4,
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  pb: 1,
                  color: "#202225",
                  width: "100%",
                  borderBottom: "1px solid #707070",
                }}
              >
                Portfolio Design
              </Typography>
              <Box sx={{ pt: 4 }}>
                <Typography
                  sx={{ fontSize: 14, color: "#202225", lineHeight: "30px" }}
                >
                  ETF provides opportunity exploratory access to popular
                  investment topics and unconventional innovations. Implement a
                  systematic, model-based process that takes into account the
                  current level of market risk as well as the momentum of asset
                  prices when building a portfolio.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 4,
              width: "50%",
              pr: 2.5,
            }}
          >
            <Box
              sx={{
                pb: 1,
                borderBottom: "1px solid #707070",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#202225",
                }}
              >
                Key Facts
              </Typography>
              <Typography sx={{ fontSize: 12, color: "#ccbcb8" }}>
                As of Mar 30, 2022
              </Typography>
            </Box>
            <Box sx={{ pt: 4 }}>
              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Risk Level
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Risk Level
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Investment Target
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Theme · Trend
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Asset Group
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Global Equity · Bonds
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Advisory Fee
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  1.20%
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Market
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  US
                </Typography>
              </Box>

              <Box
                sx={{
                  py: 1,
                  borderBottom: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  Inception
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                  }}
                >
                  2000-1-1
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Tip */}
        <Box
          sx={{
            display: "flex",

            p: 1.5,
            fontSize: 12,
            width: "100%",
            border: "1px solid #127fb0",
            color: "#127fb0",
          }}
        >
          This information must be preceded or accompanied by a current
          prospectus. For standardized performance, please see the Performance
          section above.
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ py: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Performance
              </Typography>
            </Box>
          </Box>
          {/* Charts */}

          <Box
            sx={{
              pt: 4,

              mr: 6,
            }}
          >
            <Typography
              sx={{
                pb: 1,
                fontSize: 18,
                color: "#202225",
                width: "100%",
              }}
            >
              Historical NAVs
            </Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: "#082a4d" }}>
            <DarkLineChart />
          </Box>
        </Box>
        {/* Tip */}
        <Box
          sx={{
            display: "flex",

            p: 1.5,
            fontSize: 12,
            width: "100%",
            border: "1px solid #127fb0",
            color: "#127fb0",
            lineHeight: "30px",
          }}
        >
          The Hypothetical Growth of $10,000 chart reflects a hypothetical
          $10,000 investment and assumes reinvestment of dividends and capital
          gains. Fund expenses, including management fees and other expenses
          were deducted. The performance quoted represents past performance and
          does not guarantee future results. Investment return and principal
          value of an investment will fluctuate so that an investor’s shares,
          when sold or redeemed, may be worth more or less than the original
          cost. Current performance may be lower or higher than the performance
          quoted, and numbers may reflect small variances due to rounding.
          Standardized performance and performance data current to the most
          recent month end may be found in the Performance section.
        </Box>
        <Box
          sx={{
            pt: 4,
            width: "50%",
            pr: 2.5,
          }}
        >
          <Box
            sx={{
              pb: 1,
              borderBottom: "1px solid #707070",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                color: "#202225",
              }}
            >
              Growth of Hypothetical Performance
            </Typography>
            <HelpOutlineSharp sx={{ fontSize: 20, color: "#ccbcb8" }} />
          </Box>
          <Box sx={{ pt: 4 }}>
            <Box
              sx={{
                py: 1,
                borderBottom: "1px solid #707070",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                Annualized Yield
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                Annualized Yield
              </Typography>
            </Box>
            <Box
              sx={{
                py: 1,
                borderBottom: "1px solid #707070",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                Standard Deviation (3y)
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                4.39
              </Typography>
            </Box>
            <Box
              sx={{
                py: 1,
                borderBottom: "1px solid #707070",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                Number of Holdings
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#202225",
                }}
              >
                8
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ pt: 12, pb: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
            >
              Returns
            </Typography>
          </Box>
          {/* Charts */}

          <Box
            sx={{
              pt: 4,
            }}
          >
            <ReturnTab />
          </Box>
        </Box>
        {/* Tip */}
        <Box
          sx={{
            display: "flex",

            p: 1.5,
            fontSize: 12,
            width: "100%",
            border: "1px solid #127fb0",
            color: "#127fb0",
          }}
        >
          The performance quoted represents past performance and does not
          guarantee future results. Investment return and principle value of an
          investment will fluctuate so that an investor's shares, when sold or
          redeemed, may be worth more or less than the original cost. Currnet
          performance may be lower or higher than the performance quoted.
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Historical */}
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Historical
              </Typography>
            </Box>
          </Box>
          {/* Charts */}
          <Box
            sx={{
              pt: 4,
              pb: 1,
              width: "100%",
              borderBottom: "1px solid #707070",
            }}
          >
            <Typography sx={{ fontSize: 18, color: "#202225" }}>
              Exposure Breackdown
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <DoughtChart sx={{ width: "50%" }} />
          <DoughtCharts sx={{ width: "50%" }} />
        </Box>
        <HoldingsBox />
        <HoldingsTable />
        {/* Tip */}
        <Box
          sx={{
            display: "flex",
            lineHeight: "24px",
            p: 1.5,
            fontSize: 12,
            width: "100%",
            border: "1px solid #127fb0",
            color: "#127fb0",
          }}
        >
          The values shown for “market value,” “weight,” and “notional value”
          (the “calculated values”) are based off of a price provided by a
          third-party pricing vendor for the portfolio holding and do not
          reflect the impact of systematic fair valuation (“the vendor price”).
          The vendor price is not necessarily the price at which the Fund values
          the portfolio holding for the purposes of determining its net asset
          value (the “valuation price”). Additionally, where applicable, foreign
          currency exchange rates with respect to the portfolio holdings
          denominated in non-U.S. currencies for the valuation price will be
          generally determined as of the close of business on the New York Stock
          Exchange, whereas for the vendor price will be generally determined as
          of 4 p.m. London. The calculated values may have been different if the
          valuation price were to have been used to calculate such values. The
          vendor price is as of the most recent date for which a price is
          available and may not necessarily be as of the date shown above.
          Please see the “Determination of Net Asset Value” section of each
          Fund’s prospectus for additional information on the Fund’s valuation
          policies and procedures.
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box sx={{ py: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Historical
              </Typography>
            </Box>
          </Box>
          {/* Charts */}
          <Box
            sx={{
              pt: 4,
              pb: 1,
              width: "100%",
              borderBottom: "1px solid #707070",
            }}
          >
            <Typography sx={{ fontSize: 18, color: "#202225" }}>
              Recommended Portfolio (Past)
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FDEAE4",
              pt: 2,
            }}
          >
            <MachineBarChart />
          </Box>
          {/* Tip */}
          <Box
            sx={{
              display: "flex",

              p: 1.5,
              fontSize: 12,
              width: "100%",
              border: "1px solid #127fb0",
              color: "#127fb0",
            }}
          >
            ※ETFs provide an opportunity-searching approach to popular
            investment topics and breakthrough innovations. Target medium to
            high school (5) risk levels with a historical portfolio volatility
            level of 10% vs. mid to late (15-19%).
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box sx={{ py: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: 300 }}>
              <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#202225" }}
              >
                Literature
              </Typography>
            </Box>
          </Box>
          {/* Box */}

          <Box
            sx={{
              width: "100%",
              pt: 4,
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 380,
                mr: 8,
                border: "1px solid #ccbcb8",
                position: "relative",
                backgroundColor: "#fde0d7",
                p: 3,
              }}
            >
              <Typography sx={{ fontSize: 16, color: "#fd5b26", mb: 1 }}>
                May 16 2023
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#202225" }}>
                2023 Portfolio Product List
              </Typography>
              <Box sx={{ position: "absolute", bottom: -20, left: 20 }}>
                <img
                  src={ImageWebp.PDFImg}
                  alt="pdf_image"
                  width={300}
                  height={300}
                />
                <Button
                  sx={{
                    color: "#202225",
                    fontSize: 12,
                    textTransform: "capitalize",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    position: "absolute",
                    bottom: 30,
                    right: 25,
                    "& .MuiButton-root:focus": {
                      backgroundColor: "rgba(255,255,255,0.64)",
                    },
                    ":hover": {
                      backgroundColor: "rgba(255,255,255,0.64)",
                    },
                  }}
                >
                  Read PDF
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 380,
                border: "1px solid #ccbcb8",
                position: "relative",
                backgroundColor: "#fde0d7",
                p: 3,
              }}
            >
              <Typography sx={{ fontSize: 16, color: "#fd5b26", mb: 1 }}>
                May 16 2023
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#202225" }}>
                2023 Portfolio Product List
              </Typography>
              <Box sx={{ position: "absolute", bottom: -20, left: 20 }}>
                <img
                  src={ImageWebp.PDFImg}
                  alt="pdf_image"
                  width={300}
                  height={300}
                />
                <Button
                  sx={{
                    color: "#202225",
                    fontSize: 12,
                    textTransform: "capitalize",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    position: "absolute",
                    bottom: 30,
                    right: 25,
                    "& .MuiButton-root:focus": {
                      backgroundColor: "rgba(255,255,255,0.64)",
                    },
                    ":hover": {
                      backgroundColor: "rgba(255,255,255,0.64)",
                    },
                  }}
                >
                  Read PDF
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
