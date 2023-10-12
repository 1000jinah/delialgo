import { Box, Typography } from "@mui/material";
import React from "react";
import ImageWebp from "assets/Image";
import { ReactComponent as ArrowDown } from "assets/icon_arrowdown_green_recconmendation.svg";
import { ReactComponent as ArrowUp } from "assets/icon_arrowdown_red_recconmendation.svg";
const recommendArray = [
  {
    src: ImageWebp.AWSIcon,
    alt: "Amazon AWS Icon",
    recTitle: "Amazon",
    recPercent: "-1.07%",
    recDescript:
      "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
  },
  {
    src: ImageWebp.NvidaIcon,
    alt: "Nvidia Icon",
    recTitle: "Nvidia",
    recPercent: "-0.28%",
    recDescript:
      "Nvidia Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California.",
  },
  {
    src: ImageWebp.MetaIcon,
    alt: "Meta Platforms Icon",
    recTitle: "Meta Platforms",
    recPercent: "+1.09%",
    recDescript:
      "Meta Platforms, Inc., formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.",
  },
  {
    src: ImageWebp.AxxonIcon,
    alt: "Exxon Mobill Corporation Icon",
    recTitle: "Exxon Mobill Corporation",
    recPercent: "-1.21%",
    recDescript:
      "ExxonMobil Corporation is an American multinational oil and gas corporation and the largest direct descendant of John D. Rockefeller's Standard Oil.",
  },
];

const CateRecBox = () => {
  return (
    <>
      {recommendArray.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "start", mb: 5, mr: 5 }}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: 38, height: 38, marginRight: 10 }}
          />
          <Box sx={{ px: 1, pr: 4, mr: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#202225",
                  fontWeight: "bold",
                  fontSize: 16,
                  lineHeight: 1,
                }}
              >
                {item.recTitle}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {item.recPercent.includes("+") ? (
                  <ArrowUp style={{ marginRight: 5 }} />
                ) : item.recPercent.includes("-") ? (
                  <ArrowDown style={{ marginRight: 5 }} />
                ) : (
                  ""
                )}
                <Typography
                  sx={{
                    color: item.recPercent.includes("+")
                      ? "#fd5b26"
                      : item.recPercent.includes("-")
                      ? "#12b032"
                      : "#202225",
                    fontSize: 14,
                    lineHeight: 1,
                  }}
                >
                  {item.recPercent}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: "#202225", lineHeight: "28px" }}>
                {item.recDescript}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CateRecBox;
