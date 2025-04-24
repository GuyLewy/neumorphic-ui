import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Mail } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enabled: Story = {
	args: {
		type: "text",
        label: "Email",
	},
};

export const Icon: Story = {
	args: {
		type: "text",
        label: "Email",
        icon: Mail,
        iconPosition: "left",
	},
};

export const IconRight: Story = {
	args: {
		type: "email",
        label: "Email",
        icon: Mail,
        iconPosition: "right",
	},
};

export const Disabled: Story = {
	args: {
		type: "text",
        disabled: true,
        label: "Disabled",
	},
};

export const Number: Story = {
	args: {
		type: "number",
        label: "Number",
	},
};