import React from "react";
import MiniItemRow from "./MiniItemRow.js";
import MiniItem from "./MiniItem.js";
import "./CSS_FILES/MiniItem.css";
import { Row, Col, Divider } from "antd";
import { Button } from "antd";
import { Pagination } from "antd";



const style = { background: "#0092ff", padding: "8px 0" };

class PreviousOrders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        connected:false,
        responce:null
    }
}

loginFetch(PREVIOUS_ORDER){
    let mysqlServer="http://ec2-3-16-215-130.us-east-2.compute.amazonaws.com:8081";
    let serverRoute="/PreviousOrder:";
    console.log(PREVIOUS_ORDER)
    fetch( mysqlServer + serverRoute + "" +JSON.stringify(PREVIOUS_ORDER) + "" )
    .then(res => res.json())
    .then(
      (result) => {
          console.log("Reponce -> " + result)
        this.setState({
            responce:result
        });
        this.connectedToServer(true);
        console.log("CONNECTTED TO SERVER");
  
      },
      (error) => {
       this.connectedToServer(false);
        console.log("FAILED TO CONNECT TO SERVER");

      }
    )
  }
connectedToServer(connected){
    if(connected){
        //CONNECTED TO SERVER
        console.log(this.state.responce)
        if(this.state.responce ){
            this.setState(
                {
                    connected:true
                }
            );
        }else{
            // Connected TO SERVER, BUT DID NOT SUCESSFULL SIGNUP
        }
    }else{
        // DID NOT CONNECT TO SERVER
    }
}
onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}
componentDidMount(){
  this.loginFetch({username:this.props.username});
}
  render() {
    return (
      <div>
        <Divider orientation="left" style={{ color: "#333", fontWeight: "normal" }}>
          Previous Orders
        </Divider>
        <MiniItemRow />
        <Pagination defaultCurrent={1} total={200} onChange={this.onChange} />
      </div>
    );
  }
}
export default PreviousOrders;
