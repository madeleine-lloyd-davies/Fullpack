import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Item } from "@mui/material";
import { PackingList } from ".";

const BasicPackingPage = () => {
  return (
    <>
      <Grid container direction='row'>
        <Grid item xs={6}>
          <PackingList />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction={"column"}>
            <div>
              hi top list<br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>i take up many rows
            </div>
            <div>hi bottom list</div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BasicPackingPage;
