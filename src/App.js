// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TodoForm from "./components/TodoForm";
// import CheckboxList from "./components/CheckboxList";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container>
        <TodoForm />
        {/* <CheckboxList /> */}
      </Container>
    </div>
  );
}

export default App;
