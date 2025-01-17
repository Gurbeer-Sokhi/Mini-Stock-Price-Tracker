import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PricesTable({ prop }) {
  const selectedStock = prop
    ? prop.data?.find((s) => s?.symbol === prop?.stock.symbol)
    : null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "skyblue",
                color: "yellow",
                fontStyle: "bold",
                font: "bold",
              }}
            >
              Stocks
            </TableCell>
            <TableCell
              align="right"
              sx={{
                bgcolor: "skyblue",
                color: "yellow",
                fontStyle: "bold",
                font: "bold",
              }}
            >
              Symbol
            </TableCell>
            <TableCell
              align="right"
              sx={{
                bgcolor: "skyblue",
                color: "yellow",
                fontStyle: "bold",
                font: "bold",
              }}
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={selectedStock?.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{ bgcolor: "black", color: "red" }}
            >
              {selectedStock?.name}
            </TableCell>
            <TableCell align="right" sx={{ bgcolor: "black", color: "red" }}>
              {selectedStock?.symbol}
            </TableCell>
            <TableCell align="right" sx={{ bgcolor: "black", color: "red" }}>
              {selectedStock?.price}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
