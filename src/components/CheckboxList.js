import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
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
