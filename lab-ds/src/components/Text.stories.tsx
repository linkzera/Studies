import { ITextProps, Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Medium text",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: "inline-radio",
    },
  },
} as Meta<ITextProps>;

export const Default: StoryObj = {};
export const Small: StoryObj<ITextProps> = {
  args: {
    size: "sm",
    children: "Small text",
  },
};
export const Large: StoryObj<ITextProps> = {
  args: {
    size: "lg",
    children: "Large text",
  },
};
export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    size: "lg",
    children: <p>Large text</p>,

    asChild: true,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
