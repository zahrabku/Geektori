import Container from "./components/container";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/menu.scss";
import "./styles/sass/general.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Switch>
					<Route path='/' component={Home}/>
					{/* <Route path='/category' component={Category}/> */}
				</Switch>
			</Container>
		</BrowserRouter>
	);
}
export default App;
