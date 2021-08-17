import Container from "./components/container";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/general.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/category";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
export default App;
