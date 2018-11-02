import React from "react";
import { storiesOf } from "@storybook/react";
import HelloMessage from ".";


storiesOf("HelloMessage", module).add("When like dogs is true", () => <HelloMessage welcome="Welcome! These are Dogs!" likeDogs={true}/>);
storiesOf("HelloMessage", module).add("When like dogs is false", () => <HelloMessage welcome="Oh Dear... Here are some dogs" likeDogs={false}/>);
