import React, { useState, useEffect } from 'react';
import './DishesAddContent.css';
import { Row, Col, Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
        md: { span: 5 },
        lg: { span: 5 },
        xl: { span: 5 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 16 },
        lg: { span: 16 },
        xl: { span: 16 }
    },
};

const DishesAddContent = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        form.validateFields(['dishName']);
    }, [checkNick]);

    const onCheckboxChange = e => {
        setCheckNick(e.target.checked);
    };

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };


    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <>
            <Row type="flex" >
                <div className="dishes_add_main">
                    <Col xs={0} sm={0} md={7} lg={7} xl={7}></Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <div className="dishes_add_area">
                            <div className="dishes_add_title">添加菜品</div>
                            <div className="dishes_add_content">
                                <Form {...formItemLayout} form={form} name="dynamic_rule">
                                    <Form.Item
                                        label="菜品名"
                                        name="dishName"
                                        rules={[{ required: true, message: '请输入菜品名称!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="菜品单价"
                                        name="dishUnitPrice"
                                        rules={[{ required: true, message: '请输入菜品名称!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="菜品分类"
                                        name="dishCategory"
                                        rules={[{ required: true, message: '请输入菜品名称!' }]}
                                    >
                                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>
                                                Disabled
                                            </Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="菜品描述"
                                        name="dishDescribe"
                                        rules={[{ required: true, message: '请输入菜品名称!' }]}
                                    >
                                        <Input.TextArea />
                                    </Form.Item>


                                    <Form.Item
                                        name="upload"
                                        label="菜品图片"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        extra="选择图片"
                                    >
                                        <Upload name="logo" action="/upload.do" listType="picture">
                                            <Button>
                                                <UploadOutlined /> 点击上传
                                            </Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" onClick={onCheck}>
                                            提交
                                         </Button>
                                    </Form.Item>

                                </Form>

                            </div>
                        </div>
                    </Col>
                </div>
            </Row>

        </>
    )



}



export default DishesAddContent;