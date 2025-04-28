import { Popover } from "../popover/popover";
import { Button } from "../button/button";
import { useState } from "react";
import styles from "./select.module.scss";
import { LucideIcon } from "lucide-react";

export function Select({
	defaultValue,
	selectionText,
	options,
	onChange,
}: {
	defaultValue?: string;
	selectionText: string;
	options: {
		label: string;
		value: string;
		icon?: LucideIcon;
		iconPosition?: "left" | "right";
	}[];
	onChange: (value: string) => void;
}) {
	const [selectedValue, setSelectedValue] = useState(defaultValue);

	function getOptionDetails(selectedValue: string) {
		for (const option of options) {
			if (option.value === selectedValue) return option;
		}
	}

	let buttonLabel = selectionText;
	let buttonIcon;
	let buttonIconPosition;

	if (selectedValue) {
		const option = getOptionDetails(selectedValue);

		if (!option) {
			return;
		}

		buttonLabel = option.label;
		buttonIcon = option?.icon;
		buttonIconPosition = option?.iconPosition;
	}

	return (
		<Popover className={styles.popover}>
			<Button
				label={buttonLabel}
				icon={buttonIcon}
				iconPosition={buttonIconPosition}
				className={styles.popoverButton}
			/>
			<div className={styles.optionsContainer}>
				{options.map((option) => (
					<span
						key={option.value}
						onClick={() => {
							onChange(option.value);
							setSelectedValue(option.value);
						}}
						className={styles.option}
					>
						{option.icon &&
							(option.iconPosition === "left" ||
								!option.iconPosition) && (
								<option.icon className={styles.icon} />
							)}
						{option.label}
						{option.icon && option.iconPosition === "right" && (
							<option.icon className={styles.icon} />
						)}
					</span>
				))}
			</div>
		</Popover>
	);
}
