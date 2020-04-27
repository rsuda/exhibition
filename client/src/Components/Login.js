import React from 'react';
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Divider} from 'antd';
import {Redirect} from "react-router-dom";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      responce: null,
      error: null,
      isLogin: false,
      username: "Not-Logged-In",
      success: false,
    };
  }

// ********************************** //
  layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

 tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};
// ********************************** //


printStateValues(){
  console.log("********STATE VALUES FROM:  Login.JS********");
  console.log("* isLogin  == " + this.state.isLogin + "  *" );
  console.log("* username == "  + "  *" );
  console.log("* sucess   == " + this.state.success + "  *" );
  console.log("********************************************");
}

correctCredentials(credentialResponce){
  if(credentialResponce){
    this.setState({
      isLogin: true,
      username: this.state.responce.username
    })
  }
}

loginFetch(LOGIN_INFORMATION){
  //console.log(LOGIN_INFORMATION);
 // console.log(JSON.stringify(LOGIN_INFORMATION));
  let mysqlServer="http://ec2-3-16-215-130.us-east-2.compute.amazonaws.com:8081";
  let serverRoute="/Login:";
  fetch( mysqlServer + serverRoute + "" +  JSON.stringify(LOGIN_INFORMATION) + "" )
  .then(res => res.json())
  .then(
    (result) => {
      console.log("RESPONCE FROM SERVER : " + result.credentials);
      this.setState({
        responce: result,
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

 onFinishFailed = errorInfo => {

  console.log('Login.js -> Form error: ', errorInfo);

};

onFinish = values => {

    // console.log("Values recieved from login.form \n"  + values.username + "\n" + values.password );
    this.loginFetch({user: values.username, pass: values.password});
    

      // DO SOMETHING HERE TELL USER THIS SERVER IS DOWN


   

};
  render() {
    //this.printStateValues();

    if(!this.state.isLogin){ 

      return (
        <div>
        <Divider orientation="left" style={{ color: "#333", fontWeight: "normal" }}>
            Log In
          </Divider>  

        <Form {...this.layout} name="basic" initialValues={{ remember: true, }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', }, ]} >
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[ { required: true, message: 'Please input your password!', }, ]} >
            <Input.Password />
          </Form.Item>
          <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...this.tailLayout}>
            <Button type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    } else if(this.state.isLogin){
      let routePath = "/Home" + "/recommended/" + this.state.username;
        return (
          <div>
            <h1>test</h1>
            
          <Redirect to={routePath}/>
          </div>
        );

    }
    return (
      <h1> REPORT THIS IF YOU SEE THIS </h1>
    )
  }
}
export default Login;