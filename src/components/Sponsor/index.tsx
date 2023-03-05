import Image from "next/image";
import Link from "next/link";
import styles from "./sponsor.module.scss";

type sponsorProps = {
  src: string;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  href?: string;
  alt?: string;
};

function Sponsor({
  src,
  style,
  className = "",
  href = "#",
  alt = "Sponsor",
  ...rest
}: sponsorProps) {
  return (
    <Link href={href}>
      <a className={styles.sponsor + " " + className} style={style} {...rest}>
        <Image width={1000} height={500} src={src} alt={alt} />
      </a>
    </Link>
  );
}

export default Sponsor;
