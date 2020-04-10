import React, { Component } from 'react'
import './SingleCard.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleCard extends Component {
    render() {
        return (
            <>
                {/* 一个卡片菜品 */}
                <div className="singlecard">

                    {/* 图片区域 */}
                    <div className="singlecard_pic">
                        <img alt="" src={this.props.item.pic} />
                    </div>
                    {/* 价格，数量区域 */}
                    <div className="singlecard_content">
                        <div className="food_name"><span>{this.props.item.name}</span></div>
                        <div className="food_message">
                            <span className="food_price">￥<span>{this.props.item.price}</span> </span>

                            <span className="food_order">
                                <Link to="/u/foodDetail"><Button>详情</Button></Link>
                                {
                                    this.props.isLogin === true || sessionStorage.getItem('isLogin')=== 'true' ?
                                    <Button type="primary">加入购物车</Button>
                                    :
                                    <Button type="primary">立即订餐</Button>
                                }
                                
                            </span>
                        </div>

                    </div>
                </div>
                {/* 一个卡片菜品　截止 */}
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.get('isLogin')
    }
}


export default connect(mapStateToProps,null)(SingleCard) ;
