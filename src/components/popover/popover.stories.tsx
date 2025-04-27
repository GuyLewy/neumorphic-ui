import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";
import { Button } from "../button/button";
import { PartyPopper } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const test: Story = {
	args: {
        children: [
			<Button
				label="Open"
				icon={PartyPopper}
				iconPosition="right"
				key="button"
			/>,
			<div key="content">Hello World</div>,
		],

        className: ""
    },
};
