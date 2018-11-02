import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { PageHeader } from "react-bootstrap";

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubHeading() {
    if (this.props.likeDogs === true) {
      return <h4>The bestest dogs</h4>;
    } else if (this.props.likeDogs === false) {
      return <h4>Sorry you have to put up with these smelly dogs</h4>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <PageHeader className="center">{this.props.welcome}</PageHeader>
        {this.renderSubHeading()}
      </div>
    );
  }
}
