import React, { Component } from 'react'
import './ShoppingCartMain.css';
import {Button} from 'antd';
import SingleFoodlist from './SingleFoodlist';

export default class ShoppingCartMain extends Component {
    state = {
        shoppingGoodsList:[
            {
                foodId:'001',
                foodName:'椒麻鸡丝饭单人套餐1',
                foodPicUrl:'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice:37,
                foodMount:2,
                unitTotalPrice:74
            },
            {
                foodId:'002',
                foodName:'椒麻鸡丝饭单人套餐2',
                foodPicUrl:'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice:20,
                foodMount:2,
                unitTotalPrice:74
            },
            {
                foodId:'003',
                foodName:'椒麻鸡丝饭单人套餐3',
                foodPicUrl:'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice:47,
                foodMount:2,
                unitTotalPrice:74
            },
            {
                foodId:'004',
                foodName:'椒麻鸡丝饭单人套餐4',
                foodPicUrl:'https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png',
                unitPrice:15,
                foodMount:2,
                unitTotalPrice:74
            },
        ]
    }
    render() {
        return (
            <>
                <div className="shoppingcartPage">
                    <div className="shoppingcartmain">
                        {/* 当购物车为空 */}
                        {/* <div className="shoppingcart_empty"><span>购物车空空如也</span></div> */}
                        {/* 购物车头部 */}
                        <div className="shoppingcart_header">
                            <span className="choose">
                                选择
                            </span>
                            <span className="food">菜品</span>
                            <span className="unitprice">单价</span>
                            <span className="mount">数量</span>
                            <span className="money">金额</span>
                            <span className="option">操作</span>
                        </div>

                        {/* 菜品内容区域 */}
                        <div className="shoppingcart_content">
                        {
                            this.state.shoppingGoodsList.map((item, index) => {
                                return (
                                    // console.log(item,index)
                                    <SingleFoodlist key={index} item={item} />
                                    // <GoodList item={item} key={index} refresh={this.refresh.bind(this)}/>
                                )
                            })
                        }
                         
                        </div>
                        {/* 购物车页脚 */}
                        <div className="shoppingcart_footer">
                            <div className="footer_area">
                                <span className="footer_btn">
                                    <Button size="large" type="primary">去结算</Button>
                                </span>
                                <span className="footer_money">
                                    总计金额:
                                    <span className="money_value">
                                       ￥345
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </>
        )
    }
}
