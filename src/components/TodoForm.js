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
  const [text, setText] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);

  const Tasks = (text) => {
    setTaskId(taskId + 1);
    const newtask = {
      id: taskId,
      title: text,
      iscompleted: false,
    };
    setTasks([...tasks, newtask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Tasks(text);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
            <Grid item xs={6} sm={3} rowSpacing={1}>
              <Button variant="contained" type="submit">
                Add Task
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
      <CheckboxList Tasks={tasks} deleteTask={deleteTask} />
    </ThemeProvider>
  );
}

export default TodoForm;
