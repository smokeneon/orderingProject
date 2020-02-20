import React, { Component } from 'react'
import './AdminLogin.css';
import Login from '../RegisterAndLogin/Login';
export default class AdminLogin extends Component {
    render() {
        return (
            <>
                <div className="admin_login_panel">
                    <div className="admin_login_area">
                        <div className="login_title">欢迎使用文理订餐后台</div>
                        <div className="login_content">
                            <Login/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
