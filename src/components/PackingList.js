import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData } from "../../data/packData";
import CategoryBrick from "./CategoryBrick";
import { List } from "@mui/material";

const PackingList = () => {
  return (
    <>
      <List>{packData.map((category) => CategoryBrick(category))}</List>
    </>
  );
};

export default PackingList;
