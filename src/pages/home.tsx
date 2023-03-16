import Layout from "@/components/Layout";
import Heading from "@/components/heading/Heading";
import Input from "@/components/Input";
import style from "@/styles/home.module.scss";
import Counter from "@/components/counter/Counter";
import Card from "@/components/card";
import Button from "@/components/Button";
import img1 from "../assets/media/Najot_Talim-01.png";
import Carusel from "../components/carusel/carusel";
import Sponsor from "@/components/Sponsor";

type CounterProps = {
  count: number;
  label: string;
};

const options: Array<CounterProps> = [
  { count: 3483, label: "Ro’yhatdan o’tkan o’quv markazlar" },
  { count: 9654, label: "Ro’yhatdan o’tkan foydalanuvchilar" },
  { count: 2314, label: "Foydalanuvchi izohlari" },
];

const sponsors = [
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
  {
    src: img1.src,
    alt: "lorem",
    href: "#",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className={style.homepage}>
        <div className={style.showcase}>
          <Heading
            title="Barcha o’quv markazlari bir joyda"
            titleSize="lg"
            highlightedWord="bir joyda"
          />
          <Input
            dropdown={[
              {
                options: ["Barchasi", "Ingliz tili", "SMM", "Dizayn", "Kimyo"],
                name: "Yo'nalish",
              },
            ]}
            placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
            button={"Izlash"}
          />
          <div className={style.about}>
            <div className={style.img}></div>
            <div className={style.text}>
              <p>
                <b>Findedu</b> - O’zbekistondagi barcha o’quv markazlarni o’z
                ichiga olgan platforma. Bizning platforma yordamida o’zingizga
                mos bo’lgan o’quv markazni juda tez tanlash imkoniyatiga ega
                bo’lasiz. Yoki o’z o’quv markazingizni ro’yhatdan o’tkazishingiz
                mumkin.
              </p>
            </div>
          </div>
          <Counter options={options} />
          <div className={style.videoBox}>
            <video width={400} height={600}></video>
          </div>
        </div>
        <div className={style.bestEdus}>
          <Heading
            title="Eng zo’r o’quv markazlar"
            titleSize="md"
            highlightedWord="zo’r"
            description="Foydalanuvchilarni baholariga qarab har oyda eng zo’r o’quv markazlar aniqlanadi. Bu jarayonda siz ham ishtirok etishingiz mumkin!"
          />
          <div className={style.content}>
            <Card
              title="Najot ta'lim"
              description="Biz ilm va tajriba ulashamiz"
              score={4.5}
              imgUrl={img1}
              href="/string"
            />
            <Card
              title="Najot ta'lim"
              description="Biz ilm va tajriba ulashamiz"
              score={4.5}
              imgUrl={img1}
              href="/string"
            />
            <Card
              title="Najot ta'lim"
              description="Biz ilm va tajriba ulashamiz"
              score={4.5}
              imgUrl={img1}
              href="/string"
            />
          </div>
          <div className={style.allEdus}>
            <Button
              label="Barcha o’quv markazlar"
              border="full"
              type="primary"
              href="/educations"
            />
          </div>
        </div>
        <div className={style.feedbacks}>
          <Heading
            title="Foydalanuvchilarning fikrlari"
            titleSize="md"
            highlightedWord="fikrlari"
            description="Platforma orqali o’ziga mos o’quv dargoh topkan foydalanuvchilarimzi yozib qoldirgan haqiqiy izohlar bilan tanishing!"
          />
          <Carusel length={3} />
        </div>
        <div className={style.sponsors}>
          <Heading
            title="Bizning hamkorlarimiz"
            titleSize="md"
            highlightedWord="hamkorlarimiz"
            description="Platforma sizga xizmat qilishida bizga yordam bergan barcha hamkorlarimizga minnatdorchilik bildirimaz!"
          />
          <div className={style.content}>
            {sponsors.map((item) => (
              <Sponsor src={item.src} alt={item.alt} href={item.href} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
