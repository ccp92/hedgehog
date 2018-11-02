import React from "react";
import { storiesOf } from "@storybook/react";
import Favorites from ".";

storiesOf("Favorites", module).add("Default", () => (
  <Favorites header="My favourite Dogs:">
    <ul>Akita</ul>
    <ul>Husky</ul>
    <ul>Pug</ul>
  </Favorites>
));

storiesOf("Favorites", module).add("Different Children", () => (
  <Favorites header="My favourite Cats:">
    <ul>Brown</ul>
    <ul>Grey</ul>
    <ul>Black</ul>
  </Favorites>
));
