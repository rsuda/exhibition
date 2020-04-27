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
    updateWebcontainer(){
        let {search, username} = this.props.match.params;
        console.log(this.state.username+ " -> " + username + "\n " + this.state.search + " " +  search);
        if(!(username == this.state.username)){
            console.log("Update")
            this.setState(
                {
                    username:username,
                    search:search
                }
            );
            this.props.parentCallBackFunction({search:search,username:username})
        }
        console.log("NO UPDATE")

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