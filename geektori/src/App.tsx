import Container from "./components/container";
import Card from "./components/card";
import CardMedia from "./components/card-media";
import CardContent from "./components/card-content";

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
				<CardMedia image_src={Lama} />
				<CardContent
					className={"esticker-content"}
					desc={"description"}
					price={"price"}
					main_price={"main_price"}
				/>
			</Card>
			<Card
				image_src={Vanilla}
				description='استیکر بستنی وانیلی'
				off={true}
				price='۲/۹۵۵'
				main_price='۳/۶۰۰'
			/>
			<Card
				image_src={Octopus}
				description='Pink Octopus استیکر'
				price='۳/۰۰۰'
			/>
		</Container>
	);
}

export default App;
