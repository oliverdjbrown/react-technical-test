"use client";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./components/FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello World!
          </Typography>

          <IconButton color="secondary" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
