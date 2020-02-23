import React, { Component } from 'react'
import './DishesAddContent.css';
import { Row,Upload, Col, Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber,Icon } from 'antd';

const { Option } = Select;

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

class DishesAddContent extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Row type="flex" >
                    <div className="dishes_add_main">
                        <Col xs={0} sm={0} md={7} lg={7} xl={7}></Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                            <div className="dishes_add_area">
                                <div className="dishes_add_title">添加菜品</div>
                                <div className="dishes_add_content">
                                    <Form {...formItemLayout}>
                                        <Form.Item
                                            label="Fail"
                                            validateStatus="error"
                                            help="Should be combination of numbers & alphabets"
                                        >
                                            <Input placeholder="unavailable choice" id="error" />
                                        </Form.Item>

                                        <Form.Item label="Warning" validateStatus="warning">
                                            <Input placeholder="Warning" id="warning" />
                                        </Form.Item>

                                        <Form.Item
                                            label="Validating"
                                            hasFeedback
                                            validateStatus="validating"
                                            help="The information is being validated..."
                                        >
                                            <Input placeholder="I'm the content is being validated" id="validating" />
                                        </Form.Item>

                                        <Form.Item label="Success" hasFeedback validateStatus="success">
                                            <Input placeholder="I'm the content" id="success" />
                                        </Form.Item>

                                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                                            <Input placeholder="Warning" id="warning2" />
                                        </Form.Item>

                                        <Form.Item
                                            label="Fail"
                                            hasFeedback
                                            validateStatus="error"
                                            help="Should be combination of numbers & alphabets"
                                        >
                                            <Input placeholder="unavailable choice" id="error2" />
                                        </Form.Item>

                                        <Form.Item label="Success" hasFeedback validateStatus="success">
                                            <DatePicker style={{ width: '100%' }} />
                                        </Form.Item>

                                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                                            <TimePicker style={{ width: '100%' }} />
                                        </Form.Item>

                                        <Form.Item label="Error" hasFeedback validateStatus="error">
                                            <Select defaultValue="1">
                                                <Option value="1">Option 1</Option>
                                                <Option value="2">Option 2</Option>
                                                <Option value="3">Option 3</Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            label="Validating"
                                            hasFeedback
                                            validateStatus="validating"
                                            help="The information is being validated..."
                                        >
                                            <Cascader defaultValue={['1']} options={[]} />
                                        </Form.Item>

                                        <Form.Item label="inline" style={{ marginBottom: 0 }}>
                                            <Form.Item
                                                validateStatus="error"
                                                help="Please select the correct date"
                                                style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                                            >
                                                <DatePicker />
                                            </Form.Item>
                                            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                                            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                                <DatePicker />
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item label="Success" hasFeedback validateStatus="success">
                                            <InputNumber style={{ width: '100%' }} />
                                        </Form.Item>

                                        <Form.Item label="Success" hasFeedback validateStatus="success">
                                            <Input allowClear placeholder="with allowClear" />
                                        </Form.Item>

                                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                                            <Input.Password placeholder="with input password" />
                                        </Form.Item>

                                        <Form.Item label="Error" hasFeedback validateStatus="error">
                                            <Input.Password allowClear placeholder="with input password and allowClear" />
                                        </Form.Item>

                                        <Form.Item label="Dragger">
                                            {getFieldDecorator('dragger', {
                                                valuePropName: 'fileList',
                                                getValueFromEvent: this.normFile,
                                            })(
                                                <Upload.Dragger name="files" action="/upload.do">
                                                    <p className="ant-upload-drag-icon">
                                                        <Icon type="inbox" />
                                                    </p>
                                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                                </Upload.Dragger>,
                                            )}
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
}

const WrappedDemo = Form.create({ name: 'validate_other' })(DishesAddContent);

export default WrappedDemo;