import React from "react";
import {
  Grid,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const renderTable = (headers, data, cellWidths) => (
  <TableContainer sx={{ backgroundColor: "transparent" }} component={Paper}>
    <Table>
      <TableHead sx={{ backgroundColor: "#fde0d7" }}>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell
              sx={{
                borderBottom: "none",
                width: cellWidths[index],
                textAlign: cellWidths[index] === null ? "left" : "right",
                
              }}
              key={index}
            >
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {row.map((cell, index) => (
              <TableCell
                sx={{
                  borderBottom: "none",
                  width: cellWidths[index],
                  textAlign: cellWidths[index] === null ? "left" : "right",
                  fontSize:14,
                }}
                key={index}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const WeeklyDataCenter = ({ table }) => {
  const cellWidths = [
    null,
    "115px",
    "115px",
    "115px",
    "115px",
    "115px",
    "115px",
  ]; // 각 셀에 대한 너비 설정
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#202225",
            pt: 5,
          }}
        >
          Weekly Data Center
        </Typography>
      </Grid>

      {/* Equities */}
      <Grid item xs={12}>
        <Typography
          sx={{ my: 4, fontSize: 16, color: "#127fb0", fontWeight: "bold" }}
        >
          Equities
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ overflow: "auto", marginBottom: "40px", padding: "0px" }}
      >
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Index Return (%)
        </Typography>
        {renderTable(
          ["Equities", "Level", "1 Week", "QTD", "YTD", "1 Year", "3-yr.Cum"],
          table.equities,
          cellWidths
        )}
      </Grid>
      <Grid item xs={12} style={{ overflow: "auto" }}>
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Index Characteristics (%)
        </Typography>
        {renderTable(
          ["Equities", "NTM P/E", "P/B", "Div.Yid", "Mkt.Cap (bn)"],
          table.equitiesCharacter,
          cellWidths
        )}
      </Grid>

      {/* Fixed Income */}
      <Grid item xs={12}>
        <Typography
          sx={{ my: 4, fontSize: 16, color: "#127fb0", fontWeight: "bold" }}
        >
          Fixed Income
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ overflow: "auto" }}>
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Index Return (%)
        </Typography>
        {renderTable(
          [
            "Fixed Income",
            "Yield",
            "1 Week",
            "QTD",
            "YTD",
            "1 Year",
            "3-yr.Cum",
          ],
          table.fixedIncome,
          cellWidths
        )}
      </Grid>

      {/* Currencies */}
      <Grid item xs={12}>
        <Typography
          sx={{ my: 4, fontSize: 16, color: "#127fb0", fontWeight: "bold" }}
        >
          Currencies
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ overflow: "auto" }}>
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Levels
        </Typography>
        {renderTable(
          [
            "Currencies",
            "07/01/2022",
            "07/01/2022",
            "12/31/2021",
            "12/31/2021",
          ],
          table.currencies,
          cellWidths
        )}
      </Grid>

      {/* Key Rates */}
      <Grid item xs={12}>
        <Typography
          sx={{ my: 4, fontSize: 16, color: "#127fb0", fontWeight: "bold" }}
        >
          Key Rates
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ overflow: "auto" }}>
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Levels (%)
        </Typography>
        {renderTable(
          [
            "Key Rates",
            "07/01/2022",
            "07/01/2022",
            "12/31/2021",
            "12/31/2021",
          ],
          table.keyRates,
          cellWidths
        )}
      </Grid>

      {/* Commodities */}
      {/* <Grid item xs={12}>
        <Typography
          sx={{ my: 4, fontSize: 16, color: "#127fb0", fontWeight: "bold" }}
        >
          Commodities
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ overflow: "auto" }}>
        <Typography
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "#202225",
            fontSize: 12,
          }}
        >
          Levels
        </Typography>
        {renderTable(
          ["Commodities", "07/01/2022", "12/31/2021", "07/01/2021"],
          table.commodities,
          cellWidths
        )} 
      </Grid>*/}
    </Grid>
  );
};

export default WeeklyDataCenter;
