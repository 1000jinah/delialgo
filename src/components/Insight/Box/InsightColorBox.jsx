const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const InsightColorBox = styled(Box)(({ backgroundColor }) => ({
  backgroundColor: backgroundColor || "#fff", // Use the provided backgroundColor prop, or default to "#fff"
  width: 25,
  height: 25,
  margin: "10px 0 40px 60px",
}));

export default InsightColorBox;
