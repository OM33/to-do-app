import * as React from "react";
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

export default function CheckboxList({ tasks }) {
  console.log(tasks);
  console.log("en checkbox");
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
              <Grid item xs={4} key={id}>
                <Typography>{title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <DeleteIcon />
              </Grid>
            </Grid>
          </Paper>
        );
      })}
      {/* <Paper variant="outlined">
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                </Grid>
                <Grid item xs={4} key={id}>
                  <Typography>{title}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <DeleteIcon />
                </Grid>
              </Grid>
            </FormGroup>
          </Paper>; */}
      aaaaaah
    </>
  );
}
