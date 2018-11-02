import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

export default class Favorites extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <div className="panel">
        <div className="panel-header">{this.props.header}</div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}
