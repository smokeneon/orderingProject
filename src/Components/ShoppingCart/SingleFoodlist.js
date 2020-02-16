import React, { Component } from 'react'
import {Checkbox,InputNumber,Icon} from 'antd';
import './SingleFoodlist.css';

export default class SingleFoodlist extends Component {
    state={
        unitPriceValue : 37,
        unitTotleValue : 0,
    }
    onChange=(e)=> {
        console.log(`checked = ${e.target.checked}`);
    }
    // 改变数量按钮
    changeMount = (mountValue)=>{
        const unitPrice = this.state.unitPriceValue;
        const totlePrice = unitPrice * mountValue;

        this.setState({
            unitTotleValue:totlePrice
        })
        console.log('changed', mountValue);
    }
    render() {
        return (
            <>
                {/* 一个菜品 */}
                <div className="content_area">
                    <div className="single_foods">
                        <span className="choose">
                            <Checkbox onChange={this.onChange}></Checkbox>
                        </span>
                        <span className="food">

                            <img alt="" src={this.props.item.foodPicUrl} ></img>
                        <span className="food_name">{this.props.item.foodName}</span>
                        </span>
                        <span className="unitprice">{this.props.item.unitPrice}</span>
                        <span className="mount">
                            <InputNumber
                                min={1}
                                max={50}
                                defaultValue={this.props.item.foodMount}
                                onChange={this.changeMount}
                            />
                        </span>
                        <span className="money">
                            <span className="howmuch">￥{this.props.item.unitTotalPrice}</span>
                        </span>
                        <span className="option">
                            <Icon type="close" />
                        </span>
                    </div>
                </div>
                {/* 一个菜品结束 */}

            </>
        )
    }
}
