import React from 'react';
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from 'antd';

class Login extends React.Component{

  layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

 tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

  render() { 

    const onFinish = values => {
        console.log('Success:', values);
      };

      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

     return (

    <Form
      {...this.layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...this.tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
    }


}
export default Login;