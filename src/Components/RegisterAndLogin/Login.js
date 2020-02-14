import React from 'react'
import { Form, Icon, Input, Button, Tooltip } from 'antd';
import './Login.css';
import {connect}　from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Login_main">

            <div className="Login_title">登　录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">

                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ pattern: '^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$', message: '请输入正确的邮箱!' },
                                { required: true, message: '邮箱不能为空' }],
                    })(
                        // 登录
                        <Input
                            size="large"
                            placeholder="请输入你的登录邮箱"
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={
                                <Tooltip title="请输入正确格式的邮箱帐号">
                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空' }],
                    })(
                        // 密码
                        <Input.Password size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码"  />
                    )}
                </Form.Item>
                <Form.Item>
                <div className="forget_password">忘记密码</div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                       登　录
                    </Button>
                    <div className="to_register" onClick={this.props.toRegisterMain}>立即注册</div>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


const mapDispatchToProps = (dispatch) => {
    return {
        toRegisterMain: () => {
            dispatch(actionCreators.toRegisterMain())
        }
    }
}
export default connect(null,mapDispatchToProps)(WrappedNormalLoginForm) ;