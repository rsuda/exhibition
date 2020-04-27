import React from "react";
import MiniItemRow from "./MiniItemRow.js";
import MiniItem from "./MiniItem.js";
import "./CSS_FILES/MiniItem.css";
import { Row, Col, Divider } from "antd";
import { Button } from "antd";
import {Redirect} from 'react-router-dom';

const style = { background: "#0092ff", padding: "8px 0" };

class Sell extends React.Component {
    constructor(props){
        super(props);
    }
state = {
    additem:false,
}
onButtonClick = (values) => {
    this.setState({
        additem:true,
    })
}
  render() {
      if(!this.state.additem) {
        return (
        <>
            <Divider
            orientation="left"
            style={{ color: "#333", fontWeight: "normal" }}
            >
            Unsold Items
            </Divider>
            <MiniItemRow />
            <Divider
            orientation="left"
            style={{ color: "#333", fontWeight: "normal" }}
            >
            Sold Items
            </Divider>
            <MiniItemRow />
            <Button onClick={this.onButtonClick} type="primary" block>
            Add Item
            </Button>
        </>
        );
    }else{
       return <Redirect to="/AddItem"/>
    }
  }
}
export default Sell;