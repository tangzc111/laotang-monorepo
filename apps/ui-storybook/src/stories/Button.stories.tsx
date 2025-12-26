import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@tzc/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md"
  },
  argTypes: {
    onClick: { action: "clicked" }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" }
};

export const Ghost: Story = {
  args: { variant: "ghost" }
};
