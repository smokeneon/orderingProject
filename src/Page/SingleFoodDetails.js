import React, { Component } from 'react'
import Footer from '../Components/common/Footer';
import {Row,Col} from 'antd';
import CommonBanner from '../Components/common/CommonBanner';
import SingleFoodMessage from '../Components/SingleFoodDetails/SingleFoodMessage';
export default class SingleFoodDetails extends Component {
    render() {
        return (
            <>
                  <Row type="flex" justify="center" >
                    {/* banner栏 */}
                    <Col xs={24} sm={24} md={16} lg={19} xl={16}>
                        <CommonBanner commonbannerTitle="菜品详情"/>
                        {/* 菜品信息 */}
                        <SingleFoodMessage />
                        {/* 评价信息 */}
                        {/* <SingleFoodAppraise /> */}
                        {/* 页脚 */}
                        <Footer />
                    </Col>
                </Row>
            </>
        )
    }
}
