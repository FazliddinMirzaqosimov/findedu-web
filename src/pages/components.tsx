import Counter from "@/components/counter/Counter";
import Input from "@/components/Input";
import Tag from "@/components/Tag/tag";
import style from "@/styles/components.module.scss";
import { Space } from "antd";
import Card from "@/components/card";
import img1 from "../assets/media/Najot_Talim-01.png";
import img2 from "../assets/media/Najot_Talim-01.png";
import img3 from "../assets/media/Najot_Talim-01.png";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Courses from "@/components/courses/Courses";
import Carusel from "../components/carusel/carusel";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
const Components = () => {
	return (
		<div>
			<Breadcrumb paths={[{ title: "O'quv Markazlari", link: "/" }]} />
			<Space direction={"vertical"} size={[10, 150]}>
				<Tag text={"tag"} color={"blue"} />

				<Input
					dropdown={[
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "Mintaqa",
						},
					]}
					placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
					button={"Izlash"}
				/>
				<Input
					dropdown={[
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "Mintaqa",
						},
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "Darajasi",
						},
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "O'qish turi",
						},
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "Yonalish",
						},
						{
							options: [
								"Barchasi",
								"Toshkent",
								"Samarqand",
								"Buxoro",
								"Sirdaryo",
								"Jizzax",
								"Qashqadaryo",
								"Andijon",
								"Namangan",
								"Farg’ona",
								"Surxondaryo",
								"Xorazm",
								"Navoiy",
								"Qoraqalpog’iston Respublikasi",
							],
							name: "Narxi",
						},
					]}
					placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
				/>

				<Counter
					options={[
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
						{ count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
					]}
				/>
				<ImageViewer />
				<Courses />
				<Carusel length={3} />
				<div>
					<Button label="Hello" border="full" type="primary" href="/home" />
					<Button
						label="Kirish"
						border="full"
						type="primary"
						onClick={() => console.log("Hello")}
					/>
					<Button label="Ro'yhatdan o'tish" border="full" type="secondary" />
					<Button
						label="Ro'yhatdan o'tish"
						border="half"
						type="secondary"
						width
					/>
				</div>
				<Card
					cardOptions={[
						{
							title: "Najot ta'lim",
							description: "Biz ilm va tajriba ulashamiz",
							score: 4.5,
							imgUrl: { img1 },
							href: "string",
						},
						{
							title: "PDP It Company",
							description: "Biz ilm va tajriba ulashamiz",
							score: 3.5,
							imgUrl: { img2 },
							href: "string",
						},
						{
							title: "Data learning center",
							description: "Biz ilm va tajriba ulashamiz",
							score: 5.5,
							imgUrl: { img3 },
							href: "string",
						},
					]}
				/>
			</Space>
		</div>
	);
};

export default Components;
