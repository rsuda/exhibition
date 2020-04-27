import React from 'react';
import { Layout ,Affix} from 'antd';
import WebpageNav from './WebpageNav.js';
import ItemSearch from './ItemSearch.js';
import Item from './Item.js';
import Login from './Login.js';
import Cart from './Cart.js'
import Home from './Home.js'
import Sell from './Sell.js';
import AccountSettings from './AccountSettings.js';
import UserContext from './UserProvider.js'
import Signup from './Signup.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PreviousOrders from './PreviousOrders.js';
import Checkout from './Checkout.js';
import AddItem from './AddItem.js';


class WebpageContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          currentTab: "Home",
          username:"Not-Logged-In",
          login:false,
          search:"Recommended"
        };
        console.log("constructor");
}
//static contextType = UserContext;

homeCallBackFunction = (data) => {
  console.log(data.username);
  this.setState({
    username:data.username,
    search:data.search
  });
}

render(){
  //console.log("Current Tab:" + this.state.currentTab);
  let page = "";
  // page = this.SwitchPage1();
return ( 
  <Router>
     <Layout >
        <WebpageNav username={this.state.username}/>
        <ItemSearch username={this.state.username}/>   
        <Switch> 
          {console.log("testtest")}
            <Route path="/" exact component={Home}/>  
            <Route path="/Home/:search/:username" exact component={(props)=> <Home {...props}parentCallBackFunction = {this.homeCallBackFunction}  username={this.state.username} /> } />
            <Route path="/Login" exact component={Login}/>
            <Route path="/Cart/:username" exact component={(props)=> <Cart {...props} username={this.state.username}/>}/>
            <Route path="/Sell/:username" exact component={(props)=> <Sell {...props} username={this.state.username}/>}/>
            <Route path="/PreviousOrders" exact component={PreviousOrders}/>
            <Route path="/AccountSettings" exact component={AccountSettings }/>
            <Route path="/Signup" exact component={Signup}/>
            <Route path="/Item" exact component={Item}/>
            <Route path="/Checkout" exact component={Checkout}/>
            <Route path="/AddItem" exact component={AddItem}/>
        </Switch>
      
      </Layout>
    </Router>
    );
        }
}
export default WebpageContainer;