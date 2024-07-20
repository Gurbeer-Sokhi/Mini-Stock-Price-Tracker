import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function PricesTable({ prop }) {
  const [stock, setStock] = useState();
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
          {prop?.data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ bgcolor: "black", color: "red" }}
                onClick={(e) => {
                  e.preventDefault();
                  setStock(row.name);
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ bgcolor: "black", color: "red" }}>
                {row.symbol}
              </TableCell>
              <TableCell align="right" sx={{ bgcolor: "black", color: "red" }}>
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
