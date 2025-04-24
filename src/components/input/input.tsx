import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute } from "react";
import styles from "./input.module.scss";

export function Input({
	type,
	label,
	icon: Icon,
	iconPosition = "left",
	className,
	disabled = false,
	...props
}: {
	type: HTMLInputTypeAttribute;
	label?: string;
	icon?: LucideIcon;
	iconPosition?: "left" | "right";
	className?: string;
	diabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<fieldset className={`${styles.fieldset} ${className || ""}`}>
			<label className={styles.label}>
				{Icon && iconPosition === "left" && (
					<Icon className={styles.icon} />
				)}

				{label}

				{Icon && iconPosition === "right" && (
					<Icon className={styles.icon} />
				)}
			</label>
			<input
				type={type}
				className={`${styles.input}`}
				placeholder=""
				disabled={disabled}
				{...props}
			/>
		</fieldset>
	);
}
