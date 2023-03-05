import Counter from "@/components/counter/Counter";
import Input from "@/components/Input/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from "@/styles/components.module.scss";
import { Space } from "antd";
import Card from "@/components/card";
import img1 from "../assets/media/Najot_Talim-01.png";
import img2 from "../assets/media/Najot_Talim-01.png";
import img3 from "../assets/media/Najot_Talim-01.png";
const Components = () => {
	return (
		<div>
			<Space direction={"vertical"} size={[10, 150]}>
				<Input />
				<Tag text={"tag"} color={"blue"} />

				<Counter
					options={[
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
					]}
				/>
				<Card
					cardOptions={[
						// {
						// 	title: "Najot ta'lim",
						// 	description: "Biz ilm va tajriba ulashamiz",
						// 	score: 4.5,
						// 	imgUrl: {img1},
						// },
						{
							title: "Najot ta'lim",
							description: "Biz ilm va tajriba ulashamiz",
							score: 4.5,
							imgUrl: {img1},
							href: "string", 
						},
						{
							title: "PDP It Company",
							description: "Biz ilm va tajriba ulashamiz",
							score: 3.5,
							imgUrl: {img2},
							href: "string",
						},
						{
							title: "Data learning center",
							description: "Biz ilm va tajriba ulashamiz",
							score: 5.5,
							imgUrl: {img3},
							href: "string",
						},
					]}
				/>
			</Space>
		</div>
	);
};

export default Components;
