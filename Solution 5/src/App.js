import "./App.css";
import Create from "./component/Create";
import Home from "./component/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/create"} exact component={Create} />
          <Route path={"/edit/:id"} exact component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
