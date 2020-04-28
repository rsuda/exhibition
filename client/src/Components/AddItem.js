import React from "react";
import { Row, Col, Layout } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./CSS_FILES/AddItem.css";
import 'console.image';



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

class AddItem extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    responce:null,
    imageList:[],
    connected:false
  };
  getBase64 = (file) =>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  addItemFetch(ADD_ITEM_ORDER){
    let mysqlServer="http://ec2-3-16-215-130.us-east-2.compute.amazonaws.com:8081";
    let serverRoute="/AddItem:";
    console.log(ADD_ITEM_ORDER)
    fetch( mysqlServer + serverRoute + "" +JSON.stringify(ADD_ITEM_ORDER) + "" )
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
  handleCancel = () => this.setState({ previewVisible: false });

  normFile = e => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
  
  

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  print(){
    console.log("IMAGE :")
    console.log(this.state.fileList[0])
    console.log("IMAGE1 :")

    console.log(this.state.fileList[1].response.url)
    console.log("IMAGE2 :")

    console.log(this.getBase64(this.state.fileList[0].originFileObj));

  }
  handleChange = ({ fileList }) => {
    this.setState({ fileList });
      console.log("handleChang" + fileList[0])
  };
  onFinishFailed = () => {}
  onFinish = (values) =>{
    console.log(values)
    console.log(values.user.name)
    console.log(values.user.age)
   // this.addItemFetch({username:values.user.name});
   this.print();
  }

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload picture</div>
      </div>
    );
    return (
      <div>
        <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Row>
            <Col span={12}>
            <Form.Item
                name={"images"}
                label="Item Name"
                rules={[{ required: true }]}
              >
              <div className="clearfix">
                <Upload 
                  action="test.jpg"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                  getValueFromEvent={this.normFile}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
          
              </div>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["user", "name"]}
                label="Item Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Price"
                rules={[{ required: true, type: "number", min: 0 }]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <Form.Item
                name={["user", "shortDescription"]}
                label="Short Description of Item"
                rules={[{ required: true }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[10, 10]}>
            <Col span={20}>
              <Form.Item
                name={["user", "descrition"]}
                label="Long Description of Iterm"
                rules={[{ required: true }]}

              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default AddItem;
