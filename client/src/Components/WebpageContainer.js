import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Login from "./Login.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class WebpageContainer extends React.Component{
    constructor(props){
        super(props)
    this.State = {
    };
}
handleClick = e => {

        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };
   
render(){
    let { SubMenu } = Menu;
    let { Header, Content, Sider } = Layout;
return ( 
     <Layout>

    <Header className="header">
      <div className="logo" />
      <Menu onClick={this.handleClick} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="Login">Login/Logout</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>

    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      
    </Layout>
  </Layout>
    );
        }
}
export default WebpageContainer;