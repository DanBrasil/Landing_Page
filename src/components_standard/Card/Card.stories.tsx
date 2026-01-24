import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

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

export const Ansiedade: Story = {
  args: {
    children: (
      <>
        <h2 className="text-xl font-semibold">Ansiedade</h2>
        <p>Tratamento para crises e preocupação excessiva.</p>
      </>
    ),
  },
};

export const Estresse: Story = {
  args: {
    children: (
      <>
        <h2 className="text-xl font-semibold">Estresse</h2>
        <p>Auxílio para sobrecarga emocional e burnout.</p>
      </>
    ),
  },
};
