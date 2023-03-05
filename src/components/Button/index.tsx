import Link from "next/link";
import css from "./button.module.scss";

interface ButtonProps {
	label: string;
	disable?: boolean;
	type: "primary" | "secondary";
	border: "full" | "half";
	width?: boolean;
	href?: string;
	onClick?:
		| (React.MouseEventHandler<HTMLAnchorElement> &
				React.MouseEventHandler<HTMLButtonElement>)
		| undefined;
}

function Button({
	label,
	disable,
	type,
	border,
	width,
	onClick,
	href,
}: ButtonProps) {
	if (href) {
		return (
			<Link
				href={href}
				className={`${css.btn} ${
					type === "primary" ? css.btnPrimary : css.btnSecondary
				} ${border === "full" ? css.regular : css.half} ${width && css.width}`}
				onClick={onClick}
			>
				{label}
			</Link>
		);
	}

	return (
		<button
			className={`${css.btn} ${
				type === "primary" ? css.btnPrimary : css.btnSecondary
			} ${border === "full" ? css.regular : css.half} ${width && css.width}`}
			disabled={disable ? true : false}
			onClick={onClick}
		>
			{label}
		</button>
	);
}

export default Button;
