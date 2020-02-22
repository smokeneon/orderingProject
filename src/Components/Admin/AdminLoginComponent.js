import React, { Component } from 'react'
import './AdminLoginComponent.css';
import Login from '../RegisterAndLogin/Login';
import {Row,Col} from 'antd';
export default class AdminLoginComponent extends Component {
    render() {
        return (
            <>
             <Row type="flex" justify="center" >

                <div className="admin_login_panel">

                        <Col xs={0} sm={0} md={8} lg={8} xl={8}></Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>

                            <div className="admin_login_area">
                                <div className="login_title">欢迎使用文理订餐后台</div>
                                <div className="login_content">
                                    <Login />
                                </div>
                            </div>

                        </Col>

                </div>
             </Row>

            </>
        )
    }
}
