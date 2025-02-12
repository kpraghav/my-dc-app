import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const initialRows = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com", country: "USA" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com", country: "Canada" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com", country: "UK" }
];

const DataGridExample = () => {
  const [expandedRows, setExpandedRows] = useState({});

  // Toggle row expansion
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Define columns dynamically based on expanded state
  const getColumns = (row) => {
    const baseColumns = [
      {
        field: "expand",
        headerName: "",
        width: 50,
        renderCell: (params) => (
          <IconButton size="small" onClick={() => toggleRow(params.row.id)}>
            {expandedRows[params.row.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )
      },
      { field: "name", headerName: "Name", width: 150 },
      { field: "age", headerName: "Age", width: 100 }
    ];

    const expandedColumns = [
      { field: "email", headerName: "Email", width: 200 },
      { field: "country", headerName: "Country", width: 150 }
    ];

    return expandedRows[row.id] ? [...baseColumns, ...expandedColumns] : baseColumns;
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      {initialRows.map((row) => (
        <DataGrid
          key={row.id}
          rows={[row]}
          columns={getColumns(row)}
          hideFooter
          autoHeight
        />
      ))}
    </div>
  );
};

export default DataGridExample;
