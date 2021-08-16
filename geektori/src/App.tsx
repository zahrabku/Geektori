import Container from './components/container'
import './styles/sass/container__body.scss'
import ItemHeader from './components/ItemHeader'
import FAQContainer from './components/FAQContainer'
import './styles/sass/general.scss'
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

function App() {
  return(

      <Container >
        <Card>
				<CardMedia imageSrc={Lama} imageAlt='cute lama' />
				<CardContent>
					<Description text='Cute Lama استیکر' />
					<Price price='۲/۹۵۰' main_price='۳/...' />
				</CardContent>
				<AddToCart />
				<OffLable />
			</Card>
			<Card>
				<CardMedia imageSrc={Vanilla} imageAlt='vanilla ice cream' />
				<CardContent>
					<Description text='استیکر بستنی وانیلی' />
					<Price price='۲/۹۵۵' main_price='۳/۶۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
			<Card>
				<CardMedia imageSrc={Octopus} imageAlt='pink octopus' />
				<CardContent>
					<Description text='Pink Octopus استیکر' />
					<Price price='۳/۰۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
			<Card>
				<CardMedia imageSrc={Penguin} imageAlt='penguin' />
				<CardContent>
					<Description text='Penguin استیکر' />
					<Price price='۳/۰۰۰' existence={false} />
				</CardContent>
				<AddToCart />
			</Card>
        <ItemHeader text="سوالات پرتکرار"></ItemHeader>
        <FAQContainer></FAQContainer>
      </Container>
    
  );

  }
export default App;
