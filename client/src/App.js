import React from 'react';
import logo from './logo.svg';
import WebpageContainer from "./Components/WebpageContainer.js";
import './App.css';
import Login from "./Components/Login.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Login">Login</Link>
        <Link to="/">Main Page </Link>
        <Link to="/itemExample"> Item Example </Link>
        <Link to="/Catagories"> Catagories </Link>

        <Link to="/sellPage"> Sell Page</Link>

        <Switch>      
          <Route path="/Login2" exact component={Login} />
        <Route path="/Login">
            <Login />
          </Route>
          <Route exact path="/">
            <WebpageContainer/>
          </Route>
          <Route path="/itemExample">
              <Item />
            </Route>

            <Route path="/Catagories">
              <Catagories />
            </Route>

            <Route path="/sellPage">
              <Sell />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Item() {
  return (
    <div>
      <h2>Item</h2>
    </div>
  );
}
function Catagories() {
  return (
    <div>
      <h2>Catagories</h2>
    </div>
  );
}

function Sell() {
  return (
    <div>
    <Link to="/addItem">addItem</Link>
      <Switch>
        <Route path="/addItem">
          <AddItem />
        </Route>
        </Switch>
    </div>
  );
}
function AddItem() {
  return (
    <div>
      <h2>Adding ITem</h2>
    </div>
  );
}

export default App;
