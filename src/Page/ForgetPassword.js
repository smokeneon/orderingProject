import React, { Component } from 'react'
import CommonBanner from '../Components/common/CommonBanner';
import ForgetPasswordMain from '../Components/ForgetPassword/ForgetPasswordMain'
import {Row,Col} from 'antd';
import Footer from '../Components/common/Footer';
export default class ForgetPassword extends Component {
    render() {
        return (
            <>
                  <Row type="flex" justify="center" >
                    {/* banner栏 */}
                    <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                        <CommonBanner commonbannerTitle="找回密码"/>
                        {/* 找回密码组件 */}
                        <ForgetPasswordMain/>
                        {/* 页脚 */}
                        <Footer />
                    </Col>
                </Row>
            </>
        )
    }
}
