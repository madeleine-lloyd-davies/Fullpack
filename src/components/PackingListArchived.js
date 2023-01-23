import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData, sampleComplete, sampleArchive } from "../../data/packData";
import { selectPackList, unarchive } from "../store/slices/packListSlice";

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
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

const PackingListArchived = () => {
  const [list, updateList] = useState(sampleArchive);
  const dispatch = useDispatch();
  const { toDo, inactive, complete } = useSelector(selectPackList);

  const archiveBrick = (categoryObj) => {
    const handleUnarchive = () => {
      dispatch(unarchive(categoryObj));
    };
    return (
      <ListItem key={categoryObj.name}>
        <UnarchiveOutlinedIcon onClick={handleUnarchive} />
        <ListItemText primary={categoryObj.name} />
      </ListItem>
    );
  };

  return (
    <>
      <h2>ARCHIVED:</h2>
      <List>{inactive.map((category) => archiveBrick(category))}</List>
    </>
  );
};

export default PackingListArchived;
