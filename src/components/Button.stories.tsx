import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Login",
  },
  argTypes: {
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <h1>Text with P tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  }
};
