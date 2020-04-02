import React, { Component } from 'react'
import { Row, Col ,Button} from 'antd';
import './Welcome.css';
function Welcome(){
    return (
        <>
        <Row type="flex" justify="center" >
            <Col xs={24} sm={24} md={20} lg={16} xl={16}>
                      <div className="welcome-panel">
                          <div className="welcome-content">
                            <h1>欢迎使用文理点餐平台</h1>
                            <Button>我是用户</Button>
                            <Button>我是商家</Button>
                          </div>
                      </div>
            </Col>
        </Row>
        </>
    )
}

export default Welcome;
