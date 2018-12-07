import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import GetDogBreeds from "./Usecase/GetDogBreeds";
import DogSelector from "./Components/DogSelector";
import HelloMessage from "./Components/HelloMessage";
import Favorites from "./Components/Favorites";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const getDogBreeds = new GetDogBreeds();
class App extends Component {
  render() {
    const welcome = "Welcome! Here are all the dogs!";
    let likeDogs = null;
    return (
      <Grid>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <div>
              <HelloMessage welcome={welcome} likeDogs={likeDogs} />
              <Favorites header="My favorite Dogs!">
                <p>Akita</p>
                <p>Husky</p>
                <p>Pug</p>
              </Favorites>
              <p>What type of dog do you want to see!?</p>
              <DogSelector getDogBreeds={getDogBreeds} />
            </div>
          </Col>
          <Col md={2} />
        </Row>
      </Grid>
    );
  }
}

export default App;
