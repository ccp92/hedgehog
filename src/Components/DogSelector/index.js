import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button, FormControl } from "react-bootstrap";

export default class DogSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        status: null,
        message: null
      },
      image: {
        status: null,
        message: null
      }
    };
  }

  renderItem(dogBreeds) {
    let capitalised = dogBreeds.charAt(0).toUpperCase() + dogBreeds.slice(1);
    return <option key={dogBreeds}>{capitalised}</option>;
  }

  renderDropdownItems() {
    if (this.state.data.status === "success") {
      let messageObject = this.state.data.message;
      let dogBreeds = Object.getOwnPropertyNames(messageObject);
      return dogBreeds.map(dogBreeds => this.renderItem(dogBreeds));
    } else {
      return null;
    }
  }

  renderImage() {
    if (this.state.image.status === "success") {
      let imageLink = this.state.image.message;
      return <img src={imageLink} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h5>Dog Breeds:</h5>
        <FormControl
          inputRef={ref => {
            this.myInput = ref;
          }}
          componentClass="select"
          id="dog-breeds"
        >
          {this.renderDropdownItems()}
        </FormControl>
        <Button
          onClick={() => {
            this.grabAPic();
          }}
          type="submit"
        >
          View
        </Button>
        <div>{this.renderImage()}</div>
      </div>
    );
  }

  grabAPic() {
    let selectedBreed = this.myInput.value;
    let lowerCase = selectedBreed.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${lowerCase}/images/random`)
      .then(boop => boop.json())
      .then(image => this.setState({ image }));
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}