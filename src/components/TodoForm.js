import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { FormControl } from "@mui/material";
import CheckboxList from "./CheckboxList";

function TodoForm() {
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
    {
      id: 3,
      title: "todo 3",
      iscompleted: false,
    },
  ]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "absolute",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}>
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            To Do App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 16 }}></Container>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 16 }, p: { xs: 2, md: 5 } }}>
        <Typography component="h1" variant="h4" align="center">
          To do App
        </Typography>

        <form>
          <FormControl fullWidth={true}>
            <Grid container spacing={0}>
              <Grid item xs={6} sm={9}>
                <TextField
                  required
                  id="task"
                  name="Task"
                  label="Task"
                  fullWidth
                  autoComplete="given-task"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button variant="contained">Add Task</Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
        <CheckboxList tasks={tasks} />
      </Paper>
    </ThemeProvider>
  );
}

export default TodoForm;
