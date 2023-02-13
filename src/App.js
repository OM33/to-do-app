// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TodoForm from "./components/TodoForm";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CheckboxList from "./components/CheckboxList";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
          <TodoForm />
          {/* <CheckboxList /> */}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
