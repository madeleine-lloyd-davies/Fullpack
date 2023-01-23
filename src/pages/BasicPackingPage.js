import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Item } from "@mui/material";
import PackingListToDo from "../components/PackingListToDo";
import PackingListComplete from "../components/PackingListComplete";
import PackingListArchived from "../components/PackingListArchived";
import { borders } from "@mui/system";

const BasicPackingPage = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='space-around'
        alignItems='flex-start'
      >
        <Grid item xs={6}>
          <Grid item sx={{ border: 1, borderRadius: "16px" }}>
            <PackingListToDo />
          </Grid>
        </Grid>

        <Grid item xs={6} container direction={"column"} rowGap={2}>
          <Grid item sx={{ border: 1, borderRadius: "16px" }}>
            <PackingListComplete />
          </Grid>
          <Grid item sx={{ border: 1, borderRadius: "16px" }}>
            <PackingListArchived />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BasicPackingPage;
