import React, { memo } from "react";
import styles from "./heading.module.scss";

type FontSizes = "sm" | "md" | "lg";

interface IProps {
	title: string;
	titleSize: FontSizes;
	highlightedWord?: string | boolean;
	description?: string;
	children?: React.ReactNode;
}

const Heading: React.FC<IProps> = ({
	title,
	description,
	highlightedWord,
	titleSize,
	children,
}) => {
	console.log("render");
	let titleContent: React.ReactNode;

	if (!highlightedWord) {
		titleContent = <>{title}</>;
	} else if (highlightedWord === true) {
		titleContent = <span className={styles.highlight}>{title}</span>;
	} else {
		const titleWords = title.split(" ");
		const wordsToHighlight = highlightedWord.split(" ");
		titleContent = titleWords.map((word, index) => {
			if (wordsToHighlight.includes(word)) {
				return (
					<span key={index} className={styles.highlight}>
						{word}{" "}
					</span>
				);
			} else {
				return <React.Fragment key={index}>{word} </React.Fragment>;
			}
		});
	}

	return (
		<div>
			<h2 className={styles[titleSize]}>{titleContent}</h2>
			{children && <div className={styles.childWrapper}>{children}</div>}
			<p
				className={
					titleSize === "sm" ? styles.description_sm : styles.description_md
				}
			>
				{description}
			</p>
		</div>
	);
};

export default memo(Heading);

/* 
1)`title`(required) prop asosiy title uchun.

2) `titleSize`(required) prop title-ning fontsize-i uchun. Qiymat sifatida "sm", "md", "lg" lardan birini oladi.
"lg"-showcase-dagi katta title uchun, 
"md"-section-lardagi title uchun,
"sm"-cardlarda ishlatilgan title uchun

3)`highlightedWord`(optional) prop string yoki boolean oladi. title-dagi biror so'zni rangini o'zgartirish uchun. Qaysi so'z o'zgarishi kerak bo'sa o'sha so'zni string qilib, yoki agar hammasi bo'lsa true berish kerak.

4)`description`(optional) prop description uchun string qiymat oladi.

5)`children` (optional) agar title bilan description orasida biror element bo'lishi kerak bo'lsa shu elementni children sifatida berish kerak.

*/
