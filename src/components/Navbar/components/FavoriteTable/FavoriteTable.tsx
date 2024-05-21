"use client";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import { Person } from "@/interfaces";
import { removeFavorite } from "@/redux/states";

const FavoriteTable: React.FC = () => {
  const dispatch = useDispatch();

  const pageSizeOptions = [5, 10, 20];

  const initialState = {
    pagination: { paginationModel: { pageSize: 5 } },
  };

  const statePeople = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      with: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton color="secondary" onClick={() => handleClick(params.row)}>
            <Delete />
          </IconButton>
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={statePeople}
      initialState={initialState}
      pageSizeOptions={pageSizeOptions}
      getRowId={(row) => row.id}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
    />
  );
};

export default FavoriteTable;
