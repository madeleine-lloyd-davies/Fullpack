import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { packData } from "../../data/packData";

/*

{
  name:
  description:
  status: (deleted, active, or complete?)
}
*/

const CategoryBrick = (categoryObj) => {
  return (
    <ListItem key={categoryObj.name}>
      <Checkbox />
      <ListItemText
        primary={categoryObj.name}
        secondary={categoryObj.description}
      />
    </ListItem>
  );
};
export default CategoryBrick;
