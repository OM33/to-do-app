import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CheckboxList({ addTask }) {
  const checkTask = (id) => {
    addTask.map((task) => {
      if (task.id === id) {
        task.iscompleted = !task.iscompleted;
        console.log(task.iscompleted + " en " + task.id);
      }
    });
  };

  return (
    <>
      {addTask.map((task) => {
        const { id, title, iscompleted } = task;
        return (
          <Paper variant="outlined" key={id}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox onChange={() => checkTask(id)} />}
                  label="Label"
                />
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
