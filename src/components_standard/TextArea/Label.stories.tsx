import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

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
