import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import PageBody from "./Components/PageBody";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <PageBody />
          </Col>
          <Col md={2} />
        </Row>
      </Grid>
    );
  }
}

export default App;
