import React from 'react'
import './DishesAddContent.css';
import { Row, Col, Form, Input, Upload, Button ,Select} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {connect}　from 'react-redux';
import * as actionCreators from '../../../store/actionCreator';
const { Option } = Select;
class DishesAddContent extends React.Component {
    state={
        searchValue:0,
    }
    formItemLayout = {
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

    handleSubmit = e => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.props.toLogin(values);
            }
        });
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    handleChange=(value) =>{
        console.log(`selected ${value}`);
    }

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
                                    <Form {...this.formItemLayout} onSubmit={this.handleSubmit}>
                                        
                                        <Form.Item
                                            label="菜品名称"
                                        >
                                            {getFieldDecorator('dishName', {
                                                rules: [{ required: true, message: '请输入菜品名称' }],
                                            })(
                                                // 菜品名
                                                <Input />
                                            )}

                                        </Form.Item>
                                        <Form.Item
                                            label="菜品单价"
                                        >
                                            {getFieldDecorator('dishUnitPrice', {
                                                rules: [{ required: true, message: '请输入菜品单价' }],
                                            })(
                                                // 菜品名
                                                <Input />
                                            )}

                                        </Form.Item>
                                        <Form.Item
                                            label="菜品分类"
                                        >
                                            {getFieldDecorator('dishCategory', {
                                                rules: [{ required: true, message: '请选择菜品分类' }],
                                            })(
                                                <Select
                                                 onChange={this.handleChange}>
                                                {
                                                    this.props.dishesCategoriesList.map((item,index)=>{
                                                        return (
                                                            <Option key={index} value={item.name}>{item.name}</Option>
                                                        )
                                                    })
                                                }
                                               
                                            </Select>
                                             )}

                                        </Form.Item>
                                        <Form.Item
                                            label="菜品描述"
                                        >
                                            {getFieldDecorator('dishDescribe', {
                                                rules: [{ required: true, message: '请简要描述菜品信息' }],
                                            })(
                                                <Input.TextArea />
                                            )}

                                        </Form.Item>


                                        <Form.Item
                                            name="upload"
                                            label="菜品图片"
                                            valuepropname="fileList"
                                            getvaluefromevent={this.normFile}
                                            extra="选择图片"
                                        >
                                            {getFieldDecorator('dishPicture', {
                                                rules: [{ required: true, message: '请上传菜品图片' }],
                                            })(
                                                <Upload name="logo" action="/upload.do" listType="picture">
                                                    <Button>
                                                        <UploadOutlined /> 点击上传
                                                    </Button>
                                                </Upload>
                                            )}

                                        </Form.Item>

                                        <Form.Item
                                         label=" "
                                        >
                                            <div className="submit_button">
                                            <Button　size="large" type="primary" htmlType="submit">
                                                提交
                                            </Button>
                                            </div>
                                            
                                        </Form.Item>

                                    </Form>

                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>

            </>
        );
    }
    componentDidMount(){
        this.props.getDishesCategories();
    }
}

const DishesAddContentForm = Form.create({ name: 'normal_login' })(DishesAddContent);


const mapStateToProps = (state, ownProps) => {
    return {
        dishesCategoriesList: state.get('dishesCategoriesList'),
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDishesCategories: () => {
            dispatch(actionCreators.getAllCategories())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishesAddContentForm) ;