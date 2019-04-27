import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Form, FormControl, Button } from "react-bootstrap";

export default class SubmitBestDog extends Component {
  constructor(props) {
    super(props);
    this.state = { value: undefined };
  }
  render() {
    return (
      <Form data-test="best-dog-form" onSubmit={this.submit}>
        <label>What's your favourite dog?</label>
        <br />
        <FormControl
          inputRef={ref => {
            this.myInput = ref;
          }}
          data-test="input"
          onChange={this.onChange}
          value={this.state.value}
        />
        <div className="pt pb center">
          <Button type="submit" data-test="submit-button">
            Submit
          </Button>
        </div>
      </Form>
    );
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  submit = async e => {
    e.preventDefault();
    this.props.submitBest.execute(this.myInput.value);
  };
}
