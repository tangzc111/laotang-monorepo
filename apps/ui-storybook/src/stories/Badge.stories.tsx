import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@tzc/ui";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  args: {
    children: "Default"
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Success: Story = {
  args: { variant: "success", children: "Success" }
};

export const Warning: Story = {
  args: { variant: "warning", children: "Warning" }
};
