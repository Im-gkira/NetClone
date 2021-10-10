
import './App.scss';
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/register";
import Login from "./Pages/login/login";
import Watch from "./Pages/Watch/watch";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Featured from "./components/Featured/feature";


function App() {
  return (
      <Router>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/movies">
              <Home type="movies" />
          </Route>
          <Route path="/series">
              <Home type="series" />
          </Route>
          <Route path="/watch">
              <Watch/>
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
      </Switch></Router>
  );
}

export default App;
