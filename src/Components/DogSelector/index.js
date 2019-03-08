import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Form, Button, FormControl } from "react-bootstrap";
import "./style.css";
export default class DogSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
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
    return (
      <option data-test="dog-breeds" key={dogBreeds}>
        {capitalised}
      </option>
    );
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
      return (
        <img
          className="size-control"
          data-test="dog-picture"
          src={imageLink}
          alt="A dog"
        />
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <p>Loading:</p>
          <FormControl
            inputRef={ref => {
              this.myInput = ref;
            }}
            componentClass="select"
            id="dog-breeds"
          />
        </div>
      );
    }
    return (
      <div className="center">
        <h4 data-test="bob">Dog Breeds:</h4>
        <Form
        onSubmit = {this.grabAPic}
        data-test="pic-form">
          <FormControl
            inputRef={ref => {
              this.myInput = ref;
            }}
            componentClass="select"
            id="dog-breeds"
          >
            {this.renderDropdownItems()}
          </FormControl>
          <div className="pt pb">
            <Button
              type="submit"
            >
              Random doggo
            </Button>
          </div>
        </Form>
        <div>{this.renderImage()}</div>
      </div>
    );
  }

  grabAPic = async (e) => {
    e.preventDefault();
    let selectedBreed = this.myInput.value;
    let lowerCase = selectedBreed.toLowerCase();

    let imageRequest = this.props.getDogPic;
    let result = await imageRequest.execute(lowerCase);

    this.setState({ image: result, loading: false });
  }

  async componentDidMount() {
    let list = this.props.getDogBreeds;
    let result = await list.execute();

    this.setState({ data: result, loading: false });
  }
}
