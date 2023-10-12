import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
const QandA = () => {
  return (
    <Box>
      {/* Q&A */}
      <Box>
        <Box
          sx={{
            height: 327,
            p: "0 100px",
            width: "auto",
            backgroundColor: "#FD5B26",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", mr: 2 }}>
            <Typography
              sx={{ fontSize: 16, color: "#fff", fontWeight: 400, p: 0, m: 0 }}
            >
              Searching for themes you want to invest
            </Typography>
            <Typography
              sx={{
                fontSize: 36,
                color: "#fff",
                fontWeight: 700,
                m: "10px 0 40px 0",
              }}
            >
              Intellignet Financial Q&amp;A
            </Typography>
            <Typography
              sx={{ fontSize: 16, color: "#fff", fontWeight: 400, p: 0, m: 0 }}
            >
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud
              exercitation.
            </Typography>
          </Box>
          {/* QandA_search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-end",
              ".MuiInput-root:before": {
                display: "none",
              },
              ".MuiInput-root:after": {
                display: "none",
              },
            }}
          >
            <Input
              sx={{
                width: "100%",
                height: 28,
                background: "#fff",
                mr: "10px",
                border: "none",
                p: "10px",
              }}
              type="text"
              placeholder="Do not use keywords, but full fledged questions."
            />
            <Button
              sx={{
                backgroundColor: "#FDE0D7",
                color: "#FD5B26",
                border: "none",
                p: "4px 8px",
                borderRadius: "5px",
                ":hover": {
                  backgroundColor: "#FDE0D7",
                  color: "#FD5B26",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QandA;
