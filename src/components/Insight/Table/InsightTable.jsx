import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InsightColumnChart from "../Chart/InsightColumnChart";
import InsightColumnTypeChart from "../Chart/InsightColumnTypeChart";

function createData(name, commentary) {
  return { name, commentary };
}

const rows = [
  createData(
    "Equities",
    "We added to our strategic equities overweight in February. The early 2022 selloff created an opportunity for long-term investors as we see the combination of low real rates, strong growth and reasonable valuations as favorable for the asset class. Incorporating climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as tech and healthcare in benchmark indices. Tactically, we are overweight equities amid solid economic fundamentals and historically low real rates."
  ),
  createData(
    "Equities",
    "We added to our strategic equities overweight in February. The early 2022 selloff created an opportunity for long-term investors as we see the combination of low real rates, strong growth and reasonable valuations as favorable for the asset class. Incorporating climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as tech and healthcare in benchmark indices. Tactically, we are overweight equities amid solid economic fundamentals and historically low real rates."
  ),
  createData(
    "Equities",
    "We added to our strategic equities overweight in February. The early 2022 selloff created an opportunity for long-term investors as we see the combination of low real rates, strong growth and reasonable valuations as favorable for the asset class. Incorporating climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as tech and healthcare in benchmark indices. Tactically, we are overweight equities amid solid economic fundamentals and historically low real rates."
  ),
  createData(
    "Equities",
    "We added to our strategic equities overweight in February. The early 2022 selloff created an opportunity for long-term investors as we see the combination of low real rates, strong growth and reasonable valuations as favorable for the asset class. Incorporating climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as tech and healthcare in benchmark indices. Tactically, we are overweight equities amid solid economic fundamentals and historically low real rates."
  ),
  // Add other rows as needed
];

const InsightTable = () => {
  return (
    <Table sx={{ width: "100%" }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: "#fde0d7" }}>
        <TableRow>
          <TableCell>Asset</TableCell>
          <TableCell align="center">Strategic View</TableCell>
          <TableCell align="center">Tactical View</TableCell>
          <TableCell>Commentary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>
              <InsightColumnChart id={`columnChart${index}`} />
            </TableCell>
            <TableCell>
              <InsightColumnTypeChart id={`columnChartType${index}`} />
            </TableCell>
            <TableCell>{row.commentary}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InsightTable;
