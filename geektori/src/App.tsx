import { useState } from "react";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/shopping-cart.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/menu.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/category";
import Detail from "./pages/DetailPage";
import { Navbar, ShoppingBasket } from "./components/Navbar";
import ShowSnackBar from "./components/ShowSnackBar";
import Container from "./components/Container";
import { ShoppingCartProvider } from "./contexts/shopping-cart-context";

function App() {

	return (
		<BrowserRouter>
			<Container>
				<ShoppingCartProvider>
					<Navbar />
					<ShoppingBasket />
				</ShoppingCartProvider>
				<ShowSnackBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/category' component={Category} />
					<Route exact path='/product/:id' component={Detail} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
}
export default App;
