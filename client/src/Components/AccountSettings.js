import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Row, Col, Divider } from "antd";
import FormItem from "antd/lib/form/FormItem";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class AccountSettings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      response:null,
    }
  }

  accoutSettingsFetch(LOGIN_INFORMATION,ROUTE){
    //console.log(LOGIN_INFORMATION);
   // console.log(JSON.stringify(LOGIN_INFORMATION));
    let mysqlServer="http://ec2-3-16-215-130.us-east-2.compute.amazonaws.com:8081";
    let serverRoute=ROUTE;
    fetch( mysqlServer + serverRoute + "" +  JSON.stringify(LOGIN_INFORMATION) + "" )
    .then(res => res.json())
    .then(
      (result) => {
        console.log("RESPONSE FROM SERVER : " + result.credentials);
        this.setState({
          response: result,
          success: true
        });
        console.log("login.loginFetch -> CONNECTTED TO SERVER");
        this.connectedToServer(true);
      },
      (error) => {
        this.setState({
          isLogin: false,
          success: false,
          error
        });
        this.connectedToServer(false)
        console.log("FAILED TO CONNECT TO SERVER");
      }
    )
  }
  
    connectedToServer(didConnect){      
      
        if(didConnect){
  
          this.correctCredentials(this.state.responce.credentials);
  
          if(this.state.isLogin){ // Login Route responded sucessfully
  
            console.log("Login was as, username: " + this.state.responce.username);
            
  
          } else if(!this.state.isLogin) {
    
            console.log("Credentials are wrong!!!!!");
    
          }
      }else{
  
            //DO SOMETHING HERE IF DIDNT CONNECT TO SERVER
      }
      
        
    
  
    }

  render() {
    return (
      <div>
          <Divider
            orientation="left"
            style={{ color: "#333", fontWeight: "normal" }}
          >
            Change Password
          </Divider>
        <Form {...layout}>
          
        <Form.Item
            name="currentPassword"
            label="Current Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm New Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider
            orientation="left"
            style={{ color: "#333", fontWeight: "normal" }}
          >
            Save Credit Card Info
          </Divider>
        <Form {...layout}>
         
          <Form.Item
            name={["user", "Cname"]}
            label="Cardholder Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "cardNumber"]}
            label="Card Number"
            rules={[{ type: "number", min: 0 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={["user", "ExpM"]}
            label="Experation Month"
            rules={[{ type: "number", min: 0, max: 12 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={["user", "ExpY"]}
            label="Experation Year"
            rules={[{ type: "number", min: 0, max: 9999 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={["user", "CVV"]}
            label="CVV"
            rules={[{ type: "number", min: 0, max: 999 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        
      </div>
    );
  }
}
export default AccountSettings;