import { ITextInputRoot, TextInput } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email address" />,
    ],
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<ITextInputRoot>;

export const Default: StoryObj<ITextInputRoot> = {};
export const WithoutIcon: StoryObj<ITextInputRoot> = {
  args: {
    children: <TextInput.Input placeholder="Type your email address" />,
  },
};
