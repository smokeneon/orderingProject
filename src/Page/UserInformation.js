import React, { Component } from 'react'
import CommonBanner from '../Components/common/CommonBanner';
import {Row,Col} from 'antd';
import Footer from '../Components/common/Footer';
import Me from '../Components/UserInformation/Me';

export default class UserInformation extends Component {
    render() {
        return (
            <>
                 <Row type="flex" justify="center" >
                    {/* banner栏 */}
                    <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                        <CommonBanner commonbannerTitle="我的"/>
                        {/* 个人信息组件 */}
                        <Me />
                        {/* 页脚 */}
                        <Footer />
                    </Col>
                </Row>
            </>
        )
    }
}
