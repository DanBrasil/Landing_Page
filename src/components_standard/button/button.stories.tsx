import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Solid: StoryObj<typeof Button> = {
  args: {
    children: "Button",
  },
};

export const SolidDisable: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    disabled: true,

  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const OutlineDisable: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
export const Link: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const LinkDisable: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
export const Ghost: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const GhostDisable: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
