import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import { SmileOutlined, WhatsAppOutlined } from '@ant-design/icons';
import RotationChart from '../Components/Home/RotationChart ';
import { Link } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
    return (
        <>
            <Row type="flex" justify="center" >
                <Col xs={24} sm={24} md={20} lg={16} xl={16}>
                    <div className="welcome-panel">
                        <div className="welcome-content">
                            <div className="content-header">欢迎使用文理点餐平台</div>
                            <Link to="/u">
                                <Button type="primary" size="large"><SmileOutlined />我是用户</Button>
                            </Link>
                            <Link to="/a">
                                <Button type="primary" size="large"><WhatsAppOutlined />我是商家</Button>
                            </Link>
                            <RotationChart />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Welcome;
