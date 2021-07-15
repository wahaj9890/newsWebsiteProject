import Home from "./components/Home";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Health from "./components/Health";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/:search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
