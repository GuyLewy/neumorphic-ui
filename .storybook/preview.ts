import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#f0f0f0",
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
