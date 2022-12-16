import { IButtonProps, Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create Account",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<IButtonProps>;

export const Default: StoryObj = {};
