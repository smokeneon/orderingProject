import React, { Component } from 'react'
import Footer from '../../Components/common/Footer';
import Admin from '../../Components/Admin/AdminLoginComponent';
import {Row,Col} from 'antd';
export default class AdminLogin extends Component {
    render() {
        return (
            <>
            <Row type="flex" justify="center" >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Admin/> 
                        <Footer/>
                    </Col>
            </Row>
            </>
        )
    }
}
