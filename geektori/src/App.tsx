import Container from "./components/container";
import "./styles/sass/container__body.scss";
import ItemHeader from "./components/ItemHeader";
import FAQContainer from "./components/FAQContainer";
import "./styles/sass/general.scss";
import { Card, AddToCart, OffLable } from "./components/card";
import CardMedia from "./components/card-media";
import { CardContent, Description, Price } from "./components/card-content";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/general.scss";
import Vanilla from "./images/vanilla.png";
import Lama from "./images/lama.png";
import Octopus from "./images/octopus.jpg";
import Penguin from "./images/penguin.png";
import Carousel from "./components/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items: {
  price: number;
  image: string;
  imageAlt?: string;
  title: string;
  existance: boolean;
}[] = [
  {
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },{
    image: Vanilla,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },{
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },{
    image: Octopus,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },{
    image: Lama,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
];

function App() {
  const carouselItems = items.map(item => (
    <Card>
      <CardMedia imageSrc={item.image} imageAlt={item.imageAlt} />
      <CardContent>
        <Description text={item.title} />
        <Price price={item.price} existence={item.existance} />
      </CardContent>
      <AddToCart />
    </Card>
  ));
  return (
    <Container>
      <ItemHeader text="جدیدترین ها"></ItemHeader>

      <Carousel items={carouselItems} />

      <ItemHeader text="سوالات پرتکرار"></ItemHeader>
      <FAQContainer></FAQContainer>
    </Container>
  );
}
export default App;
