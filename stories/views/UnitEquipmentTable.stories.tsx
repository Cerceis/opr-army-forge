import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import UnitEquipmentTable from "../../views/UnitEquipmentTable";
import { addMockData } from "../../data/mock";
import { store } from "../../data/store";

export default {
  title: "Army Forge/Unit Equipment Table",
  component: UnitEquipmentTable,
} as ComponentMeta<typeof UnitEquipmentTable>;

addMockData(store);

const Template: ComponentStory<typeof UnitEquipmentTable> = (args) => (
  <Provider store={store}>
    <UnitEquipmentTable {...args} />
  </Provider>
);

export const UpgradePanel = Template.bind({});
UpgradePanel.args = {
  loadout: store.getState().list.units[0]?.loadout,
  square: false,
  hideEquipment: false
};

export const CardView = Template.bind({});
CardView.args = {
  loadout: store.getState().list.units[0]?.loadout,
  square: true,
  hideEquipment: true
};
