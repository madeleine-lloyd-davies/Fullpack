import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData, sampleComplete, sampleArchive } from "../../data/packData";

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

  const archiveBrick = (categoryObj) => {
    return (
      <ListItem key={categoryObj.name}>
        <UnarchiveOutlinedIcon />
        <ListItemText primary={categoryObj.name} />
      </ListItem>
    );
  };

  return (
    <>
      <h2>ARCHIVED:</h2>
      <List>{list.map((category) => archiveBrick(category))}</List>
    </>
  );
};

export default PackingListArchived;
