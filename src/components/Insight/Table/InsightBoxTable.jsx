import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InsightColorBox from "../Box/InsightColorBox";

function createData(name, colorOne, colorTwo, commentary) {
  return { name, colorOne, colorTwo, commentary };
}

const rows = [
  createData(
    "United States",
    "",
    <InsightColorBox backgroundColor="#27757b" />,
    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "Euro Area",
    "",
    "",
    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "Japan",
    <InsightColorBox backgroundColor="#eea45f" />,
    "",

    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "Emerging Markets",
    "",
    <InsightColorBox backgroundColor="#27757b" />,
    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "Asia ex-Japan",
    "",
    "",
    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "UK",
    "",
    <InsightColorBox backgroundColor="#27757b" />,
    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
  createData(
    "Momentum",
    <InsightColorBox backgroundColor="#eea45f" />,
    "",

    "We are overweight on U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps geared to an expected cyclical upswing in 2021."
  ),
];
const rowss = [
  createData(
    "United States",
    <InsightColorBox backgroundColor="#eea45f" />,
    "",
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "Treasury Inflation-Protected Securities",
    "",
    "",
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "German Bunds",
    "",
    "",

    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "Euro area peripherals",
    "",
    "",
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "Global Investment Grade",
    <InsightColorBox backgroundColor="#eea45f" />,
    "",
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "Global high yield",
    "",
    <InsightColorBox backgroundColor="#27757b" />,
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
  createData(
    "Emerging market hard currency",
    "",
    "",
    "We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade policies."
  ),
];

const InsightBoxTable = ({ useRows }) => {
  const data = useRows ? rows : rowss;
  return (
    <Table sx={{ width: "100%" }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: "#fde0d7" }}>
        <TableRow>
          <TableCell>Asset</TableCell>
          <TableCell width="180px" align="center">
            Underweight
          </TableCell>
          <TableCell width="180px" align="center">
            Overweight
          </TableCell>
          <TableCell>Commentary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell width="180px" align="center">
              {row.colorOne}
            </TableCell>
            <TableCell width="180px" align="center">
              {row.colorTwo}
            </TableCell>
            <TableCell sx={{ lineHeight: 1.75 }}>{row.commentary}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InsightBoxTable;
