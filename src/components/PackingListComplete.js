import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData, sampleComplete } from "../../data/packData";
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

  const doneBrick = (categoryObj) => {
    return (
      <ListItem key={categoryObj.name}>
        <Checkbox defaultChecked />
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
      <List>{list.map((category) => doneBrick(category))}</List>
    </>
  );
};

export default PackingListComplete;
