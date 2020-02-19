import React, { Component } from 'react'
import './MyOrders.css'
export default class MyOrders extends Component {
    render() {
        return (
            <>
                <div className="myorder_area">
                    {/* 订单为空时 */}
                    {/* <div className="myorder_empty">
                        <div className="empty_text">订单当前为空，赶快下单吧！</div>
                    </div> */}
                    {/* 订单不为空时开始 */}
                    <div className="myorder_content">
                        {/* 该区域名 */}
                        <div className="myorder_title">
                            我的订单
                        </div>
                        {/* 一个订单 */}
                        <div className="single_order">
                            {/* 图片 */}
                            <span className="order_food_picture">
                                <img src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" alt="" />
                            </span>
                            <div className="order_other_things">
                                 {/* 名称时间数量 */}
                                <span className="order_message">
                                    <div className="single_order_name">大盘盖饭套餐</div>
                                    <div className="single_order_time">下单时间: 2020-01-16 12:28</div>
                                    <div className="single_order_mount">数量: 2</div>
                                </span>
                                {/* 总价 */}
                                <span className="order_total_price">
                                    总价: ￥31.8
                                </span>
                                {/* 状态 */}
                                <span className="order_status">
                                    已完成
                                </span>
                            </div>
                           
                    </div>
                    {/* 一个订单结束 */}

                     {/* 一个订单 */}
                     <div className="single_order">
                            {/* 图片 */}
                            <span className="order_food_picture">
                                <img src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" alt="" />
                            </span>
                            <div className="order_other_things">
                                 {/* 名称时间数量 */}
                                <span className="order_message">
                                    <div className="single_order_name">大盘盖饭套餐</div>
                                    <div className="single_order_time">下单时间: 2020-01-16 12:28</div>
                                    <div className="single_order_mount">数量: 2</div>
                                </span>
                                {/* 总价 */}
                                <span className="order_total_price">
                                    总价: ￥31.8
                                </span>
                                {/* 状态 */}
                                <span className="order_status">
                                    已完成
                                </span>
                            </div>
                           
                    </div>
                    {/* 一个订单结束 */}

                     {/* 一个订单 */}
                     <div className="single_order">
                            {/* 图片 */}
                            <span className="order_food_picture">
                                <img src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png" alt="" />
                            </span>
                            <div className="order_other_things">
                                 {/* 名称时间数量 */}
                                <span className="order_message">
                                    <div className="single_order_name">大盘盖饭套餐</div>
                                    <div className="single_order_time">下单时间: 2020-01-16 12:28</div>
                                    <div className="single_order_mount">数量: 2</div>
                                </span>
                                {/* 总价 */}
                                <span className="order_total_price">
                                    总价: ￥31.8
                                </span>
                                {/* 状态 */}
                                <span className="order_status">
                                    已完成
                                </span>
                            </div>
                           
                    </div>
                    {/* 一个订单结束 */}

                    

                    </div>
                    {/* 订单不为空时结束 */}
                </div>
            </>
        )
    }
}
