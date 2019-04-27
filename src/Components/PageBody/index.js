import React, { Component } from "react";
import "./style.css";
import DogSelector from "../DogSelector";
import HelloMessage from "../HelloMessage";
import Favorites from "../Favorites";

export default class PageBody extends React.Component {
  render() {
    const welcome = "Welcome! Here are all the dogs!"
    let likeDogs = null;
    return (
      <div>
        <HelloMessage welcome={welcome} likeDogs={likeDogs} />
        <Favorites header="My favorite Dogs!">
          <p>Akita</p>
          <p>Husky</p>
          <p>Pug</p>
        </Favorites>
        <p>What type of dog do you want to see!?</p>
        <DogSelector />
      </div>
    );
  }
}
