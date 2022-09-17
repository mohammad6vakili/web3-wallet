import React from "react";
import { storiesOf } from "@storybook/react";
import { Wallet } from "../components/Wallet";

const stories = storiesOf("Wallet Test", module);

stories.add("Wallet", () => {
  return <Wallet />;
});
