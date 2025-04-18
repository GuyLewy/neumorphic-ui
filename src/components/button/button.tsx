import styles from "./button.module.scss";

type ButtonProps = Readonly<{
	label: string;
	onClick?: () => void;
	className?: React.MouseEventHandler<HTMLButtonElement>;
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
