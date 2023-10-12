import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ArrowDropDown, ArrowDropUp, Remove } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

function createData(ticker, name, assetClass, sector, price, weight) {
  return {
    ticker,
    name,
    assetClass,
    sector,
    price,
    weight,
  };
}

const initialRows = [
  createData(
    "MSFT",
    "Microsoft Corp",
    "Equity",
    "Information Technology",
    "+334.27",
    "13.378"
  ),
  createData(
    "AAPL",
    "Apple Inc.",
    "Equity",
    "Information Technology",
    "+175.52",
    "12.103"
  ),

  createData(
    "NVDA",
    "NVIDIA Corp",
    "Equity",
    "Information Technology",
    "+390.29",
    "6.766"
  ),
  createData(
    "AMZN",
    "Amazon.com Inc",
    "Equity",
    "Information Technology",
    "+120.59",
    "6.673"
  ),
  createData(
    "META",
    "Meta Platforms Inc",
    "Equity",
    "Information Technology",
    "+263.62",
    "4.102"
  ),
  createData(
    "GOOGL",
    "Alphabet Inc",
    "Equity",
    "Information Technology",
    "+124.84",
    "4.101"
  ),
  createData(
    "GOOG",
    "Alphabet Inc",
    "Equity",
    "Information Technology",
    "+125.66",
    "4.058"
  ),
  createData(
    "TSLA",
    "Tesla Inc",
    "Equity",
    "Information Technology",
    "+194.04",
    "3.314"
  ),
  createData(
    "AVGO",
    "Broadcom Inc",
    "Equity",
    "Information Technology",
    "-811.05",
    "2.283"
  ),
  createData(
    "PEP",
    "PepsiCo Inc",
    "Equity",
    "Information Technology",
    "-183.57",
    "1.778"
  ),
  createData(
    "COST",
    "Costco Wholesale Corp",
    "Equity",
    "Information Technology",
    "-506.99",
    "1.583"
  ),
  createData(
    "AMD",
    "Advanced Micro Devices Inc",
    "Equity",
    "Information Technology",
    "+127.38",
    "1.44"
  ),
];

const rows = [...new Set(initialRows.map((row) => JSON.stringify(row)))].map(
  (rowString) => JSON.parse(rowString)
);

export default function HoldingsTable() {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortBy(property);
  };
  const sortedRows = [...rows].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
  const uniqueKeys = new Set();
  return (
    <Table sx={{ minWidth: 650, my: 3,"& .MuiTableCell-root":{
      borderBottom:"1px solid transparent"
    } }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: "#fd5b26" }}>
        <TableRow>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            onClick={() => handleSort("ticker")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Ticker
              {sortBy === "ticker" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            align="left"
            onClick={() => handleSort("name")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Name
              {sortBy === "name" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            align="left"
            onClick={() => handleSort("assetClass")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Asset Class
              {sortBy === "assetClass" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            align="left"
            onClick={() => handleSort("sector")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Sector
              {sortBy === "sector" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            onClick={() => handleSort("price")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Price
              {sortBy === "price" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
          <TableCell
            sx={{ color: "#fff9f5", p: 1 }}
            onClick={() => handleSort("weight")}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Weight (%)
              {sortBy === "weight" && sortOrder === "asc" ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUp />
              )}
            </Box>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedRows.map((row) => {
          if (!uniqueKeys.has(row.name)) {
            // Check if the name is already in the set
            uniqueKeys.add(row.name); // Add the name to the set
            return (
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
                  {row.ticker}
                </TableCell>
                <TableCell sx={{ color: "#202225", p: 1 }} align="left">
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: "#202225", p: 1 }} align="left">
                  {row.assetClass}
                </TableCell>
                <TableCell sx={{ color: "#202225", p: 1 }} align="left">
                  {row.sector}
                </TableCell>
                <TableCell sx={{ color: "#202225", p: 1 }} align="right">
                  {row.price.includes("+") ? (
                    <ArrowDropDown style={{ color: "green" }} />
                  ) : row.price.includes("-") ? (
                    <ArrowDropUp style={{ color: "#cc0000" }} />
                  ) : (
                    <Remove />
                  )}
                  {row.price.replace("+", "").replace("-", "")}
                </TableCell>
                <TableCell sx={{ color: "#202225", p: 1 }} align="right">
                  {row.weight}
                </TableCell>
              </TableRow>
            );
          } else {
            return null; // Skip rendering if the name is a duplicate
          }
        })}
      </TableBody>
      <TableCell colSpan={6} sx={{ p: 0, pt: 5 }}>
        <Button
          sx={{
            width: "100%",
            borderTop: "1px solid #ccbcb8",
            textTransform: "capitalize",
            fontSize: 16,
            p: 2,
            color: "#202225",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Show More
        </Button>
      </TableCell>
    </Table>
  );
}
