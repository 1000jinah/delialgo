import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

function createData(
  name,
  commentaryOne,
  commentaryTwo,
  commentaryThree,
  commentaryFour
) {
  return {
    name,
    commentaryOne,
    commentaryTwo,
    commentaryThree,
    commentaryFour,
  };
}

const rows = [
  createData(
    "01. The new normal",
    "We see the U.S. and UK leading the developed world’s economic restart – with the euro area catching up - powered by pent-up demand and sky-high excess savings. The huge growthspurt will be transitory, in our view. This is because a restart is not a recovery: the more activity restarts now, the less there will be to restart later.",
    "Fed officials in June projected higher inflation and moved up the lift-off in policy rates to 2023. We believe this confirmed our new nominal theme – that interest rates will rise more slowly than in the past in response to higher inflation – as the Fed’s acknowledgement of rising price pressures has not translated into projections for significantly higher interest rates any time soon.",
    "We expect short-term rates will stay anchored near zero, supporting equity valuations. The Fed could be more willing to lean against rising long-term yields than the past, yet the direction of travel over the next few years is clearly towards higher long-term yields. We see important limits on the level of yields the global economy can withstand.",
    "Market implication: We favor inflation-linked bonds amid inflationary pressures in the medium term. Tactically we prefer to take risk in equities over credit amid low rates and tight spreads."
  ),
  createData(
    "02. Globalization rewired",
    "Covid-19 has accelerated geopolitical transformations such as a bipolar U.S.-China world order and a rewiring of global supply chains, placing greater weight on resilience.",
    "The Biden administration is engaging in strategic competition with China, particularly on technology, and has criticized Beijing on human rights. Pending legislation in the U.S. would direct large-scale investment to meet the China challenge. We see a case for greater exposure to China-related assets for potential returns and diversification and view them as core strategic holdings that are distinct from EM exposures.",
    "We expect persistent inflows to Asian assets as we believe many global investors remain underinvested and China’s weight in global indexes grows. Risks to China-exposed assets include China’s high debt levels and U.S.-China conflicts, but we believe investors are compensated for these risks.",
    "Market implication: Strategically we favor deliberate country diversification and above-benchmark China exposures. Tactically we like Asia ex-Japan equities, and see UK equities as an inexpensive, cyclical exposure."
  ),
  createData(
    "03. Turbocharged transformations",
    "The pandemic has added fuel to pre-existing structural trends such as an increased focus on sustainability, rising inequality within and across nations, and the dominance of e-commerce at the expense of traditional retail.",
    "The pandemic has focused attention on underappreciated sustainability-related factors and supply chain resilience.",
    "It has also accelerated “winner takes all” dynamics that have led to the strong performance of a handful of tech giants in recent years. We see tech as having long-term structural tailwinds despite its increased valuations, yet it could face challenges from higher corporate taxes and tighter regulation under a united Democratic government.",
    "The pandemic has heightened the focus on inequalities within and across countries due to the varying quality of public health infrastructure – particularly across EMs and access to healthcare. We see a risk of social unrest."
  ),
];

const InsightThemeTable = () => {
  return (
    <Box
      sx={{
        ".MuiTableCell-root": {
          borderBottom: "none",
        },
      }}
    >
      {rows.map((row, index) => (
        <Table key={index} sx={{ width: "100%" }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#fde0d7" }}>
            <TableRow>
              <TableCell> {row.name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ fontSize: 14, lineHeight: 1.75 }}
                component="th"
                scope="row"
              >
                {row.commentaryOne}
                <br /> <br />
                {row.commentaryTwo}
                <br /> <br />
                {row.commentaryThree}
                <br /> <br />
                {row.commentaryFour}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </Box>
  );
};

export default InsightThemeTable;
