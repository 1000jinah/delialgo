import React, { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Pagination } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { CheckBoxOutlineBlank, RemoveSharp } from "@mui/icons-material";

function createData(name, risk, year1, year3, year5, ytd, ratio, fee) {
  return {
    name,
    risk,
    year1,
    year3,
    year5,
    ytd,
    ratio,
    fee,
  };
}
const rowName = [
  "S&P 500",
  "Semiconductor",
  "iBonds Dec 2024 Term Corporate",
  "Vanguard Short-Term Corporate Bond Index Fund",
  "MBS",
  "Select Dividend",
  "WisdomTree U.S. Quality Dividend Growth Fund",
  "First Trust Senior Loan Fund",
  "FTSE RAFI US 1500 Small-Mid",
  "7-10 Year Treasury Bond",
  "Russell 1000 Index",
  "Russell 1000 Index",
  "Russell 1000 Index",
  "Russell 1000 Index",
  "Russell 1000 Index",
];
const rows = [
  createData(
    `iShares Core ${rowName[0]} ETF`, // S&P 500
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `iShares ${rowName[1]} ETF`, // Semiconductor
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `iShares ${rowName[2]} ETF`, // iBonds Dec 2024 Term Corporate
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `${rowName[3]}`, // Vanguard Short-Term Corporate Bond Index Fund
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `iShares ${rowName[4]} ETF`,
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ), // MBS
  createData(
    `iShares ${rowName[5]} ETF`, // Select Dividend
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `${rowName[6]}`, // WisdomTree U.S. Quality Dividend Growth Fund
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `${rowName[7]}`, // First Trust Senior Loan Fund
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `Invesco ${rowName[8]} ETF`, // FTSE RAFI US 1500 Small-Mid
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    10.3,
    2.14
  ),
  createData(
    `iShares ${rowName[9]} ETF`, // 7-10 Year Treasury Bond
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
  createData(
    `Vanguard ${rowName[10]} Fund`, // Russell 1000 Index
    3,
    2.86,
    7.25,
    10.96,
    10.3,
    0.03,
    2.14
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Portfolio Name",
  },
  {
    id: "risk",
    numeric: null,
    disablePadding: false,
    label: "Risk Level",
  },
  {
    id: "1y",
    numeric: true,
    disablePadding: false,
    label: "1Y(%)",
  },
  {
    id: "3y",
    numeric: true,
    disablePadding: false,
    label: "3Y(%)",
  },
  {
    id: "5y",
    numeric: true,
    disablePadding: false,
    label: "5Y(%)",
  },
  {
    id: "ytd",
    numeric: true,
    disablePadding: false,
    label: "YTD(%)",
  },
  {
    id: "ratio",
    numeric: true,
    disablePadding: false,
    label: "Sharpe Ratio",
  },
  {
    id: "fee",
    numeric: true,
    disablePadding: false,
    label: "Advisory Fee(%)",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{
              width: 18,
              height: 18,
              borderRadius: 0,
              mr: 3,
              position: "relative",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              backgroundColor:
                rowCount > 0 && numSelected === rowCount
                  ? "#FD5B26"
                  : numSelected > 0 && numSelected < rowCount
                  ? "#FD5B26"
                  : "#fde0d7",

              ":hover": {
                backgroundColor:
                  rowCount > 0 && numSelected === rowCount
                    ? "#FD5B26"
                    : numSelected > 0 && numSelected < rowCount
                    ? "#FD5B26"
                    : "#fde0d7",
              },
            }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            icon={<CheckBoxOutlineBlank sx={{ display: "none" }} />} // 체크박스가 비어 있는 상태의 아이콘
            checkedIcon={<CheckIcon sx={{ color: "#fff", fontSize: 16 }} />} // 체크된 상태의 아이콘
            indeterminateIcon={
              <RemoveSharp sx={{ color: "#fff", fontSize: 16 }} />
            }
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={
              headCell.numeric === true
                ? "right"
                : headCell.numeric === false
                ? "left"
                : "center"
            }
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontSize: 12, color: "#b3a5a1", whiteSpace: "nowrap" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({ onCheckboxClick, selectedColor }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.name);
      setSelected(newSelected);
      onCheckboxClick(newSelected);
    } else {
      setSelected([]);
      onCheckboxClick([]);
    }
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);

    // Call the parent component's callback function
    onCheckboxClick(newSelected, selectedIndex);
  };

  // const selectedNames = [];
  // const selectedColors = [];
  //   // 선택된 이름과 색상을 배열에 추가
  //   selectedNames.length = 0; // 기존 데이터 초기화
  //   selectedColors.length = 0; // 기존 데이터 초기화

  //   newSelected.forEach((selectedName) => {
  //     const index = rows.findIndex((row) => row.name === selectedName);
  //     if (index !== -1) {
  //       selectedNames.push(selectedName);
  //       selectedColors.push(selectedColor[index]);
  //     }
  //   });

  //   console.log("Selected Names:", selectedNames);
  //   console.log("Selected Colors:", selectedColors);

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <TableContainer>
        <Table
          sx={{ minWidth: 750, backgroundColor: "#fdeae4" }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            selectedColor={selectedColor} // 여기에 selectedColor prop 추가
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              const color = selectedColor[index]; // Use selected color or default
              const riskCount = Math.min(row.risk, 5); // risk 값이 5보다 클 경우 최대 5로 제한
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={isItemSelected}
                  sx={{
                    cursor: "pointer",
                    "&.MuiTableRow-root.Mui-selected": {
                      backgroundColor: "transparent",
                    },
                    "&.MuiTableRow-root.MuiTableRow-hover:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    {/* 체크박스 대신 다른 요소 */}
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        mr: 3,
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        boxSizing: "border-box",
                        position: "relative",
                        backgroundColor: "#fde0d7",
                      }}
                    >
                      {isItemSelected ? (
                        <Box
                          sx={{
                            backgroundColor: color, // Check if selectedColor is defined
                            width: 11,
                            height: 11,
                            position: "absolute",
                            top: 3.5,
                            right: 3.5,
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    sx={{ fontSize: 12, color: "#202225" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: 12, color: "#202225" }}>
                    {/* {row.risk} */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: 12,
                            height: 12,
                            background:
                              i < Math.min(row.risk, 5) ? "#fd5b26" : "#fde0d7", // 마지막 원소까지는 흰색, 나머지는 주황색
                            borderRadius: "50%",
                            marginLeft: i > 0 ? 0.5 : 0, // Add margin between circles
                          }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.year1}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.year3}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.year5}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.ytd}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.ratio}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, color: "#202225" }}
                    align="right"
                  >
                    {row.fee}
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        component="div"
        sx={{
          backgroundColor: "#fdeae4",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        count={Math.ceil(rows.length / rowsPerPage)}
        page={page + 1}
        onChange={(event, page) => setPage(page - 1)}
      />

      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
