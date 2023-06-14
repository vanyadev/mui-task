import {
  DataGrid,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { FormValues, contactData } from "../../data/contactData";

const handlePrintClick = (cellValue: GridRenderCellParams) => {
  console.log(cellValue);
};

const dataGridSx = {
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "grid.main",
      },
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "primary.main",
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      fontSize: 16,
    },
  },
};

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <Box sx={{ color: "primary.main", fontSize: "18", fontWeight: "bold" }}>
          {cellValues.value}
        </Box>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value && cellValues.value[0]}
        </div>
      );
    },
  },
  {
    field: "start date",
    headerName: "Start Date",
    minWidth: 120,
    valueGetter: (params: GridValueGetterParams<FormValues>) =>
      `${params.row.startDate?.toDate().toLocaleDateString()}`,
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return cellValues.value;
    },
  },
  {
    field: "Print",
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handlePrintClick(cellValues);
          }}
        >
          Print
        </Button>
      );
    },
  },
];

export const ContactDataGrid = () => {
  const rows = () => [...contactData];
  const theme = useTheme();
  return (
    <DataGrid
      autoHeight
      rows={rows()}
      columns={columns(theme)}
      columnHeaderHeight={60}
      rowHeight={120}
      sx={dataGridSx}
      components={{
        Toolbar: () => {
          return (
            <GridToolbar
              sx={{
                justifyContent: "flex-end",
                "& button": { border: "none" },
                "& .MuiBox-root": { display: "none" },
              }}
            />
          );
        },
      }}
      initialState={{
        sorting: { sortModel: [{ field: "name", sort: "asc" }] },
      }}
    />
  );
};
