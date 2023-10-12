import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  name,
  ytd,
  month1,
  month3,
  month6,
  year1,
  year3,
  year5,
  year10,
  incept
) {
  return {
    name,
    ytd,
    month1,
    month3,
    month6,
    year1,
    year3,
    year5,
    year10,
    incept,
  };
}

const rows = [
  createData(
    "Total Return (%)",
    28.06,
    2.02,
    2.03,
    2.04,
    2.12,
    3.02,
    5.24,
    7.11,
    2.02
  ),
  createData(
    "Benchmark (%)",
    32.51,
    1.88,
    1.91,
    1.93,
    2.05,
    4.27,
    7.06,
    12.02,
    1.88
  ),
];

export default function ReturnTable() {
  return (
    <Table sx={{ minWidth: 650, my: 3 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: "#fd5b26" }}>
        <TableRow>
          <TableCell sx={{ color: "#fff9f5", p: 1 }}></TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            YTD
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            1 Month
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            3 Month
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            6 Month
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            1 Year
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            3 Year
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            5 Year
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            10 Year
          </TableCell>
          <TableCell sx={{ color: "#fff9f5", p: 1 }} align="right">
            Incept.
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              ":hover": {
                backgroundColor: "#fff9f5",
                cursor:"pointer",
                boxShadow: " 0 10px 15px 0 rgba(204, 188, 184, 0.45)",
              },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{ color: "#202225", p: 1 }}
            >
              {row.name}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.ytd}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.month1}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.month3}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.month6}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.year1}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.year3}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.year5}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.year10}
            </TableCell>
            <TableCell sx={{ color: "#202225", p: 1 }} align="right">
              {row.incept}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
