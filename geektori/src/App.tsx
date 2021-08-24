import Container from "./components/container";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/menu.scss";
import "./styles/sass/general.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/category";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartModal from "./components/shoppingCartModal";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/hamberger" component={ShoppingCartModal} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
export default App;
