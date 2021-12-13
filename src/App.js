import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Aberturas from "./components/Aberturas";
import Amoblamientos from "./components/Amoblamientos";
import Cerrajerias from "./components/Cerrajerias";

import Comercios from "./components/Comercios";
import Constructoras from "./components/Constructoras";
import Corralones from "./components/Corralones";
import Electricidad from "./components/Electricidad";
import Ferreterias from "./components/Ferreterias";
import Maderas from "./components/Maderas";
import Navbar from "./components/Navbar";
import Pinturerias from "./components/Pinturerias";
import Revestimientos from "./components/Revestimientos";
import Sanitarios from "./components/Sanitarios";
import Vidrierias from "./components/Vidrierias";
import Zinguerias from "./components/Zinguerias";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/comercios" component={Comercios} />
          <Route exact path="/aberturas" component={Aberturas} />
          <Route exact path="/amoblamientos" component={Amoblamientos} />
          <Route exact path="/cerrajerias" component={Cerrajerias} />
          <Route exact path="/constructoras" component={Constructoras} />
          <Route exact path="/corralones" component={Corralones} />
          <Route exact path="/electricidad" component={Electricidad} />
          <Route exact path="/ferreterias" component={Ferreterias} />
          <Route exact path="/maderas" component={Maderas} />
          <Route exact path="/pinturerias" component={Pinturerias} />
          <Route exact path="/revestimientos" component={Revestimientos} />
          <Route exact path="/sanitarios" component={Sanitarios} />
          <Route exact path="/vidrierias" component={Vidrierias} />
          <Route exact path="/zinguerias" component={Zinguerias} />
          <Redirect to="/comercios" component={Comercios} />
          {/* <Redirect exact path to="/comercios" component={Comercios}/> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
