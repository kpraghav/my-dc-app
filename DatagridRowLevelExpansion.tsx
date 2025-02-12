import React, { useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Define TypeScript interface for row data
interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
  country: string;
}

// Sample Data
const initialRows: RowData[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com", country: "USA" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com", country: "Canada" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com", country: "UK" }
];

const DataGridExample: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expansion for all rows (show/hide extra columns)
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Define base columns (always visible)
  const baseColumns: GridColDef[] = [
    {
      field: "expand",
      headerName: "",
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <IconButton size="small" onClick={toggleExpand}>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      )
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 100 }
  ];

  // Define expandable columns (shown only when expanded)
  const extraColumns: GridColDef[] = [
    { field: "email", headerName: "Email", width: 200 },
    { field: "country", headerName: "Country", width: 150 }
  ];

  // Merge columns dynamically
  const columns: GridColDef[] = isExpanded ? [...baseColumns, ...extraColumns] : baseColumns;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={initialRows} columns={columns} pageSizeOptions={[5]} />
    </div>
  );
};

export default DataGridExample;
