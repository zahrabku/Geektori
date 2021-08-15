import Container from "./components/container";
import { Card, AddToCart, OffLable } from "./components/card";
import CardMedia from "./components/card-media";
import { CardContent, Description, Price } from "./components/card-content";

import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/general.scss";

import Vanilla from "./images/vanilla.png";
import Lama from "./images/lama.png";
import Octopus from "./images/octopus.jpg";

function App() {
	return (
		<Container>
			<Card>
				<CardMedia image_src={Lama} image_alt='cute lama' />
				<CardContent>
					<Description text='Cute Lama استیکر' />
					<Price price='۲/۹۵۰' main_price='۳/...' />
				</CardContent>
				<AddToCart />
				<OffLable />
			</Card>
			<Card>
				<CardMedia image_src={Vanilla} image_alt='vanilla ice cream' />
				<CardContent>
					<Description text='استیکر بستنی وانیلی' />
					<Price price='۲/۹۵۵' main_price='۳/۶۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
			<Card>
				<CardMedia image_src={Octopus} image_alt='pink octopus' />
				<CardContent>
					<Description text='Pink Octopus استیکر' />
					<Price price='۳/۰۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
		</Container>
	);
}

export default App;
