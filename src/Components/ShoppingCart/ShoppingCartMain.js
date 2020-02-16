import React, { Component } from 'react'
import './ShoppingCartMain.css';
import {Checkbox,InputNumber,Icon, Button} from 'antd';
export default class ShoppingCartMain extends Component {
    onChange=(e)=> {
        console.log(`checked = ${e.target.checked}`);
    }

    changeMount = (value)=>{
        console.log('changed', value);
    }
    render() {
        return (
            <>
                <div className="shoppingcartPage">
                    <div className="shoppingcartmain">
                        {/* <div className="shoppingcart_empty"><span>购物车空空如也</span></div> */}
                        <div className="shoppingcart_header">
                            <span className="choose">
                                选择
                            </span>
                            <span className="food">菜品</span>
                            <span className="mount">数量</span>
                            <span className="money">金额</span>
                            <span className="option">操作</span>
                        </div>
                        <div className="shoppingcart_content">
                            {/* 一个菜品 */}
                            <div className="content_area">
                                <div className="single_foods">
                                    <span className="choose">
                                        <Checkbox onChange={this.onChange}></Checkbox>
                                    </span>
                                    <span className="food">
                                        
                                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png"></img>
                                        <span className="food_name">照烧鸡排饭（大）套餐</span>
                                    </span>
                                    <span className="mount">
                                        <InputNumber 
                                        min={1} 
                                        max={50} 
                                        defaultValue={1} 
                                        onChange={this.changeMount} 
                                        />
                                    </span>
                                    <span className="money">
                                        <span className="howmuch">￥37</span>
                                    </span>
                                    <span className="option">
                                        <Icon type="close" />
                                    </span>
                                </div>
                            </div>
                            {/* 一个菜品结束 */}
                              {/* 一个菜品 */}
                              <div className="content_area">
                                <div className="single_foods">
                                    <span className="choose">
                                        <Checkbox onChange={this.onChange}></Checkbox>
                                    </span>
                                    <span className="food">
                                        
                                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png"></img>
                                        <span className="food_name">照烧鸡排饭（大）套餐</span>
                                    </span>
                                    <span className="mount">
                                        <InputNumber 
                                        min={1} 
                                        max={50} 
                                        defaultValue={1} 
                                        onChange={this.changeMount} 
                                        />
                                    </span>
                                    <span className="money">
                                        <span className="howmuch">￥37</span>
                                    </span>
                                    <span className="option">
                                        <Icon type="close" />
                                    </span>
                                </div>
                            </div>
                            {/* 一个菜品结束 */}
                              {/* 一个菜品 */}
                              <div className="content_area">
                                <div className="single_foods">
                                    <span className="choose">
                                        <Checkbox onChange={this.onChange}></Checkbox>
                                    </span>
                                    <span className="food">
                                        
                                        <img alt="" src="https://i.loli.net/2020/02/16/mtuUPOpM6bFofQ5.png"></img>
                                        <span className="food_name">照烧鸡排饭（大）套餐</span>
                                    </span>
                                    <span className="mount">
                                        <InputNumber 
                                        min={1} 
                                        max={50} 
                                        defaultValue={1} 
                                        onChange={this.changeMount} 
                                        />
                                    </span>
                                    <span className="money">
                                        <span className="howmuch">￥37</span>
                                    </span>
                                    <span className="option">
                                        <Icon type="close" />
                                    </span>
                                </div>
                            </div>
                            {/* 一个菜品结束 */}
                          
                        </div>
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
