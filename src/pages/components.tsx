import Counter from "@/components/counter/Counter";
import Input from "@/components/Input";
import Tag from "@/components/Tag/tag";
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
import Branch from "@/components/Branch";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsor";
import DynamicList from "@/components/Dynamic section/dynamic-list";
import {
  ImagesData,
  ImagesData2,
} from "@/components/ImageViewer/imagesData/imagesdata";
import { CoursesData } from "@/components/courses/coursesData/coursesData";

const DynamicSectionArr = [
  {
    title: "yonalish",
    tags: [
      {
        text: "Marketing",
      },
      {
        text: "Dasturlash",
      },
      {
        text: "Dizayn",
      },
      {
        text: "Marketing",
      },
      {
        text: "Dasturlash",
      },
      {
        text: "Dizayn",
      },
      {
        text: "Marketing",
      },
      {
        text: "Dasturlash",
      },
      {
        text: "Dizayn",
      },
    ],
  },
  {
    title: "O’qish turi",
    tags: [
      {
        text: "Offline",
      },
    ],
  },
  {
    title: "Telefon raqam",
    tags: [
      {
        text: "+998921234567",
      },
    ],
  },
];

const branch1 = {
  name: "Tashkent branch",
  mainAddress: "123 Main Street, Tashkent, Uzbekistan",
  onMap: "https://www.google.com/maps/place/123+Main+St,+Tashkent,+Uzbekistan/",
  phones: ["+998 71 123 45 67", "+998 99 876 54 32", "+998 99 876 54 32"],
};
const branch2 = {
  name: "Sergeli branch",
  mainAddress: "123 Main Street, Tashkent, Uzbekistan",
  onMap: "https://www.google.com/maps/place/123+Main+St,+Tashkent,+Uzbekistan/",
  phones: ["+998 71 123 45 67", "+998 99 876 54 32", "+998 99 876 54 32"],
};

const Components = () => {
  return (
    <div>
      <Navbar />
      {/* <Breadcrumb paths={[{ title: "O'quv Markazlari", link: "/" }]} /> */}
      <Space direction={"vertical"} size={[10, 150]}>
        <Tag text={"tag"} color={"blue"} />

        <DynamicList sectionList={DynamicSectionArr[0]} />
        <DynamicList sectionList={DynamicSectionArr[1]} />
        <DynamicList sectionList={DynamicSectionArr[2]} />
        <Branch branch={branch1} />
        <Branch branch={branch2} />
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
        <ImageViewer data={ImagesData2} />
        <ImageViewer data={ImagesData} />
        <ImageViewer
          width={1300}
          height={600}
          src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
        />
        <Courses data={CoursesData} />
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
        <Sponsor
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC"
          }
        />
      </Space>
      <Footer />
    </div>
  );
};

export default Components;
