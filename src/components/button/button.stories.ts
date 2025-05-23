import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Target } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		label: "Primary",
	},
};

export const Icon: Story = {
	args: {
		icon: Target,
		label: "Icon",
	},
};

export const IconRight: Story = {
	args: {
		icon: Target,
		label: "Icon Right",
		iconPosition: "right",
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled",
		disabled: true,
	},
};

export const Click: Story = {
	args: {
		label: "Click Me!",
		onClick: () => alert("Button clicked!"),
	},
};
