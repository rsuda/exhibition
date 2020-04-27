import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import MiniItem from './MiniItem.js';
import MiniItemRow from './MiniItemRow.js';
import {useParams} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    state = {

        username:this.props.username,
        search:"Recommended"
    }
    homeFetch(SIGNUP_INFOMATION){
        let mysqlServer="http://ec2-3-16-215-130.us-east-2.compute.amazonaws.com:8081";
        let serverRoute="/search:";
        fetch( mysqlServer + serverRoute + JSON.stringify(SIGNUP_INFOMATION))
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            
            console.log("CONNECTTED TO SERVER");
      
          },
          (error) => {
           
            console.log("FAILED TO CONNECT TO SERVER");

          }
        )
      }
    updateWebcontainer(){
        let {search, username} = this.props.match.params;
        console.log(this.state.username+ " -> " + username + "\n " + this.state.search + " " +  search);
        if(!(username == this.state.username)){
            console.log("Home -> Update.username")
            this.setState(
                {
                    username:username,
                }
            );
            this.props.parentCallBackFunction({search:search,username:username})
        }
        if(!(this.state.search == search)){
            console.log("Home -> Update.search");
            this.setState(
                {
                    search:search
                }
            );
            this.homeFetch({search:search});

        }
        console.log("Home -> NO UPDATE")

    }
    render(){
       let numbers = [[<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>],
       [<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>,<MiniItem/>],
    ]
    //const { search } = ;

        this.updateWebcontainer();
        return (
            <div>
                <MiniItemRow />
                <MiniItemRow />
                <MiniItemRow />
            </div>

        );
    }
}
export default Home;