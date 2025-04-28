import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import {
	AlignVerticalJustifyEnd,
	AlignVerticalJustifyCenter,
	AlignVerticalJustifyStart,
} from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
	args: {
		selectionText: "Choose a Framework",
		options: [
			{ label: "React", value: "react" },
			{ label: "Vue", value: "vue" },
			{ label: "Svelte", value: "svelte" },
			{ label: "Angular", value: "angular" },
		],
		onChange: () => {
			return;
		},
	},
};

export const Icons: Story = {
	args: {
		selectionText: "Choose Vertical Align",
		options: [
			{
				label: "Align Start",
				value: "start",
				icon: AlignVerticalJustifyStart,
			},
			{
				label: "Align Center",
				value: "center",
				icon: AlignVerticalJustifyCenter,
			},
			{ label: "Align End", value: "end", icon: AlignVerticalJustifyEnd },
		],
		onChange: () => {
			return;
		},
	},
};

export const DefaultValue: Story = {
	args: {
		selectionText: "Choose Vertical Align",
		defaultValue: "start",
		options: [
			{
				label: "Align Start",
				value: "start",
				icon: AlignVerticalJustifyStart,
			},
			{
				label: "Align Center",
				value: "center",
        iconPosition: "right",
				icon: AlignVerticalJustifyCenter,
			},
			{ label: "Align End", value: "end", icon: AlignVerticalJustifyEnd },
		],
		onChange: () => {
			return;
		},
	},
};
