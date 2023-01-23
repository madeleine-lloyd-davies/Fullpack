import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { packData } from "../../data/packData";
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
  FormControlLabel,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

/*
notes/todos
#use state instead of hardcoded data
#update 'add' function to allow user to input desc and not just name?
#do we need to do anything yet to add unique ids to these? is it enough to count on unique names? if that is the case, we should check the name before allowing user to add a new one
#add to do count at top of list (ie, number completed / total to do?)
*/

const PackingListToDo = () => {
  const [open, setOpen] = useState(false);
  const [list, updateList] = useState(packData);
  const [newItem, setNewItem] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNewItem = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    list.unshift({ name: newItem });
    setNewItem("");
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const todoBrick = (categoryObj) => {
    return (
      <ListItem key={categoryObj.name}>
        <Checkbox />

        <ListItemText
          primary={categoryObj.name}
          secondary={categoryObj.description}
        />
        <DeleteIcon />
      </ListItem>
    );
  };

  return (
    <>
      <h2>TO PACK:</h2>
      <List>
        <Button variant='outlined' onClick={handleClickOpen}>
          ADD ITEM
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Want to keep track of something else? Add an item to your list.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='newItem'
              label='New Item'
              type='text'
              fullWidth
              variant='standard'
              value={newItem}
              onChange={handleNewItem}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit}>Add</Button>
          </DialogActions>
        </Dialog>
        {list.map((category) => todoBrick(category))}
      </List>
    </>
  );
};

export default PackingListToDo;
