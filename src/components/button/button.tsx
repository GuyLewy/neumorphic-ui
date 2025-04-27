import { LucideIcon } from "lucide-react";
import styles from "./button.module.scss";
import cn from "classnames";

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
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			onClick={onClick}
			className={cn(className, styles.button)}
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
