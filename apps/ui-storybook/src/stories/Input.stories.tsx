import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@tzc/ui";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    label: "Email",
    placeholder: "you@example.com"
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "我们不会分享你的邮箱" }
};

export const Disabled: Story = {
  args: { disabled: true }
};
