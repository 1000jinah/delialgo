import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab, Divider, Button } from "@mui/material";
import InsightLineChart from "../Chart/InsightLineChart";
import TemperatureChart from "../Chart/InsightBarChart";
import InsightTable from "../Table/InsightTable";
import InsightBoxTable from "../Table/InsightBoxTable";
import InsightThemeTable from "../Table/InsightThemeTable";
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

export default function InsightCtsBox() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              label="Latest Commentary"
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
              label="Market Updates"
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
              label="Asset Class Views"
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
              label="2022 Investment Themes"
              {...a11yProps(3)}
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
            <Box sx={{ width: 300, mb: 4 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#202225",
                  mb: 1.5,
                }}
              >
                Energy Shock
              </Typography>

              <Typography sx={{ fontSize: 12, color: "#202225" }}>
                U.S. and European energy prices, 2021 - 2022
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: "#082a4d", mb: 4 }}>
            <InsightLineChart />
          </Box>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#fde0d7",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Box
              sx={{
                fontSize: 14,
                lineHeight: "24px",
                color: "#202225",
                position: "absolute",
                backgroundColor: "#fde0d7",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                pr: "20px",
                py: 2,
                mb: 5,
                zIndex: 1000,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fde0d7",
                  position: "absolute",
                  left: -100,
                  top: 0,
                  zIndex: 0,
                  width: "100px",
                  height: "100%",
                }}
              ></Box>
              Sources: Dneuro Investment Institute with data from Refinitiv
              DataStream. March 2022. The lines show the changes in price of
              different commodities since July 1, 2021. European natural gas
              price based on European Energy Derivatives Exchange futures. U.S.
              based on MYM-Henry Hub Gas futures price.
            </Box>
          </Box>

          <Box sx={{ pt: 12 }}>
            {/* Historical */}
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ my: 8 }}>
                <Divider sx={{ backgroundColor: "#ccbcb8" }} />
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 2,
                  }}
                >
                  Key Takeaways
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: "24px",
                    color: "#202225",
                    mb: 2,
                  }}
                >
                  The correlations chart shows a range of assets as represented
                  by their respective indexes. These assets include bonds and
                  equities of various kinds, and others such as commodities. In
                  times of stress, returns of different asset classes tend to be
                  highly correlated, implying a lack of diversification.
                </Typography>
                <Typography
                  sx={{ fontSize: 14, lineHeight: "24px", color: "#202225" }}
                >
                  Correlations are generally medium to high. The correlation of
                  EM and investment grade debt with DM government debt is on the
                  high side, showing the duration risk from any push higher in
                  long-term yields. That has been reflected in total returns
                  this year. At the same time, the typically negative
                  correlation in returns between DM equities and government debt
                  is closer to zero now, suggesting reduced diversification for
                  muti-asset portfolios.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Tip */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ py: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Assets in Review */}
            <Box
              sx={{
                pt: 4,
                width: "48%",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                  Assets in Review
                </Typography>

                <Typography sx={{ fontSize: 12, color: "#202225" }}>
                  Selected asset performance, 2022 year-to-date return and range
                </Typography>
              </Box>
              <Box>
                <TemperatureChart />
              </Box>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  borderRadius: 0,
                  p: 1,
                  border: "1px solid #127fb0",
                  color: "#127fb0",
                }}
              >
                Download the Full Commentary
              </Button>
            </Box>
            {/* Week Ahead */}
            <Box
              sx={{
                pt: 4,
                width: "48%",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                  Week Ahead
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <Typography
                      variant="span"
                      sx={{
                        mr: 2,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#202225",
                      }}
                    >
                      March 15
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#202225" }}>
                      China industrial output and retail sales; UK unemployment
                      data
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <Typography
                      variant="span"
                      sx={{
                        mr: 2,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#202225",
                      }}
                    >
                      March 16
                    </Typography>{" "}
                    <Typography sx={{ fontSize: 14, color: "#202225" }}>
                      Fed monetary policy meeting; Brazil rate decision
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <Typography
                      variant="span"
                      sx={{
                        mr: 2,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#202225",
                      }}
                    >
                      March 17
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#202225" }}>
                      UK, Indonesia and Turkey rate decisions
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <Typography
                      variant="span"
                      sx={{
                        mr: 2,
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#202225",
                      }}
                    >
                      March 18
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#202225" }}>
                      Russia rate decision
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#202225",
                    mb: 1,
                    lineHeight: "24px",
                  }}
                >
                  The U.S. Federal Reserve is expected to raise its policy rate
                  for the first time since the Covid shock. The Bank of England
                  (BoE) is set to announce its third hike, and a slew of
                  emerging market central banks are set to hold rates or raise
                  them. Both the Fed and BoE are keen to normalize policy rates
                  back to pre-Covid settings. We don't expect them to go beyond
                  that to try to squash high inflation as the costs to growth
                  and employment would be too high. We see central banks living
                  with inflation.
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#202225" }}>
                  Read our past weekly commentaries
                  <Typography
                    variant="span"
                    sx={{
                      ml: 1,
                      fontWeight: "bold",
                      fontSize: 12,
                      color: "#202225",
                      textDecoration: "underline",
                    }}
                  >
                    Here
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: 8, pb: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#202225",
                  mb: 2,
                }}
              >
                Market Backdrop
              </Typography>

              <Typography
                sx={{ fontSize: 14, lineHeight: "24px", color: "#202225" }}
              >
                Crude oil prices shot up to 14-year highs on supply concerns but
                then suffered their biggest one-day decline in almost two years.
                Equities followed suit, rebounding from plumbing new 2022 lows
                earlier in the week. The ECB said it would phase out asset
                purchases in the third quarter and left the door open for a rate
                increase this year. Peripheral bond spreads widened.
              </Typography>
            </Box>
            <Box sx={{ my: 8 }}>
              <Divider sx={{ backgroundColor: "#ccbcb8" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#202225",
                  mb: 2,
                }}
              >
                Key Takeaways
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#202225",
                  mb: 2,
                }}
              >
                The correlations chart shows a range of assets as represented by
                their respective indexes. These assets include bonds and
                equities of various kinds, and others such as commodities. In
                times of stress, returns of different asset classes tend to be
                highly correlated, implying a lack of diversification.
              </Typography>
              <Typography
                sx={{ fontSize: 14, lineHeight: "24px", color: "#202225" }}
              >
                Correlations are generally medium to high. The correlation of EM
                and investment grade debt with DM government debt is on the high
                side, showing the duration risk from any push higher in
                long-term yields. That has been reflected in total returns this
                year. At the same time, the typically negative correlation in
                returns between DM equities and government debt is closer to
                zero now, suggesting reduced diversification for muti-asset
                portfolios.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ py: 5 }}>
          {/* Asset Class Views */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            {/* Directional Views */}
            <Box
              sx={{
                pt: 4,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                  Directional Views
                </Typography>

                <Typography sx={{ fontSize: 12, color: "#202225" }}>
                  Strategic (long-term) and tactical (6-12 month) views on broad
                  asset classes, March 2022
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#eea45f",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography
                    style={{
                      fontSize: 14,
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Underweight
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#27757b",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: 14, marginLeft: "10px" }}>
                    Overweight
                  </Typography>
                </Box>
                <InsightTable />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: 5 }}>
          {/* Asset Class Views */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            {/* Equities */}
            <Box
              sx={{
                pt: 4,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                  Equities
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#eea45f",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography
                    style={{
                      fontSize: 14,
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Underweight
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#27757b",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: 14, marginLeft: "10px" }}>
                    Overweight
                  </Typography>
                </Box>
                <InsightBoxTable useRows={true} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: 5 }}>
          {/* Asset Class Views */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            {/* Fixed Income */}
            <Box
              sx={{
                pt: 4,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                  Fixed Income
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#eea45f",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography
                    style={{
                      fontSize: 14,
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Underweight
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#27757b",
                      width: 16,
                      height: 16,
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: 14, marginLeft: "10px" }}>
                    Overweight
                  </Typography>
                </Box>
                <InsightBoxTable useRows={false} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#fde0d7",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <Box
            sx={{
              fontSize: 14,
              lineHeight: "24px",
              color: "#202225",
              position: "absolute",
              backgroundColor: "#fde0d7",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              pr: 2,
              py: 2,
              mb: 5,
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fde0d7",
                position: "absolute",
                left: -100,
                top: 0,
                zIndex: 0,
                width: "100px",
                height: "100%",
              }}
            ></Box>
            Past performance is not a reliable indicator of current or future
            results. Indexes are unmanaged and do not account for fees. It is
            not possible directly is an index.
            <br />
            Note: Views are from a U.S. dollar perspective. This material
            represents an assessment of the market environment at a specific
            time and is not intended to be a forecast or guarantee of future
            results. This information should not be relied upon as investment
            advice regarding any particular fund, strategy or security.
          </Box>
        </Box>
        <Box sx={{ pt: 18, pb: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ my: 8 }}>
              <Divider sx={{ backgroundColor: "#ccbcb8" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#202225",
                  mb: 2,
                }}
              >
                Key Takeaways
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#202225",
                  mb: 2,
                }}
              >
                The correlations chart shows a range of assets as represented by
                their respective indexes. These assets include bonds and
                equities of various kinds, and others such as commodities. In
                times of stress, returns of different asset classes tend to be
                highly correlated, implying a lack of diversification.
              </Typography>
              <Typography
                sx={{ fontSize: 14, lineHeight: "24px", color: "#202225" }}
              >
                Correlations are generally medium to high. The correlation of EM
                and investment grade debt with DM government debt is on the high
                side, showing the duration risk from any push higher in
                long-term yields. That has been reflected in total returns this
                year. At the same time, the typically negative correlation in
                returns between DM equities and government debt is closer to
                zero now, suggesting reduced diversification for muti-asset
                portfolios.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Box sx={{ py: 5 }}>
          {/* 2022 Investment Themes */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            {/* Investment Themes */}
            <Box
              sx={{
                pt: 4,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#202225",
                    mb: 1.5,
                  }}
                >
                Investment Themes
                </Typography>

               
              </Box>
              <Box>
                
                <InsightThemeTable />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pb: 5 }}>
          {/* Historical */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ mb: 8 ,mt:4}}>
              <Divider sx={{ backgroundColor: "#ccbcb8" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#202225",
                  mb: 2,
                }}
              >
                Key Takeaways
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#202225",
                  mb: 2,
                }}
              >
                The correlations chart shows a range of assets as represented by
                their respective indexes. These assets include bonds and
                equities of various kinds, and others such as commodities. In
                times of stress, returns of different asset classes tend to be
                highly correlated, implying a lack of diversification.
              </Typography>
              <Typography
                sx={{ fontSize: 14, lineHeight: "24px", color: "#202225" }}
              >
                Correlations are generally medium to high. The correlation of EM
                and investment grade debt with DM government debt is on the high
                side, showing the duration risk from any push higher in
                long-term yields. That has been reflected in total returns this
                year. At the same time, the typically negative correlation in
                returns between DM equities and government debt is closer to
                zero now, suggesting reduced diversification for muti-asset
                portfolios.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
