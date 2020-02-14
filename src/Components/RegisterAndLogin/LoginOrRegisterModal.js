import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';
import { Modal } from 'antd';
// import './LoginOrRegister.css';
import Login from './Login';
import Register from './Register';
class LoginOrRegisterModal extends Component {
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
                        {!this.props.showRegisterOrLoginMain ? <Login/>: <Register/>}
                    </Modal>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modalVisible: state.get('modalVisible'),
        showRegisterOrLoginMain:state.get('showRegisterOrLoginMain')
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegisterModal);