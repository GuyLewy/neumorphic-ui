import { Button } from "../button/button";
import { useState, cloneElement } from "react";
import styles from "./popover.module.scss";
import cn from "classnames";

export function Popover({
	className,
	children,
}: {
	className?: string;
	children: [
		React.ReactElement<
			typeof Button & { onClick: () => void; className: string }
		>,
		React.ReactElement
	];
}) {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopover = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={cn(
				styles.popover,
				!isOpen && styles.popoverHidden,
				className || ""
			)}
		>
			{cloneElement(children[0], {
				onClick: () => {
					togglePopover();
				},
				className: cn(
					styles.popoverButton,
					children[0].props.className || ""
				),
			})}

			<div className={cn(styles.popoverContent)}>{children[1]}</div>
		</div>
	);
}
