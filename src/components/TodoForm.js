import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { FormControl } from "@mui/material";
import CheckboxList from "./CheckboxList";

function TodoForm() {
  const [text, setText] = React.useState("");
  const [newTask, setNewTask] = useState({
    id: 0,
    title: "todo 0",
    iscompleted: false,
  });

  const addTask = (text) => {
    const newtask = {
      id: 5,
      title: text,
      iscompleted: false,
    };
    setNewTask(newtask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={9}>
              <TextField
                required
                id="task"
                name="Task"
                label="Task"
                fullWidth
                value={text}
                autoComplete="given-task"
                variant="standard"
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button variant="contained" type="submit">
                Add Task
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
      <CheckboxList newTask={newTask} />
    </ThemeProvider>
  );
}

export default TodoForm;
