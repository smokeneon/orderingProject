import React, { Component } from 'react'
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './HomeContent.css'
export default class HomeContent extends Component {
    render() {
        return (
            <>
                <div className="admin_home_title" >

                    <h1>欢迎使用文理订餐平台后台管理系统</h1>
                </div>
                <div className="admin_to_root_home">
                    <Link to="/">
                        <Button type="default" size="large"><UpOutlined />回到根主页</Button>
                    </Link>
                </div>
            </>
        )
    }
}
