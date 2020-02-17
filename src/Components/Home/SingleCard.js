import React, { Component } from 'react'
import './SingleCard.css';
import { Button } from 'antd';
export default class SingleCard extends Component {
    render() {
        return (
            <>
                {/* 一个卡片菜品 */}
                <div className="singlecard">

                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src={this.props.item.foodPicUrl} />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                        <div className="food_name"><span>{this.props.item.foodName}</span></div>
                        <div className="food_message">
                            <span className="food_price">￥<span>{this.props.item.unitPrice}</span> </span>
                          
                            <span className="food_order">
                                <Button>详情</Button>
                                <Button type="primary">立即订餐</Button>
                            </span>
                        </div>

                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
            </>
        )
    }
}
