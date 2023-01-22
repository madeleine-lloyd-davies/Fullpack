import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Item } from "@mui/material";
import PackingListToDo from "../components/PackingListToDo";
import PackingListComplete from "../components/PackingListComplete";
import PackingListArchived from "../components/PackingListArchived";

const BasicPackingPage = () => {
  return (
    <>
      <Grid container direction='row'>
        <Grid item xs={6}>
          <PackingListToDo />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction={"column"}>
            <div>
              <PackingListComplete />
            </div>
            <div>
              <PackingListArchived />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BasicPackingPage;
