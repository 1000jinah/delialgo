import { Box, Input, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as SearchCategory } from "assets/icon_search_gray.svg";
import CategoryCtsBox from "components/Category/Box/CategoryCtsBox";
import ImageWebp from "assets/Image";
import CateRecBox from "components/Category/Box/CateRecBox";
import { Link } from "react-router-dom";
import CateTitleBox from "components/Category/Box/CateTitleBox";
import { ReactComponent as CleanIcon } from "assets/icon_exit.svg";

const CategoryCts = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
  };
  const recentlyViewArray = [
    {
      src: ImageWebp.AredoIcon,
      alt: "Laredo Petroleum Icon",
      company: "Laredo Petroleum",
    },
    {
      src: ImageWebp.GagIcon,
      alt: "Jonson and Jonson Icon",
      company: "Jonson and Jonson",
    },
    { src: ImageWebp.AppleIcon, alt: "Apple Icon", company: "Apple" },
    {
      src: ImageWebp.MetaIcon,
      alt: "Meta Platforms Icon",
      company: "Meta Platforms",
    },
    { src: ImageWebp.WalmartIcon, alt: "Walmart Icon", company: "Walmart" },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderTop: 1,

          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            mt: 2,
            p: "0px 100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Who uses fracking?"
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
              border: "1px solid #ccbcb8",
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

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "67%",
            borderRight: "1px solid #ccbcb8",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ p: "0 50px", pr: 2, pb: 7 }}>
            <CateTitleBox
              ordinarytitle="Showing Results (157)"
              borderBottomStyle="1px solid #ccbcb8"
            />
            <CategoryCtsBox />
            <CategoryCtsBox />
            <CategoryCtsBox />
            <CategoryCtsBox />
            <CategoryCtsBox />
          </Box>
        </Box>
        <Box sx={{ width: "33%" }}>
          {/* Recommendations */}
          <Box sx={{ pt: 6, px: 4, pb: 7 }}>
            <Typography
              sx={{
                color: "#202225",
                fontWeight: "bold",
                fontSize: 21,
                pt: 2,
                pb: 4,
              }}
            >
              Recommendations
            </Typography>
            <Box sx={{ mb: 5 }}>
              <CateRecBox />
            </Box>
            <Link style={{ color: "#127fb0", fontSize: 14 }}>
              See more recommendation
            </Link>
          </Box>
          {/* Recently Viewed */}
          <Box sx={{ pt: 6, px: 4 }}>
            <Typography
              sx={{
                color: "#202225",
                fontWeight: "bold",
                fontSize: 21,
                pt: 2,
                pb: 4,
              }}
            >
              Recently Viewed
            </Typography>
            <Box sx={{ mb: 5, mr: "70px", ml: 0 }}>
              {recentlyViewArray.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", mb: 4, alignItems: "center" }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: 38, height: 38, marginRight: 10 }}
                  />
                  <Typography
                    sx={{ color: "#202225", fontWeight: "bold", fontSize: 16 }}
                  >
                    {item.company}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Link style={{ color: "#127fb0", fontSize: 14 }}>See all</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCts;
