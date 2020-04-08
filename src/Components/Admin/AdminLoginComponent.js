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

                        <Col xs={1} sm={1} md={4} lg={9} xl={9}></Col>
                        <Col xs={22} sm={22} md={16} lg={6} xl={6}>

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
