import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Input from ".";
import { DollarSign, EyeOff } from "lucide-react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Controlled: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: "Nome completo",
  },
};

export const ControlledLeftIcon: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: "Nome completo",
    leftIcon: DollarSign,
  },
};

export const ControlledRightIcon: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: "Nome completo",
    rightIcon: EyeOff,
    onClickRight: () => ({}),
  },
};
