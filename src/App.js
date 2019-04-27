import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import GetDogBreeds from "./Usecase/GetDogBreeds";
import GetDogPic from "./Usecase/GetDogPic";
import SubmitBest from "./Usecase/SubmitBest";

import DogSelector from "./Components/DogSelector";
import HelloMessage from "./Components/HelloMessage";
import Favorites from "./Components/Favorites";
import SubmitBestDog from "./Components/SubmitBestDog";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const getDogBreeds = new GetDogBreeds();
const getDogPic = new GetDogPic();
const submitBest = new SubmitBest();

function App () {
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
            <DogSelector getDogBreeds={getDogBreeds} getDogPic={getDogPic}/>
            <SubmitBestDog submitBest={submitBest}/>
          </div>
        </Col>
        <Col md={2} />
      </Row>
    </Grid>
  );
}

export default App;
