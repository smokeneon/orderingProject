import React from 'react'
import { Form, Icon, Input, Button, Tooltip,message } from 'antd';
import './Register.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class NormalLoginForm extends React.Component {
    state = {
        allowSendCode:true,
        userEmailInput : '',

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.error('发生错误：',values)
                // console.log('Received values of form: ', values);
            }
        });
    };

    allowBtnSend = e => {
        if(this.state.allowSendCode){
            this.setState({
                allowSendCode:false
            })
            this.props.getRegisterCode(this.state.userEmailInput)
            setTimeout(()=>{
                this.setState({
                    allowSendCode:true
                })
            },10000)
        }else{
            
            message.warning('频率过快，请一分钟后重新发送！');
          
        }
    }



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Register_main">

                <div className="Register_title">注 册</div>
                <Form onSubmit={this.handleSubmit} className="login-form">

                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ pattern: '^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$', message: '请输入正确的邮箱!' }
                                    ,{ required: true, message: '昵称不能为空' }],
                        })(
                            // 登录
                            <Input
                                size="large"
                                placeholder="请输入你的注册邮箱"
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={
                                    <Tooltip title="请输入正确格式的注册帐号">
                                        <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>
                                }
                                ref={(value)=>{this.state.userEmailInput=value}}
                            />
                        )}
                    </Form.Item>


                    <Form.Item>
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '昵称不能为空' }],
                        })(
                            // 昵称
                            <Input
                                size="large"
                                placeholder="请输入你的昵称"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={
                                    <Tooltip title="该昵称不可作为登录名">
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
                            <Input.Password size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('code', {
                            rules: [{ required: true, message: '验证码不能为空' }],
                        })(
                            // 验证码
                            <div>
                                <span className="register_code">
                                <Input
                                    size="large"
                                    placeholder="请输入你的验证码"
                                    prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={null}
                                />
                                </span>
                                <span className="register_btn">
                                    {
                                        this.state.allowSendCode ?  <Button　onClick={this.allowBtnSend}>获取验证码</Button> 
                                        : <Button onClick={this.allowBtnSend} type="default"><Icon type="loading" /></Button>
                                    }
                                   
                                </span>
                            </div>

                        )}
                    </Form.Item>



                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注　册
                    </Button>
                        <div className="to_register" onClick={this.props.toLoginMain}>立即登录</div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


const mapDispatchToProps = (dispatch) => {
    return {
        toLoginMain: () => {
            dispatch(actionCreators.toLoginMain())
        },
        getRegisterCode:(value)=>{
            // console.log(value.props.value)
            let email = value.props.value;
            dispatch(actionCreators.getRegisterCode(email))
        }
    }
}
export default connect(null, mapDispatchToProps)(WrappedNormalRegisterForm);