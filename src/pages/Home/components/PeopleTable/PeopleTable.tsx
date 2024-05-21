"use client";
import { Person } from "@/interfaces";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable: React.FC = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const pageSizeOptions = [5, 10, 20];

  const initialState = {
    pagination: { paginationModel: { pageSize: 5 } },
  };

  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((people) => people.id === person.id);

  const filterPerson = (person: Person) =>
    favoritePeople.filter((people) => people.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];

    dispatch(addFavorite(filteredPeople));

    setSelectedPeople(filteredPeople);
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
          <Checkbox
            size="small"
            checked={findPerson(params.row)}
            onChange={() => handleChange(params.row)}
          />
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

  useEffect(()=> {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople])

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

export default PeopleTable;
