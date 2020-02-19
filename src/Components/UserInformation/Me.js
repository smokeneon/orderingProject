import React, { Component } from 'react'
import './Me.css';
import './Me.m.css';
import { Button } from 'antd';
import MyOrders from './MyOrders';
export default class Me extends Component {
    render() {
        return (
            <>
                <div className="me_main">
                    {/* 我的信息区域 */}
                    <div className="me_area">
                        <div className="me_content">
                        <span　className="head_picture">
                        <img src="https://i.loli.net/2020/02/19/fdTypGLAM3WRrsI.jpg" alt="/" />
                        </span>
                        <span className="me_message">
                            <div className="me_nickname">Leondon</div>
                            <div className="me_sex">性别: 男</div>
                            <div className="me_username">账户名: leon@hooc.top</div>
                            <div className="me_register_time_btn">
                                <span className="me_register_time">注册时间: 20200202</span>
                                <span className="me_register_btn"><Button size="large">编辑个人资料</Button></span>
                            </div>
                            
                        </span>
                        </div>
                    </div>
                    {/* 我的订单区域 */}
                        <MyOrders />
                    {/* 我的订单结束 */}
                </div>
            </>
        )
    }
}
