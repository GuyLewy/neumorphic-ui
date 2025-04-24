import { LucideIcon } from "lucide-react";
import styles from "./button.module.scss";

export function Button({
	label,
	icon: Icon,
	onClick,
	className,
	disabled = false,
	iconPosition = "left",
	...props
}: {
	label: string;
	icon?: LucideIcon;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	disabled?: boolean;
	iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${className}`}
			disabled={disabled}
			{...props}
		>
			{Icon && iconPosition === "left" && (
				<Icon className={styles.icon} />
			)}

			{label}

			{Icon && iconPosition === "right" && (
				<Icon className={styles.icon} />
			)}
		</button>
	);
}
