import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import nock from "nock";

it("renders without crashing", () => {
  nock("https://dog.ceo")
        .get(`/api/breeds/list/all`)
        .reply(200, {});

  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
