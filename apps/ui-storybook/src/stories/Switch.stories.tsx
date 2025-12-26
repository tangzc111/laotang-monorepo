import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@tzc/ui";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  args: {
    label: "Enable notifications"
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  }
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true
  }
};
