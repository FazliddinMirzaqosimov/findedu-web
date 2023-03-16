import Link from "next/link";
import css from "./button.module.scss";
interface ButtonProps {
  label: string | JSX.Element;
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
  href,
  onClick,
}: ButtonProps) {
  const MyButton = (
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

  if (href) {
    return <Link href={href}>{MyButton}</Link>;
  }

  return MyButton;
}

export default Button;
