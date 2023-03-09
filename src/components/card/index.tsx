import { ArrowRightOutlined, StarFilled } from "@ant-design/icons";
import Link from "next/link";
import Heading from "../heading/Heading";
import style from "./card.module.scss";
import Image from "next/image";

interface cardOptions {
	title: string;
	description: string;
	score: number | object;
	imgUrl: string | object;
	href: string;
}

const Card: React.FC<cardOptions> = ({
	title,
	description,
	score,
	imgUrl,
	href,
}) => {
	return (
		<>
			<div className={style.card}>
				<div className={style.card__row}>
					{" "}
					<Heading title={title} titleSize={"sm"} description={description} />
					<Link href={href}>
						<div className={style.url}>
							<ArrowRightOutlined />
						</div>
					</Link>
				</div>
				<div className={style.card__row}>
					<div className={style.imgDiv}>
						<Image
							className={style.img}
							layout="fill"
							width={100}
							height={100}
							src={imgUrl}
							alt="company logo"
						/>
					</div>
					<p className={style.score}>
						<StarFilled /> <span>{score}</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
