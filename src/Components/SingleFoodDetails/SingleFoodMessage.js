import React, { Component } from 'react'
import './SingleFoodMessage.css';
import './SingleFoodMessage.m.css';
import { Rate, Button } from 'antd';
export default class SingleFoodMessage extends Component {
    render() {
        return (
            <>
                <div className="single_food_main">
                    {/* 菜品信息区域 */}
                    <div className="food_message_area">
                        <span className="food_pic">
                            <img src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" alt="/" />
                        </span>
                        <span className="food_message">
                            <div className="food_name">椒麻鸡丝饭单人套餐1</div>
                            <div className="user_star">评分　<Rate defaultValue={4} /></div>
                            <div className="food_details">该套餐包含：椒麻鸡丝饭 + 可乐(中杯) + 鲜蔬 色香味俱全。嘿嘿</div>
                            <div className="unit_price_and_btn">

                                <span className="unit_price">￥37</span>
                                <span className="unit_btn"><Button type="primary" size="large">加入购物车</Button></span>

                            </div>
                        </span>

                    </div>
                    {/* 用户评价区域 */}
                    <div className="food_message_appraise">
                        <div className="appraise_area_title">用户评价</div>
                        {/* 单个评论开始 */}
                        <div className="appraise_area">
                            <div className="appraise_nickname">Leondon</div>
                            <div className="appraise_star_and_time">
                                <span className="appraise_star"><Rate defaultValue={3} /></span>
                                <span className="appraise_time">2020.02.17</span>
                            </div>
                            <div className="appraise_content">真的好好吃啊好啊好哦吃豆腐水力发电上看到激发了三等奖发牢骚将大幅了</div>

                        </div>
                        {/* 单个评论结束 */}
                         {/* 单个评论开始 */}
                         <div className="appraise_area">
                            <div className="appraise_nickname">Leondon</div>
                            <div className="appraise_star_and_time">
                                <span className="appraise_star"><Rate defaultValue={3} /></span>
                                <span className="appraise_time">2020.02.17</span>
                            </div>
                            <div className="appraise_content">真的好好吃啊好啊好哦吃豆腐水力发电上看到激发了三等奖发牢骚将大幅了</div>

                        </div>
                        {/* 单个评论结束 */}
            
                    </div>
                    {/* 用户评价结束 */}


                </div>
            </>
        )
    }
}
