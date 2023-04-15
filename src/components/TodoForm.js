import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { FormControl } from "@mui/material";
import CheckboxList from "./CheckboxList";
import useSWR from "swr";
import LoadingSpinner from "./spinner";

const url = "https://jsonplaceholder.typicode.com/todos";

function TodoForm() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isError, isLoading } = useSWR(url, fetcher);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(data.slice(0, 10));

  if (isError) {
    <h1>errooooor</h1>;
  }
  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  const Tasks = (text) => {
    let index;
    if (tasks.length === 0) index = 0;
    else index = tasks[tasks.length - 1].id + 1;
    const newtask = {
      userId: 1,
      id: index,
      title: text,
      completed: false,
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
      {/* <div>{setTasks(data.slice(0, 10))}</div> */}
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
