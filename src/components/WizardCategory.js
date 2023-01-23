import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customListQuiz } from "../../data/packData";
import { selectCustomList } from "../store/slices/customListSlice";
import { List, ListItem, Checkbox, ListItemText } from "@mui/material";

const WizardCategory = (category) => {
  const createListItem = (item) => {
    return (
      <ListItem key={item.name}>
        <Checkbox />
        <ListItemText primary={item.name} secondary={item.quantity} />
      </ListItem>
    );
  };

  return (
    <>
      <h2>{category.name}</h2>
      {category.items.map((item) => createListItem(item))}
    </>
  );
};

export default WizardCategory;
