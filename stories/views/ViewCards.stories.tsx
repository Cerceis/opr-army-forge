import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { addMockData } from "../../data/mock";
import { store } from "../../data/store";
import ViewCards from "../../views/ViewCards";
import { IViewPreferences } from "../../pages/view";

addMockData(store);

export default {
  title: "Army Forge/View Cards",
  component: ViewCards,
  args: {
    prefs: {
      showFullRules: false,
      showPointCosts: true,
      combineSameUnits: true,
      showPsychic: true,
    } as IViewPreferences
  }
} as ComponentMeta<typeof ViewCards>;

const Template: ComponentStory<typeof ViewCards> = (args) => (
  <Provider store={store}>
    <ViewCards {...args} />
  </Provider>
);

export const Default = Template.bind({});

