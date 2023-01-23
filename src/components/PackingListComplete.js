import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData, sampleComplete } from "../../data/packData";
import { selectPackList, uncomplete } from "../store/slices/packListSlice";
import CategoryBrick from "./CategoryBrick";
import {
  List,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Checkbox,
  ListItem,
  ListItemText,
} from "@mui/material";

const PackingListComplete = () => {
  const [list, updateList] = useState(sampleComplete);
  const dispatch = useDispatch();
  const { toDo, inactive, complete } = useSelector(selectPackList);

  const doneBrick = (categoryObj) => {
    const handleUncheck = () => {
      dispatch(uncomplete(categoryObj));
    };
    return (
      <ListItem key={categoryObj.name}>
        <Checkbox defaultChecked onChange={handleUncheck} />
        <ListItemText
          primary={categoryObj.name}
          secondary={categoryObj.description}
        />
      </ListItem>
    );
  };
  return (
    <>
      <h2>COMPLETE:</h2>
      <List>{complete.map((category) => doneBrick(category))}</List>
    </>
  );
};

export default PackingListComplete;
