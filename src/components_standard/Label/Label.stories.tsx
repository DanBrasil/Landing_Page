import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2 className="text-xl font-semibold">Depressão</h2>
        <p>Acompanhamento psicológico especializado.</p>
      </>
    ),
  },
};
