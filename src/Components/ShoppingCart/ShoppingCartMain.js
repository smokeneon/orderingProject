import React, { Component } from 'react'
import './ShoppingCartMain.css';
import {Checkbox,InputNumber,Icon} from 'antd';
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
                                        
                                        <img alt="" src="https://user-gold-cdn.xitu.io/2020/2/12/170384adf402648b?w=500&h=500&f=png&s=73774"></img>
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
                                        
                                        <img alt="" src="https://user-gold-cdn.xitu.io/2020/2/12/170384adf402648b?w=500&h=500&f=png&s=73774"></img>
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
                                        
                                        <img alt="" src="https://user-gold-cdn.xitu.io/2020/2/12/170384adf402648b?w=500&h=500&f=png&s=73774"></img>
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

                        </div>
                    </div>
                    
                </div>

            </>
        )
    }
}
