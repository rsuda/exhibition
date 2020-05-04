import React from "react";
import { Button, Select, Divider } from "antd";
import "./CSS_FILES/Item.css";
import Item from "./Item.js";

//This page will fill from AddItem.js
class AddItemConfirmation extends React.Component {
  render() {
    return (
      <div>
          <Divider>ADD CONFIRMATION PAGE</Divider>
        <Item />
        <Button type="primary">Confirm Add</Button>
        <Button danger>Cancel</Button>
      </div>
    );
  }
}
export default AddItemConfirmation;