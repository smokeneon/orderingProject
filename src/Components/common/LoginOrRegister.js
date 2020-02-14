import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';
import { Modal, Input, Button, Tooltip, Icon } from 'antd';
import './LoginOrRegister.css';
const { Search } = Input;
class LoginOrRegister extends Component {
    state = { showRegisterMain: false }

    toRegisterMain = () => {
        this.setState({
            showRegisterMain: true
        })
    }
    toLoginMain =()=>{
        this.setState({
            showRegisterMain:false
        })
    }
    render() {
        return (
            <>
                <div>
                    <Modal
                        title="登录 / 注册"
                        visible={this.props.modalVisible}
                        onOk={this.props.handleOk}
                        onCancel={this.props.handleCancel}
                        footer={null}
                        centered={true}

                    >
                        {!this.state.showRegisterMain ?
                            // 登录
                            <div className="Login_main">
                                <div className="LoginAndRegister_title">登　录</div>
                                <Input
                                    placeholder="请输入你的登录邮箱"
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={
                                        <Tooltip title="请输入正确格式的邮箱帐号">
                                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                                <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                                <div className="forget_password">忘记密码</div>
                                <Button type="primary">登　录</Button>
                                <div className="to_register" onClick={this.toRegisterMain}>立即注册</div>
                            </div>
                            :
                            // 注册
                            <div className="Register_main">
                                <div className="LoginAndRegister_title">注 册</div>
                                <Input
                                    placeholder="请输入你的注册邮箱"
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={
                                        <Tooltip title="请输入正确格式的邮箱帐号">
                                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                                <Input
                                    placeholder="请输入你的昵称"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={
                                        <Tooltip title="该昵称不可作为登录帐号">
                                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                                <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入注册密码" />
                                <span className="register_code">
                                <Input
                                    placeholder="请输入你的验证码"
                                    prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={null}
                                />
                                </span>
                                <span className="register_btn">
                                    <Button>获取验证码</Button>
                                </span>
                               
                                <Button type="primary">注　册</Button>
                                <div className="to_login" onClick={this.toLoginMain}>立即登录</div>

                            </div>
                        }



                    </Modal>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modalVisible: state.get('modalVisible')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showModal: () => {
            dispatch(actionCreators.showModal())
        },
        handleCancel: () => {
            dispatch(actionCreators.cancelModal())
        },
        handleOk: () => {
            dispatch(actionCreators.cancelModal())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegister);