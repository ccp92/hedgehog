import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./style.css";
import DogSelector from "../DogSelector";
import { PageHeader } from "react-bootstrap";

export default class PageBody extends React.Component {
  render() {
    return (
      <div>
        <PageHeader className="center">All the Dogs!</PageHeader>
        <p>What type of dog do you want to see!?</p>
        <DogSelector />
      </div>
    );
  }
}
