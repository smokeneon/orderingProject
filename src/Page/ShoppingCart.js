import React, { Component } from 'react'
import Footer from '../Components/common/Footer'
import { Row, Col } from 'antd';
import CommonBanner from '../Components/common/CommonBanner';
import ShoppingCartMain from '../Components/ShoppingCart/ShoppingCartMain'
export default class ShoppingCart extends Component {
    render() {
        return (
            <>
                <Row type="flex" justify="center" >
                    {/* banner栏 */}
                    <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                        <CommonBanner commonbannerTitle="我的购物车"/>
                        {/* 购物车 */}
                        <ShoppingCartMain/>
                        {/* 页脚 */}
                        <Footer />
                    </Col>
                </Row>
            </>
        )
    }
}
