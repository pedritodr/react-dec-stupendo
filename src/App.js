import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AppRouter } from "./routers/AppRouter";

const App = () => {
  return (
    <Container fluid>
      <AppRouter />
    </Container>
  );
};

export default App;
