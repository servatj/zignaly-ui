// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import TwoFAForm from "./";

export default {
  title: "Forms/TwoFAForm",
  component: TwoFAForm,
} as ComponentMeta<typeof TwoFAForm>;

const Template: ComponentStory<typeof TwoFAForm> = (args) => <TwoFAForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  onSubmit: (values: any) => {
    console.log(values);
  },
  onReSendCode: () => {
    console.log("onReSendCode()");
  },
};
