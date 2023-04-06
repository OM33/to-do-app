import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoadingSpinner from "./spinner";

export default function CheckboxList({ Tasks, deleteTask, Loading, Error }) {
  const delTask = (id) => deleteTask(id);

  if (Loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  if (Error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  const checkTask = (id) => {
    Tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
  };

  return (
    <>
      {Tasks.map((task) => {
        const { id, title, completed } = task;
        return (
          <Paper variant="outlined" key={id}>
            <Grid container>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Checkbox onChange={() => checkTask(id)} />}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  style={
                    completed
                      ? { textdecoration: "line-through" }
                      : { textdecoration: "none" }
                  }>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton size="medium" onClick={() => delTask(id)}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}
