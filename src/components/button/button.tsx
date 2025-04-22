import styles from "./button.module.scss";

type ButtonProps = Readonly<{
	label: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
}>;

export function Button(props: ButtonProps) {
	return (
		<button
			onClick={props.onClick}
			className={`${styles.button} ${props.className}`}
		>
			{props.label}
		</button>
	);
}
