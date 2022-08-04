import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { addMockData } from "../../../data/mock";
import { store } from "../../../data/store";
import { Upgrades } from "../../../views/upgrades/Upgrades";

addMockData(store);

export default {
  title: "Army Forge/Upgrades/Upgrades",
  component: Upgrades
} as ComponentMeta<typeof Upgrades>;

const Template: ComponentStory<typeof Upgrades> = (args) => (
  <Provider store={store}>
    <Upgrades />
  </Provider>
);

export const Default = Template.bind({});

