// import Container from "./components/Container";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/menu.scss";
import "./styles/sass/general.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/category";
import { Navbar } from "./components/Navbar";
import ShowSnackBar from "./components/ShowSnackBar";
import Container from './components/Container'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <ShowSnackBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
export default App;
