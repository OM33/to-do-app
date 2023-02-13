import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  iconbutton,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CheckboxList({ text }) {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "todo 1",
      iscompleted: false,
    },
    {
      id: 2,
      title: "todo 2",
      iscompleted: false,
    },
  ]);

  // useEffect(() => {
  //   console.log("inside useEffect");
  // }, []);

  // const checkTask = (event) => {
  //   console.log(event.target.checked);
  //   tasks.map((task) => {
  //     if (task.id === id) task.iscompleted = !task.iscompleted;
  //     console.log(task.iscompleted + " en " + task.id);
  //   });
  // };

  return (
    <>
      {tasks.map((task) => {
        const { id, title, iscompleted } = task;
        return (
          <Paper variant="outlined" key={id}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControlLabel control={<Checkbox />} label="Label" />
              </Grid>
              <Grid item xs={4}>
                <Typography>{title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <DeleteIcon />
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}
