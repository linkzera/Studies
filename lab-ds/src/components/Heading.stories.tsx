import { IHeadingProps, Heading } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, sapiente enim ad voluptatum similique quam, dolores labore error dolor, voluptates recusandae hic quidem. Fugit odit laboriosam dolores non libero.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: "inline-radio",
    },
  },
} as Meta<IHeadingProps>;

export const Default: StoryObj = {};
export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: "sm",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, sapiente enim ad voluptatum similique quam, dolores labore error dolor, voluptates recusandae hic quidem. Fugit odit laboriosam dolores non libero.",
  },
};
export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: "lg",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus, sapiente enim ad voluptatum similique quam, dolores labore error dolor, voluptates recusandae hic quidem. Fugit odit laboriosam dolores non libero.",
  },
};
export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    size: "lg",
    children: (
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi
        soluta quasi quia, nemo quas sequi ut nesciunt praesentium. Tenetur
        itaque optio magnam, iusto ab quidem amet placeat deleniti quam?
      </h1>
    ),

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
