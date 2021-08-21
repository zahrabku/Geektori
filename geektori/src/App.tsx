import Container from "./components/container";
import "./styles/sass/container__body.scss";
import "./styles/sass/general.scss";
import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/general.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/category"></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
export default App;
