import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CheckboxList({ Tasks, deleteTask }) {
  const delTask = (id) => deleteTask(id);

  const checkTask = (id) => {
    Tasks.map((task) => {
      if (task.id === id) {
        task.iscompleted = !task.iscompleted;
      }
    });
  };

  return (
    <>
      {Tasks.map((task) => {
        const { id, title, iscompleted } = task;
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
                    iscompleted
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
